command(
  {
    pattern: "setpp",
    fromMe: true,
    type: "owner",
  },
  async (message, match, m) => {
    if (!message.reply_message.image)
      return await message.reply("_Reply To A Photo_");
    let buff = await m.quoted.download();
    await message.setPP(message.user, buff);
    return await message.reply("_Profile Picture Updated ✅_");
  }
);
