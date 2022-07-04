
let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Nyari Sc Ya?
╭─❑
│✾ SCRIPT: PRIVATE 🔒
│✾ BASE: https://github.com/Hyzerr/Hyzer-MD-V3
╰─❑`
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
await conn.send2But(m.chat, esce, wm, 'Owner', '.owner', 'Sewa', '.sewabot', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
