const { command } = require("../lib");

/* Copyright (C) 2024 Abhiy.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HANNA-XO-MD - Abhiy
*/

command(
  {
    pattern: "dlt",
    fromMe: true,
    desc: "deletes a message",
    type: "user",
  },
  async (message, match,m,client) => {
    if (message.isGroup) {
      client.sendMessage(message.jid, { delete: message.reply_message.key })
    }
  }
);
