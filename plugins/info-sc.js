
let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `❏━═┅═━–––
│⬡ *SCRIPT:* Private🔒
│⬡ *BASE:* https://github.com/Hyzerr/Hyzer-MD-V3
❑━═┅═━––––––

📍 *N o t e :* 
★ Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
★ Jangan Lupa kasih star, follow & kasih credit
★ Dilarang menjual Script Ini!
★ Jika menemukan bug di script, harap lapor owner
★ Dilarang reupload sc, Hanya boleh fork`
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
await conn.send2But(m.chat, esce, 'Hayoo? Ngapain bg:"', 'Owner', '.owner', 'Sewa', '.sewabot', fdoc) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler

