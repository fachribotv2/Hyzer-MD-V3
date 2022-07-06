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

⬡ *instagram* : @sfdesign.id
⬡ *Facebook* : @Saeful Fachri
⬡ *Youtube* : SF Design
⬡ *Email* : saefulfachri18@gmail.com
 
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonImg(m.chat, ppown, ext, 'Recoded By Fachri', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewabot', m)

}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^infoowner$/i

module.exports = handler
