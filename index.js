const _0x4292ba = _0x5d5f;
(function (_0x47c246, _0x15a51f) {
    const _0x2ee5fb = _0x5d5f,
        _0x1d990c = _0x47c246();
    while (!![]) {
        try {
            const _0x433ee0 = -parseInt(_0x2ee5fb(0x1cc)) / 0x1 + parseInt(_0x2ee5fb(0x198)) / 0x2 + -parseInt(_0x2ee5fb(0x1a3)) / 0x3 + parseInt(_0x2ee5fb(0x1bd)) / 0x4 + parseInt(_0x2ee5fb(0x18e)) / 0x5 + parseInt(_0x2ee5fb(0x18d)) / 0x6 * (-parseInt(_0x2ee5fb(0x1b6)) / 0x7) + -parseInt(_0x2ee5fb(0x19d)) / 0x8;
            if (_0x433ee0 === _0x15a51f) break;
            else _0x1d990c['push'](_0x1d990c['shift']());
        } catch (_0x4d49d2) {
            _0x1d990c['push'](_0x1d990c['shift']());
        }
    }
}(_0x263b, 0x670c7));
import _0x1cb3df from 'dotenv';
_0x1cb3df[_0x4292ba(0x1ba)]();
import {
    makeWASocket,
    fetchLatestBaileysVersion,
    DisconnectReason,
    useMultiFileAuthState
} from '@whiskeysockets/baileys';
import {
    Handler,
    Callupdate,
    GroupUpdate
} from './popkid/popkidd/popkiddd.js';
import _0xc0481c from 'express';

function _0x5d5f(_0x185de6, _0x585597) {
    const _0x263b74 = _0x263b();
    return _0x5d5f = function (_0x5d5fff, _0x10f255) {
        _0x5d5fff = _0x5d5fff - 0x17d;
        let _0x25bf80 = _0x263b74[_0x5d5fff];
        return _0x25bf80;
    }, _0x5d5f(_0x185de6, _0x585597);
}
import _0x97c8a9 from 'pino';

