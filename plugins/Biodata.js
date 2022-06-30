let fs = require('fs')
let handler = async (m, { conn, text }) => {
let teks = 'Fachri'
  let ext= `
*BIODATA OWNER*

*Nama* : Fachri
*Umur* : 14
*Kelas* : 2 smp
*Status* : Private

*SOSIAL MEDIA*

*instagram* : @sfdesign.id
*Facebook* : @Saeful Fachri
*Youtube* : SF Design
*Gmail* : saefulfachri18@gmail.com
 
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonImg(m.chat, fla + teks, ext, 'Recoded By Fachri', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewabot', m)

}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^infoowner$/i

module.exports = handler
