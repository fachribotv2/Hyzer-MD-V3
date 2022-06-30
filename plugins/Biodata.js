let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
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
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Fachri')).buffer(), ext, 'Recoded By Fachri', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewabot', m)

}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^infowner$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
