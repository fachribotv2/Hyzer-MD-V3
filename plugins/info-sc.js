let handler  = async (m, { conn, usedPrefix: _p }) => {
	let fetch = require('node-fetch')
    let fs = require('fs')
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Script FachriBotz By Fachri 🎨', 
    orderTitle: `Menu ▸`,
    thumbnail: await (await fetch(fla + 'Script')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Source+code'
let esce = `❏━═┅═━–––
│★ *SCRIPT:* Private🔒
│★ *BASE:* https://github.com/Hyzerr/Hyzer-MD-V3
❑━═┅═━––––––

📍 *N o t e :* 
⬡ Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
⬡ Jangan Lupa kasih star, follow & kasih credit
⬡ Dilarang menjual Script Ini!
⬡ Jika menemukan bug di script, harap lapor owner
⬡ Dilarang reupload sc, Hanya boleh fork`
fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm,
                           }
                          }
                        }
await conn.send2But(m.chat, esce, 'Hayoo? Ngapain bg:"', 'Owner', '.owner', 'Sewa', '.sewabot', ftrol) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler

