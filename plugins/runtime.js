const { runtime, isPrivate } = require("../lib");

command(
	{
		pattern: "runtime",
		desc: "Bot runtime",
		fromMe: true,
		type: "user"
},
async (conn, match) => {
	await conn.reply(`*ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*`)
});
