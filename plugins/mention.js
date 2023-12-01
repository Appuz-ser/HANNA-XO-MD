const {SUDO} = require('../config');
var duration = 19998000
var audios = `https://i.imgur.com/XqBuA3M.mp4`;
const {getAudioBufferFromLink,skbuffer} = require('raganork-bot')
const {readFileSync} = require('fs')
const {command} = require('../lib');
// command({pattern: 'mention ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {return;}));
command({on: 'text' ,fromMe: false}, (async (message, match) => {
var jids = audios.split(',').filter(link => link.includes('mp4'));
try {var men = message.mention[0].split('@')[0]} catch {return;}
if (message.mention && message.mention[0] && SUDO.includes(men)) {
var waveform = Array.from({length: 15}, () => Math.floor(Math.random() * 100)); // use this for fancy: [0,99,0,99,0,99]
getAudioBufferFromLink(jids[Math.floor(Math.random()*jids.length)],async function(audio) {
if (audio) {
return message.client.sendMessage(message.jid, {audio,mimetype: 'audio/mp4',ptt: true,waveform }, { quoted: m })}
})}
}));
