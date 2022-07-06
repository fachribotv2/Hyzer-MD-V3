let fs = require('fs')
let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let teks = 'Donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai Kak, ${ye}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ Dana : ${dana}
├ Pulsa : ${pulsa}
├ Gopay : ${gopay}
└────
Berapapun donasi kalian akan sangat berarti 👍
*Contact person Owner:*
wa.me/${numberowner} (Fachri)
`
        conn.sendHButtonLoc = async (m.chat, './media/donasi.jpg, anu, wm, 'Sewa', '.sewabot', 'Owner', '.owner', m) => {
		let template = generateWAMessageFromContent(jid, proto.Message.fromObject({
			         templateMessage: {
             hydratedTemplate: {
                 hydratedContentText: content,
                 mentions: conn.parseMention(anu + wm),
                 locationMessage: { 
                 jpegThumbnail: './media/donasi.jpg',
                 hydratedFooterText: wm,
    mentions: conn.parseMention(anu + wm),
                 hydratedButtons: [{
                     urlButton: {
                         displayText: 'Sewa',
                         url: '.sewabot',
                     }
                 },  {
                     quickReplyButton: {
                         displayText: 'Owner',
                         id: '.owner',
                     }
                 }],  mentions: conn.parseMention(anu + wm)
             }
         }
     }), { userJid: conn.user.jid, quoted: quoted,     mentions: conn.parseMention(anu + wm)});
     return await conn.relayMessage(
         jid,
         template.message,
         { messageId: template.key.id }
     )
	}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
