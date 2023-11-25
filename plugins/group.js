const config = require("../config");
const { command, isPrivate } = require("../lib/");
const { isAdmin, parsedJid, isUrl } = require("../lib");

/* Copyright (C) 2023 Abhiiyh.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HANNA-XO-MD - Abhiiyh
*/


command(
  {
    pattern: "gjid",
    fromMe: true,
    desc: "gets jid of all group members",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply("_This command is for groups_");
    let { participants } = await client.groupMetadata(message.jid);
    let participant = participants.map((u) => u.id);
    let str = "╭──〔 *Group Jids* 〕\n";
    participant.forEach((result) => {
      str += `├ *${result}*\n`;
    });
    str += `╰──────────────`;
    message.reply(str);
  }
);

/* Copyright (C) 2023 Abhiiyh.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HANNA-XO-MD - Abhiiyh
*/


command(
  {
    pattern: "tagall ?(.*)",
    fromMe: true,
    desc: "mention all users in group",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return;
    const { participants } = await message.client.groupMetadata(message.jid);
    let teks = "";
    for (let mem of participants) {
      teks += ` ➛ @${mem.id.split("@")[0]}\n`;
    }
    message.sendMessage(teks.trim(), {
      mentions: participants.map((a) => a.id),
    });
  }
);


/* Copyright (C) 2023 Abhiiyh.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HANNA-XO-MD - Abhiiyh
*/


command(
  {
    pattern: "mute",
    fromMe: true,
    desc: "mute group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply("_This command is for groups_");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply("_I'm not admin_");
    await message.reply("*Muted*");
    return await client.groupSettingUpdate(message.jid, "announcement");
  }
);

/* Copyright (C) 2023 Abhiiyh.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HANNA-XO-MD - Abhiiyh
*/


command(
  {
    pattern: "unmute",
    fromMe: true,
    desc: "unmute group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply("_This command is for groups_");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply("_I'm not admin_");
    await message.reply("*Unmuted*");
    return await client.groupSettingUpdate(message.jid, "not_announcement");
  }
);

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
