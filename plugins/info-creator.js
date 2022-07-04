const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: Fachri 
item.ORG: Tak ingin terkenal hanya ingin di kenal
item1.TEL;waid=6285713041886:6285713041886@s.whatsapp.net
item1.X-ABLabel:Sibuk 
item2.EMAIL;type=INTERNET:saefulfachri18@gmail.com
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩 Indonesia;;;;
item3.X-ABADR:ac
item3.X-ABLabel:Region
item4.URL:https://fachriweb.vercel.app
item4.X-ABLabel:Website
END:VCARD`
let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 1,status: 200, surface: 200, message: `                   「 MY OWNER 」            `, orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER GW', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.send2But(m.chat, "itu Nomor Orang Ganteng", 'jgn sungkan chat ya kak', 'Group Official', '.gcbot', 'Back', '.menu', sentMsg)}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
