
let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
❏━═┅═━–––
│⬡ *SCRIPT:* Private🔒
│⬡ *BASE:* https://github.com/Hyzerr/Hyzer-MD-V3
❑━═┅═━––––––`
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

