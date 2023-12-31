const { command, parsedJid } = require("../lib/");

command(
  {
    pattern: "forward",
    fromMe: true,
    desc: "Forwards the replied Message",
    type: "user",
  },
  async (message, match, m) => {
    if(!m.quoted) return message.reply('*Reply to something*') 
    let jids = parsedJid(match);
    for (let i of jids) {
      await message.forward(i, message.reply_message.message);
    }   
  }
);
