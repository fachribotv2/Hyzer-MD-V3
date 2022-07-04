let handler = async (m) => {
let teks = 'Sewa FachriBot'
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
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
conn.send2ButtonImg(m.chat, fla + teks, price1, 'Mau sewa bot?', 'Owner', '#owner', 'Donasi', '#donasi', fdoc)
}
handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler

