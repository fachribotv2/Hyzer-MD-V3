let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let ppown = await conn.profilePictureUrl(owner + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teks = 'Fachri'
let ext = `
*BIODATA OWNER*

⬡ *Nama* : Fachri
⬡ *Umur* : 14
⬡ *TTL* : Tegal, 17.Okto.2k8
⬡ *Alamat* : Pemalang, Jawa tengah, Indonesia
⬡ *Kelas* : 2 smp
⬡ *Status* : Private

*SOSIAL MEDIA*

⬡ *whatsapp* : wa.me/6285713041886
⬡ *instagram* : @sfdesign.id
⬡ *Facebook* : @Saeful Fachri
⬡ *Youtube* : SF Design
⬡ *Email* : saefulfachri18@gmail.com

*SKILLS*

> JavaScript [89.7%]
> Python [13.4%]
> CSS [5.1%]
> Html [1.2%]
 

_Oke udah itu aja terimakasih_

`.trim()
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
conn.send3ButtonImg(m.chat, ppown, ext, '© Recoded By Fachri', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewabot', fdoc)

}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^infoowner$/i

module.exports = handler
