// ...top imports remain the same...
import {
  makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason,
  Browsers
} from '@whiskeysockets/baileys';
import pino from 'pino';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';

import { downloadSession } from './lib/mega.js';
import { loadPlugins } from './lib/plugin-loader.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SESSION_ID = process.env.SESSION_ID || '';
const PREFIX = process.env.PREFIX || '*';
const OWNER_NUMBER = process.env.OWNER_NUMBER || '';
const AUTO_BIO = process.env.AUTO_BIO === 'true';
const AUTO_STATUS_SEEN = process.env.AUTO_STATUS_SEEN === 'true';

const sessionPath = path.join(__dirname, 'session');
const logger = pino({ level: 'silent' });

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (_, res) => res.send('🟢 THE-HUB bot is running.'));
app.listen(PORT, () => console.log(`🌐 Express server running on port ${PORT}`));

async function startBot() {
  console.log('📦 Starting THE-HUB...');

  if (!fs.existsSync(sessionPath)) {
    console.log('⬇️ Downloading session from MEGA...');
    await downloadSession(SESSION_ID, sessionPath);
  }

  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    logger,
    auth: state,
    printQRInTerminal: true,
    browser: Browsers.ubuntu('Chrome'),
  });

  sock.ev.connectionUpdate = ({ connection, lastDisconnect }) => {
    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode;
      if (code === DisconnectReason.loggedOut) {
        console.log('🚪 Logged out. Restarting...');
        startBot();
      } else {
        console.log('❌ Connection closed. Reconnecting...');
        startBot();
      }
    } else if (connection === 'open') {
      console.log('✅ WhatsApp connection established.');
    }
  };

  await loadPlugins(sock, './popkid'); // plugin loader

  if (AUTO_BIO) {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      sock.updateProfileStatus(`THE-HUB • ⓃⒺCⓉOR🍯 • ${time}`);
    }, 60 * 1000);
  }

  if (AUTO_STATUS_SEEN) {
    sock.ev.messageStatusUpdate = async ({ key }) => {
      try {
        await sock.readMessages([key]);
      } catch {}
    };
  }

  sock.ev.creds.update = saveCreds;
}

startBot();
  
