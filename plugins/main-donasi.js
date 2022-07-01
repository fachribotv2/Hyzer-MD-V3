let fs = require('fs')
let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
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
       const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/donasi.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Instagram',
               url: 'instagram.com/sfdesign.id'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Back',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
