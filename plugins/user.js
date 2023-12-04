const { command } = require("../lib");

/* Copyright (C) 2023 Abhiiyh.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HANNA-XO-MD - Abhiiyh
*/


command(
  {
    pattern: "jid",
    fromMe: true,
    desc: "Give jid of chat/user",
    type: "user",
  },
  async (message, match) => {
    return await message.sendMessage(
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);

/* Copyright (C) 2023 Abhiiyh.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HANNA-XO-MD - Abhiiyh
*/


command(
  {
    pattern: "block",
    fromMe: true,
    desc: "Block a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply to a person or mention_");
      await message.block(jid);
      return await message.sendMessageMessage(
        `_@${jid.split("@")[0]} Blocked_`,
        {
          mentions: [jid],
        }
      );
    } else {
      await message.block(message.jid);
      return await message.reply("_User blocked_");
    }
  }
);

/* Copyright (C) 2023 Abhiiyh.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HANNA-XO-MD - Abhiiyh
*/


command(
	{
		pattern: "runtime",
		desc: "Bot runtime",
		fromMe: true,
		type: "user"
},
async (conn, match) => {
	await conn.reply(`*RUNTIME : ${runtime(process.uptime())}*`)
});
