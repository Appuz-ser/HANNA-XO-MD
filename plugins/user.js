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
