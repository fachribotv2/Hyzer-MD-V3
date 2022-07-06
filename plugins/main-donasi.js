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
const fgc = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285240750713-1610340626@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "Grub Bot", 
            "caption": "Donasi Bg Biar Botnya On 24 jm", 
            'jpegThumbnail': fs.readFileSync('./d11e20d44501e1a59439b5344e07f5d7.jpg')
		}
	}
}
  conn.send3ButtonImg(m.chat, fla + teks, anu, wm, 'Owner', '.owner', 'Info Owner', '.infoowner', 'Sewa', '.sewabot', fgc) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
