
let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
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
let ye = `@${m.sender.split`@`[0]}`
let esce = ` 
Total Fitur FachriBot: ${totalf}`
conn.sendBut(m.chat, esce, 'Hai Kak ${ye}', 'Owner', '.owner', fdoc) 
}
handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']

module.exports = handler

