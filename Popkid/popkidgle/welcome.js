import config from '../../config.cjs';

const gcEvent = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === 'welcome') {
    if (!m.isGroup) return m.reply('🚫 *This command only works in group chats!*');
    await m.reply('🧠 Processing your request...');

    // Set image only once
    let profilePic = 'https://files.catbox.moe/gg76op.jpg';
    try {
      profilePic = await Matrix.profilePictureUrl(m.chat, 'image');
    } catch {}

    // popkid
    let menuText;
    if (text === 'on') {
      config.WELCOME = true;
      menuText = `
╭───〔 ✅ *WELCOME ENABLED* 〕───╮
│ 🎉 Welcome system is now *ACTIVE*!
│ 👋 Members joining will be greeted.
│ 👋 Leaving members will be acknowledged.
╰────────────────────────────╯`;
    } else if (text === 'off') {
      config.WELCOME = false;
      menuText = `
╭───〔 ❌ *WELCOME DISABLED* 〕───╮
│ 🔇 Welcome messages are now *OFF*.
│ 😶 No alerts for joins or leaves.
╰────────────────────────────╯`;
    } else {
      menuText = `
╭────〔 ⚙️ *WELCOME SYSTEM HELP* 〕────╮
│
│ ✅ \`${prefix}welcome on\` – Enable
│ ❌ \`${prefix}welcome off\` – Disable
│ 📌 Group Only Command
│
╰────────────────────────────────╯`;
    }

    // Send a single stylish message with image
    await Matrix.sendMessage(m.from, {
      image: { url: profilePic },
      caption: menuText.trim(),
      contextInfo: {
        forwardingScore: 777,
        isForwarded: true,
        externalAdReply: {
          title: "👑 THE-HUB Bot",
          body: "Welcome system updated successfully!",
          thumbnailUrl: profilePic,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceUrl: "https://github.com/drapterlagas/THE-HUB"
        },
        forwardedNewsletterMessageInfo: {
          newsletterName: "THE-HUB",
          newsletterJid: "120363395396503029@newsletter",
        },
      }
    }, { quoted: m });
  }
};

export default gcEvent;
