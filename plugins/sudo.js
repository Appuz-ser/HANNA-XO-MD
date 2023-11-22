const { SUDO } = require("../config");
const { command } = require("../lib/");
command(
  { pattern: "setsudo ?(.*)", fromMe: true, desc: "set sudo", type: "user" },
  async (m, mm) => {
    var newSudo = (m.reply_message ? m.reply_message.jid : "" || mm).split(
      "@"
    )[0];
    if (!newSudo)
      return await m.sendMessage("*reply to a number*", { quoted: m });
    var setSudo = (SUDO + "," + newSudo).replace(/,,/g, ",");
    setSudo = setSudo.startsWith(",") ? setSudo.replace(",", "") : setSudo;
    await m.sendMessage("```new sudo numbers are: ```" + setSudo, {
      quoted: m,
    });
    await m.sendMessage("_It takes 30 seconds to make effect_", { quoted: m });
    await heroku
      .patch(baseURI + "/config-vars", { body: { SUDO: setSudo } })
      .then(async (app) => {});
  }
);
