const { command } = require("../lib/");
const Jimp = require("jimp");

 command(
  {
    pattern: "setpp",
    fromMe: true,
    desc: "set profile picture",
    type: "user",
  },
  async (message, match, m) => {
    if (!message.reply_message.image)
      return await message.reply("_Reply To A Photo_");
    let buff = await m.quoted.download();
    await message.setPP(message.user, buff);
    return await message.reply("*Profile Picture Updated*");
  }
);