function _0x263b() {
    const _0xbbbf91 = ['✅ POPKID-GLE is now online!', 'silent', '133098YTZIpn', 'sendMessage', 'popkid-gle whatsapp user bot', 'sendFile', 'call', 'split', '✅ Successfully joined group.', 'private', 'MODE', 'SESSION_ID', 'index.html', 'output', 'POPKID-GLE', 'fromURL', 'creds.json', 'group-participants.update', '♻️ Connection reestablished after restart.', '6YjUJHw', '3378520xfYdPI', 'download', 'https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l', 'PORT', '✅ Session downloaded, starting bot.', 'session', 'statusCode', 'message', 'POPKID;;;', 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ popkid-gle', '1558172GAWXjq', 'Safari', 'green', '❌ Failed to join group: ', 'creds.update', '7049576lofGYw', 'length', ',\"time\":\"', ' | Latest: ', 'loadMessage', '120363420342566562@newsletter', '264927NcufeS', '\x0a╔═════════════════\x0a║ *✅POPKID CONNECTED*\x0a╠═════════════════\x0a║ *⚡DEV POPKID GLE*\x0a╚═════════════════\x0a║ *⌛NUM DEV :+254111385747*\x0a╚═════════════════', 'public', 'user', 'dirname', '❌ No session found or invalid, printing QR.', 'listen', 'mkdirSync', 'includes', 'level', '❌ Please add your session to SESSION_ID env !!', 'child', 'trace', 'existsSync', 'https://files.catbox.moe/alnj32.jpg', 'random', 'writeFile', 'messages', 'messages.upsert', '2661659xCJiqv', 'groupAcceptInvite', 'mydata', 'use', 'config', 'join', 'Debugging SESSION_ID:', '1800552KeHAVk', 'log', 'Auto react error:', 'AUTO_REACT', '🔄 Downloading Session...', 'remoteJid', '🔒 Session Successfully Loaded !!', 'error', 'key', 'get', '🌐 Server running on port ', 'fromMe', 'static'];
    _0x263b = function () {
        return _0xbbbf91;
    };
    return _0x263b();
}
import _0x3786c2 from 'fs';
import 'node-cache';
import _0x28230c from 'path';
import _0x3c48af from 'chalk';
import 'axios';
import _0x909a79 from './config.cjs';
import _0x3c0792 from './lib/autoreact.cjs';
import {
    fileURLToPath
} from 'url';
import {
    File
} from 'megajs';
const {
    emojis,
    doReact
} = _0x3c0792, app = _0xc0481c();
let useQR = ![],
    initialConnection = !![];
const PORT = process['env'][_0x4292ba(0x191)] || 0xbb8,
    MAIN_LOGGER = _0x97c8a9({
        'timestamp': () => _0x4292ba(0x19f) + new Date()['toJSON']() + '\"'
    }),
    logger = MAIN_LOGGER[_0x4292ba(0x1ae)]({});
logger[_0x4292ba(0x1ac)] = _0x4292ba(0x1af);
const __filename = fileURLToPath(
        import.meta['url']),
    __dirname = _0x28230c[_0x4292ba(0x1a7)](__filename),
    sessionDir = _0x28230c[_0x4292ba(0x1bb)](__dirname, _0x4292ba(0x193)),
    credsPath = _0x28230c[_0x4292ba(0x1bb)](sessionDir, _0x4292ba(0x18a));
!_0x3786c2['existsSync'](sessionDir) && _0x3786c2[_0x4292ba(0x1aa)](sessionDir, {
    'recursive': !![]
});
async function downloadSessionData() {
    const _0x16f92 = _0x4292ba;
    console[_0x16f92(0x1be)](_0x16f92(0x1bc), _0x909a79['SESSION_ID']);
    if (!_0x909a79[_0x16f92(0x185)]) return console[_0x16f92(0x1c4)](_0x16f92(0x1ad)), ![];
    const _0x409285 = _0x909a79[_0x16f92(0x185)][_0x16f92(0x181)](_0x16f92(0x196))[0x1];
    if (!_0x409285 || !_0x409285[_0x16f92(0x1ab)]('#')) return console['error']('❌ Invalid SESSION_ID format! It must contain both file ID and decryption key.'), ![];
    const [_0x57646d, _0xfd04f0] = _0x409285[_0x16f92(0x181)]('#');
    try {
        console[_0x16f92(0x1be)](_0x16f92(0x1c1));
        const _0x2b66aa = File[_0x16f92(0x189)]('https://mega.nz/file/' + _0x57646d + '#' + _0xfd04f0),
            _0x1c3c3e = await new Promise((_0x495825, _0x4980fa) => {
                const _0x3f61d5 = _0x16f92;
                _0x2b66aa[_0x3f61d5(0x18f)]((_0x2acfbc, _0x10655e) => {
                    if (_0x2acfbc) _0x4980fa(_0x2acfbc);
                    else _0x495825(_0x10655e);
                });
            });
        return await _0x3786c2['promises'][_0x16f92(0x1b3)](credsPath, _0x1c3c3e), console['log'](_0x16f92(0x1c3)), !![];
    } catch (_0x30a75c) {
        return console['error']('❌ Failed to download session data:', _0x30a75c), ![];
    }
}
async function start() {
    const _0x2fd0c9 = _0x4292ba;
    try {
        const {
            state: _0x428c9,
            saveCreds: _0x47293a
        } = await useMultiFileAuthState(sessionDir), {
            version: _0x59a8da,
            isLatest: _0x30c047
        } = await fetchLatestBaileysVersion();
        console[_0x2fd0c9(0x1be)]('🤖 POPKID-GLE using WA v' + _0x59a8da[_0x2fd0c9(0x1bb)]('.') + _0x2fd0c9(0x1a0) + _0x30c047);
        const _0x3a74cd = makeWASocket({
            'version': _0x59a8da,
            'logger': _0x97c8a9({
                'level': _0x2fd0c9(0x1cb)
            }),
            'printQRInTerminal': useQR,
            'browser': ['POPKID-GLE', _0x2fd0c9(0x199), '3.3'],
            'auth': _0x428c9,
            'getMessage': async _0x490ab5 => {
                const _0x118733 = _0x2fd0c9;
                if (store) {
                    const _0x58b0f1 = await store[_0x118733(0x1a1)](_0x490ab5[_0x118733(0x1c2)], _0x490ab5['id']);
                    return _0x58b0f1?. [_0x118733(0x195)];
                }
                return {
                    'conversation': _0x118733(0x17e)
                };
            }
        });
        _0x3a74cd['ev']['on']('connection.update', async ({
            connection: _0x1aeaa8,
            lastDisconnect: _0x5981e6
        }) => {
            const _0x48da30 = _0x2fd0c9;
            if (_0x1aeaa8 === 'close') _0x5981e6?. [_0x48da30(0x1c4)]?. [_0x48da30(0x187)]?. [_0x48da30(0x194)] !== DisconnectReason['loggedOut'] && start();
            else {
                if (_0x1aeaa8 === 'open') {
                    if (initialConnection) {
                        console[_0x48da30(0x1be)](_0x3c48af[_0x48da30(0x19a)](_0x48da30(0x1ca)));
                        try {
                            await _0x3a74cd[_0x48da30(0x1b7)]('FHDEPkBBf281sUcdj17eU9'), console[_0x48da30(0x1be)](_0x3c48af[_0x48da30(0x19a)](_0x48da30(0x182)));
                        } catch (_0x3f054e) {
                            console[_0x48da30(0x1c4)](_0x3c48af['red'](_0x48da30(0x19b) + _0x3f054e[_0x48da30(0x195)]));
                        }
                        const _0x39e3d2 = {
                            'url': _0x48da30(0x1b1)
                        };
                        _0x3a74cd['newsletterFollow'](_0x48da30(0x1a2)), _0x3a74cd['newsletterFollow']('120363420342566562@newsletter'), await _0x3a74cd[_0x48da30(0x17d)](_0x3a74cd[_0x48da30(0x1a6)]['id'], {
                            'image': _0x39e3d2,
                            'caption': _0x48da30(0x1a4),
                            'contextInfo': {
                                'isForwarded': !![],
                                'forwardingScore': 0x3e7,
                                'forwardedNewsletterMessageInfo': {
                                    'newsletterJid': '120363420342566562@newsletter',
                                    'newsletterName': _0x48da30(0x188),
                                    'serverMessageId': -0x1
                                },
                                'externalAdReply': {
                                    'title': _0x48da30(0x188),
                                    'body': _0x48da30(0x197),
                                    'thumbnailUrl': _0x48da30(0x1b1),
                                    'sourceUrl': _0x48da30(0x190),
                                    'mediaType': 0x1,
                                    'renderLargerThumbnail': ![]
                                }
                            }
                        }), initialConnection = ![];
                    } else console[_0x48da30(0x1be)](_0x3c48af['blue'](_0x48da30(0x18c)));
                }
            }
        }), _0x3a74cd['ev']['on'](_0x2fd0c9(0x19c), _0x47293a), _0x3a74cd['ev']['on'](_0x2fd0c9(0x1b5), _0x1c0ffa => Handler(_0x1c0ffa, _0x3a74cd, logger)), _0x3a74cd['ev']['on'](_0x2fd0c9(0x180), _0x2ac4cd => Callupdate(_0x2ac4cd, _0x3a74cd)), _0x3a74cd['ev']['on'](_0x2fd0c9(0x18b), _0x5c2d31 => GroupUpdate(_0x3a74cd, _0x5c2d31));
        if (_0x909a79['MODE'] === _0x2fd0c9(0x1a5)) _0x3a74cd[_0x2fd0c9(0x1a5)] = !![];
        else _0x909a79[_0x2fd0c9(0x184)] === _0x2fd0c9(0x183) && (_0x3a74cd[_0x2fd0c9(0x1a5)] = ![]);
        _0x3a74cd['ev']['on'](_0x2fd0c9(0x1b5), async _0x2b764f => {
            const _0x5533b5 = _0x2fd0c9;
            try {
                const _0x3dba2f = _0x2b764f[_0x5533b5(0x1b4)][0x0];
                if (!_0x3dba2f[_0x5533b5(0x1c5)][_0x5533b5(0x1c8)] && _0x909a79[_0x5533b5(0x1c0)] && _0x3dba2f[_0x5533b5(0x195)]) {
                    const _0xb078c3 = emojis[Math['floor'](Math[_0x5533b5(0x1b2)]() * emojis[_0x5533b5(0x19e)])];
                    await doReact(_0xb078c3, _0x3dba2f, _0x3a74cd);
                }
            } catch (_0x4138ed) {
                console[_0x5533b5(0x1c4)](_0x5533b5(0x1bf), _0x4138ed);
            }
        });
    } catch (_0xc4bcdb) {
        console['error']('Critical Error:', _0xc4bcdb), process['exit'](0x1);
    }
}
async function init() {
    const _0x1636cb = _0x4292ba;
    if (_0x3786c2[_0x1636cb(0x1b0)](credsPath)) console[_0x1636cb(0x1be)]('🔒 Session file found, proceeding without QR.'), await start();
    else {
        const _0x835794 = await downloadSessionData();
        _0x835794 ? (console['log'](_0x1636cb(0x192)), await start()) : (console[_0x1636cb(0x1be)](_0x1636cb(0x1a8)), useQR = !![], await start());
    }
}
init(), app[_0x4292ba(0x1b9)](_0xc0481c[_0x4292ba(0x1c9)](_0x28230c[_0x4292ba(0x1bb)](__dirname, _0x4292ba(0x1b8)))), app[_0x4292ba(0x1c6)]('/', (_0x1804ae, _0xfd2194) => {
    const _0x179d08 = _0x4292ba;
    _0xfd2194[_0x179d08(0x17f)](_0x28230c[_0x179d08(0x1bb)](__dirname, _0x179d08(0x1b8), _0x179d08(0x186)));
}), app[_0x4292ba(0x1a9)](PORT, () => {
    const _0x5063bb = _0x4292ba;
    console[_0x5063bb(0x1be)](_0x5063bb(0x1c7) + PORT);
});
