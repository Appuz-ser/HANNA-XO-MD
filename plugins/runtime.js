>const { runtime, isPrivate } = require("../lib");

command(
	{
		pattern: "a",
		desc: "Bot runtime",
		fromMe: true,
		type: "user"
},
async (conn, match) => {
	await conn.reply(`*ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*`)
});
