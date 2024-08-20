/*
    CREDIST !!!
        > Hw Mods [ Base ]
        > Rerez Hosting [ Developer ]

    SAYA SANGAT BERTERIMA KASIH JIKA KALIAN MEMBIARKAN CREDIT INI TANMPA MENGHAPUS ATAU MENGGANTI NYA 
    TOLONG HARGAI YAA
    
WA ME : https://wa.me/6282312436896
TE ME : https://t.me/rerez_x_hosting
YT ME : https://www.youtube.com/@RerezHosting
SALURAN WA : https://whatsapp.com/channel/0029VacxTsC8F2p5dshCmq3r
    
WOI JB KONTOL JANGAN DI JUAL BANGSAT 🤬

*/
const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// System
global.baileys = require('@whiskeysockets/baileys')
global.usePairingCode = true
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ℝ𝕀𝕊𝕂𝕐 𝔹𝕆𝕋' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.owner = ['6283829749607'] // ubah aja pake nomor lu
global.botname = 'ℝ𝕀𝕊𝕂𝕐 𝔹𝕆𝕋' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'XYREZZ' //Gausah Juga
global.idchannel = 'https://chat.whatsapp.com/Cr7jt812wFs4NGkTbwegZu'
global.linkgc = 'https://chat.whatsapp.com/Ew44LqoypCQGmnAVZan0Za'
global.gcbuyer = "https://chat.whatsapp.com/Ew44LqoypCQGmnAVZan0Za"
global.thumbnail = 'https://telegra.ph/file/f9abb6cce3bf39f7a71b9.png'
global.autobio = false // AutoBio
global.autoread = false // ReadChat 
global.Ghost = '`'
global.versibot = 'V 5.0.0'
global.packname = 'ℝ𝕀𝕊𝕂𝕐 𝔹𝕆𝕋'
global.author = 'ℝ𝕀𝕊𝕂𝕐 𝔹𝕆𝕋'
global.skizo = "ℝ𝕀𝕊𝕂𝕐 𝔹𝕆𝕋"
global.wm = "ℝ𝕀𝕊𝕂𝕐 𝔹𝕆𝕋"
//=================================================//
global.onlypc = false
global.onlygc = false
//=================================================//
//cpanel
global.domain = "https://panel.riskyx.my.id"
global.apikey = "ptla_GCbQIviWOxA22YZD7OBiaGSbQBnHWYLlYSiTRB5R2Fs" //plta lu
global.capikey = "ptlc_GYsHB5u8anbgawGfoJ8BKmckAsLjRJYIvLwohf7Z0jr" //pltc lu
global.egg = "15" // kalo gapaham gausah diganti
global.loc = "1"


global.text1 = "ASSALAMUALAIKUM"

//Send Pay
global.dana = "6282173242194"
global.ovo = "6282173242194"
global.gopay = "6282173242194"
global.qris = "-"

//limit & balance
global.limitawal = 10
global.balanceawal = 10000

global.wlcm = []
global.wlcmm = []

global.delaypushkontak = 5500
global.delayjpm = 5500

// DATABASE GAME
global.family100 = {};
global.suit = {};
global.tictactoe = {};

// CUMAN SIMBOL MENU UBAH AJA SESUKA KALIAN
global.atas = '┏━━━━━━━━━━━━━━━━'
global.tengah = '┣━━━━━━━━━━━━━━━━'
global.bawah = '┗━━━━━━━━━━━━━━━━'
global.garis = '┃'
//mess
global.mess = {
    premium: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴘʀᴇᴍɪᴜᴍ!'),
    done: ('ᴘʀosᴇs...'),
    owner: ('ᴀᴋꜱᴇꜱ ᴅɪ ᴛᴏʟᴀᴋ! ᴋʜᴜꜱᴜꜱ ᴏᴡɴᴇʀ!'),
    wait: ('ᴘʀosᴇs...!'),
    group: 'κнusus ԍʀouᴘ cнᴀт!',
    admin: 'κнusus ᴀᴅмιɴ ԍʀouᴘ!',
    botAdmin: 'ʙoт нᴀʀus ᴀᴅмιɴ!',
    linkvalid: 'ʟιɴκ тᴀuтᴀɴ тιᴅᴀκ vᴀʟιᴅ!', 
    error: 'ᴇʀoʀ тᴇʀנᴀᴅι κᴇsᴀʟᴀнᴀɴ!',
    limit: `ʟιмιт κᴀмu suᴅᴀн нᴀʙιs!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`,
    regis: (`κᴀмu ʙᴇʟoм тᴇʀᴅᴀғтᴀʀ\nsιʟᴀнκᴀɴ ᴅᴀғтᴀʀ ᴅᴇɴԍᴀɴ cᴀʀᴀ .ᴅᴀғтᴀʀ`),
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})