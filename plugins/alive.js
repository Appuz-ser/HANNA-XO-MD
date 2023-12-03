const { command ,isPrivate} = require("../lib/");
const config = require('../config.js')

command({
  pattern: "alivejs",
  fromMe: isPrivate,
  desc: "Tst",
  type: "misc",

},

/*client define on async()*/
async (message, match, m, client) => {
let img = "https://i.imgur.com/RsrR3tq.mp4"
await client.sendMessage(message.jid,{audio: {url: img},mimetype: 'audio/mp4', ptt: true, contextInfo: { externalAdReply: {
title: "𝐇𝐀𝐍𝐍𝐀-𝐗𝐎-𝐌𝐃",
body: "𝗠𝗮𝗱𝗲 𝗕𝘆 𝗔𝗯𝗵𝗶𝗶𝘆𝗵",
sourceUrl: "https://instagram.com/abhiiiiiyh",
mediaUrl: "https://instagram.com/abhiiiiiyh",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: " https://i.imgur.com/MLDjOmC.jpeg" }} },{quoted: m}) })
