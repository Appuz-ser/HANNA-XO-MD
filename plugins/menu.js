const plugins = require("../lib/plugins");
const {
    command,
    isPrivate,
    clockString
} = require("../lib");
const {
    BOT_INFO
} = require("../config");
const config = require("../config");
const { tiny } = require("../lib/fancy_font/fancy");
command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show All Commands",
    dontAddCommandList: true,
    type: "user",
  },
  async (message, match) => {
try{
    if (match) {
      for (let i of plugins.commands) {
        if (
          i.pattern instanceof RegExp &&
          i.pattern.test(message.prefix + match)
        ) {
          const cmdName = i.pattern.toString().split(/\W+/)[1];
          message.reply(`\`\`\`Command: ${message.prefix}${cmdName.trim()}
Description: ${i.desc}\`\`\``);
        }
      }
    } else {
      let { prefix } = message;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
      let menu = `╭━━━〔 ${BOT_INFO.split(";")[0]} 〕━━━┈
┃    ╭──────────────
┃  ✺ │  *OWNER*:  ${BOT_INFO.split(";")[1]}
┃  ✺ │  *PREFIX*: ${prefix}
┃  ✺ │  *DATE*: ${date}
┃  ✺ │  *TIME*: ${time}
┃  ✺ │  *COMMANDS*: ${plugins.commands.length} 
┃  ✺ │  *VERSION*: 1.0.1
┃  ✺ │  *RAM*:14.8 GB/ 62.77 GB
┃  ✺ │  *PLATFROM*:linux
┃    ╰──────────────
╰━━━━━━━━━━━━━━━\n\n▎▍▌▌▉▏▎▌▉▐▏▌
▎▍▌▌▉▏▎▌▉▐▏▌\n𝐇𝐀𝐍𝐍𝐀-𝐗𝐎-𝐌𝐃\n`;

      let cmnd = [];
      let cmd;
      let category = [];
      plugins.commands.map((command, num) => {
        if (command.pattern instanceof RegExp) {
          cmd = command.pattern.toString().split(/\W+/)[1];
        }

        if (!command.dontAddCommandList  && cmd !== undefined) {
          let type = command.type ? command.type.toLowerCase() : "misc";

          cmnd.push({ cmd, type });

          if (!category.includes(type)) category.push(type);
        }
      });
      cmnd.sort();
      category.sort().forEach((cmmd) => {
        menu += `\n\t⤪────────「*${cmmd.toUpperCase()}*」────⤨`;
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }) => {
          menu += `\n||•➛  ${cmd.trim()}`;
        });
        menu += `\n`;
      });

      menu += `\n`;
      return await message.sendMessage(message.jid, { text: (tiny(menu)), contextInfo: { externalAdReply: {
title: config.BOT_INFO.split(';')[0],
sourceUrl: "https://instagram.com/abhiiiiiyh",
mediaUrl: "https://i.imgur.com/bX4ueai.jpeg",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: "https://i.imgur.com/bX4ueai.jpeg"
    })
    }
}catch(e){
message.reply(e)
}
  }
);
