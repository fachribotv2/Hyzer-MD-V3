let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
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

Contact person Owner:
wa.me/${numberowner} (Fachri)

*Donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
