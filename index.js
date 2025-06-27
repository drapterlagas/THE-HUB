
// Cleaned version of index.js (deobfuscated)
import dotenv from 'dotenv';
dotenv.config();

import {
    makeWASocket,
    fetchLatestBaileysVersion,
    DisconnectReason,
    useMultiFileAuthState
} from '@whiskeysockets/baileys';

import { Handler, Callupdate, GroupUpdate } from './popkid/popkidd/popkiddd.js';
import express from 'express';
import pino from 'pino';
import fs from 'fs';
import NodeCache from 'node-cache';
import path from 'path';
import chalk from 'chalk';
import axios from 'axios';
import config from './config.cjs';
import { emojis, doReact } from './lib/autoreact.cjs';
import { fileURLToPath } from 'url';
import { File } from 'megajs';

const app = express();
let useQR = false;
let initialConnection = true;

const PORT = process.env.PORT || 3000;
const logger = pino({
    level: 'trace',
    timestamp: () => ',"time":"' + new Date().toJSON() + '"'
}).child({});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sessionDir = path.join(__dirname, 'session');
const credsPath = path.join(sessionDir, 'creds.json');

if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir, { recursive: true });

async function downloadSessionData() {
    console.log('🔄 Downloading Session...', config.SESSION_ID);
    if (!config.SESSION_ID) {
        console.error('❌ Please add your session to SESSION_ID env !!');
        return false;
    }
    const split = config.SESSION_ID.split('#')[1];
    if (!split || !split.includes('#')) {
        console.error('❌ Invalid SESSION_ID format!');
        return false;
    }
    const [fileId, key] = split.split('#');
    try {
        const file = File.fromURL(`https://mega.nz/file/${fileId}#${key}`);
        const buffer = await new Promise((resolve, reject) => {
            file.downloadBuffer((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
        await fs.promises.writeFile(credsPath, buffer);
        console.log('🔒 Session Successfully Loaded !!');
        return true;
    } catch (e) {
        console.error('❌ Failed to download session data:', e);
        return false;
    }
}

async function start() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
        const { version, isLatest } = await fetchLatestBaileysVersion();
        console.log(`🤖 THE-HUB using WA v${version.join('.')} | Latest: ${isLatest}`);

        const sock = makeWASocket({
            version,
            logger: pino({ level: 'trace' }),
            printQRInTerminal: useQR,
            browser: ['THE-HUB', 'Safari', '3.3'],
            auth: state,
            getMessage: async () => ({ conversation: 'nector~' })
        });

        sock.ev.on('connection.update', async ({ connection, lastDisconnect }) => {
            if (connection === 'close' && lastDisconnect?.output?.statusCode !== DisconnectReason.loggedOut) {
                console.log(chalk.green('🔄 Disconnected, restarting...'));
                await start();
            } else if (connection === 'open' && initialConnection) {
                console.log(chalk.green('✅ THE-HUB is now online!'));
                try {
                    await sock.groupAcceptInvite('FHDEPkBBf281sUcdj17eU9');
                    console.log(chalk.green('✅ Successfully joined group.'));
                } catch (e) {
                    console.error(chalk.red('❌ Failed to join group: ' + e.message));
                }

                await sock.sendMessage(sock.user.id, {
                    image: { url: 'https://files.catbox.moe/gg76op.jpg' },
                    caption: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ THE-HUB'
                });

                initialConnection = false;
            }
        });

        sock.ev.on('creds.update', saveCreds);
        sock.ev.on('messages.upsert', async msg => {
            try {
                const m = msg.messages[0];
                await Handler(msg, sock, logger);

                if (!m.key.fromMe && config.AUTO_REACT && m.message) {
                    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                    await doReact(emoji, m, sock);
                }
            } catch (e) {
                console.error('Auto react error:', e);
            }
        });

        sock.ev.on('call', async call => await Callupdate(call, sock));
        sock.ev.on('group-participants.update', async group => await GroupUpdate(sock, group));

        sock.public = config.MODE === 'public';
    } catch (e) {
        console.error('Critical Error:', e);
        process.exit(1);
    }
}

async function init() {
    if (fs.existsSync(credsPath)) {
        console.log('🔒 Session file found, proceeding without QR.');
        await start();
    } else {
        const downloaded = await downloadSessionData();
        if (downloaded) {
            console.log('✅ Session downloaded, starting bot.');
            await start();
        } else {
            console.log('❌ No session found or invalid, printing QR.');
            useQR = true;
            await start();
        }
    }
}

init();

app.use(express.static(path.join(__dirname, 'mydata')));
app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'mydata', 'index.html')));
app.listen(PORT, () => console.log(`🌐 Server running on port ${PORT}`));
