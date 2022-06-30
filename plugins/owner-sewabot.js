let handler = async (m) => {
let teks = 'Sewa FachriBot'
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `Sewa ▸`,
    thumbnail: await (await fetch(fla + 'Sewa')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
                            }
                          }
                        }
conn.send2ButtonImg(m.chat, fla + teks, price1, 'Mau sewa bot?', 'OWNER', '#owner', 'DONASI', '#donasi', ftroli)
}
handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler

