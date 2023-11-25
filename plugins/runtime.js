const { runtime, isPrivate } = require("../lib");

/* Copyright (C) 2023 Abhiiyh.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HANNA-XO-MD - Abhiiyh
*/


command(
	{
		pattern: "a",
		desc: "Bot runtime",
		fromMe: true,
		type: "user"
},
async (conn, match) => {
	await conn.reply(`*Runtime : ${runtime(process.uptime())}*`)
});
