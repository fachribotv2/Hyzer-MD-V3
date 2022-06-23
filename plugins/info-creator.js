const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: Fachri 
item.ORG: Seseorang Akan Selalu Terlihat Buruk di Mata Pembenci!
item1.TEL;waid=6285713041886:6285713041886@s.whatsapp.net
item1.X-ABLabel:Sibuk 
item2.EMAIL;type=INTERNET:saefulfachri18@gmail.com
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩 INDONESIA;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 LOCATION
item4.URL:${instagram}
item4.X-ABLabel:Website
END:VCARD`
const vcard2 = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: Romli 
item.ORG: Seseorang Akan Selalu Terlihat Buruk di Mata Pembenci!
item1.TEL;waid=6281322667077:6281322667077@s.whatsapp.net
item1.X-ABLabel:Sibuk 
item2.EMAIL;type=INTERNET:saefulfachri18@gmail.com
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩 INDONESIA;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 LOCATION
item4.URL:${instagram}
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER GW', 
            contacts: [{ vcard + vcard }] 
        }
    }
)
await conn.reply(m.chat, "itu Nomor Orang Ganteng", sentMsg)}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
