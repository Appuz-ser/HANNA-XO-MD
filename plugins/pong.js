const {
    command
} = require("../lib/");
const {
    tiny
} = require("@viper-x/fancytext")
command(
    {
        pattern: "pong",
        fromMe: true,
        desc: "To check ping",
        type: "misc",
    },
    async (message, match) => {
        const start = new Date().getTime();
      let { key } = await message.reply(`*Ping!*`);
        const end = new Date().getTime();
var speed = end - start;
 
await new Promise(t => setTimeout(t,0))
         await message.client.sendMessage(message.jid,{text:`
*Ping!* 
*Pong:${speed}ms*
` , edit: key});
})
