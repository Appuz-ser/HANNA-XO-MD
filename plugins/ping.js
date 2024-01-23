const {
    command,
    isPrivate
} = require("../lib/");
const {
    tiny
} = require("@viper-x/fancytext")
command(
    {
        pattern: "ping",
        fromMe: isPrivate,
        desc: "To check ping",
        type: "user",
    },
    async (message, match) => {
        const start = new Date().getTime();
      let { key } = await message.reply(`*Ping!*`);
        const end = new Date().getTime();
var speed = end - start;
 
await new Promise(t => setTimeout(t,0))
         await message.client.sendMessage(message.jid,{text:`
*ᴘɪɴɢ* 
*ʟᴀᴛᴇɴᴄʏ:${speed}ᴍs*
` , edit: key});
})
