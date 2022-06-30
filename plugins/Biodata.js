let fs = require('fs')
let handler = async (m, { conn, text }) => {
let teks = 'Fachri'
   fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm,
let ext = `
*BIODATA OWNER*

*Nama* : Fachri
*Umur* : 14
*Alamat* : Pemalang, Jawa tengah, Indonesia
*Kelas* : 2 smp
*Status* : Private

*SOSIAL MEDIA*

*instagram* : @sfdesign.id
*Facebook* : @Saeful Fachri
*Youtube* : SF Design
*Gmail* : saefulfachri18@gmail.com
 
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonImg(m.chat, fla + teks, ext, 'Recoded By Fachri', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewabot', fdoc)

}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^infoowner$/i

module.exports = handler
