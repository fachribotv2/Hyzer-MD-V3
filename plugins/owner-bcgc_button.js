let handler  = async (m, { conn, text, usedPrefix: _p }) => {
  let fs = require('fs')
  let fetch = require('node-fetch')
  const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
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
            "caption": "「 Fachri Bot Broadcast 」", 
            'jpegThumbnail': fs.readFileSync('./d11e20d44501e1a59439b5344e07f5d7.jpg')
		}
	}
}
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)}
    catch (e){
    }

  let getGroups = await conn.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = await conn.cMod(m.chat, cc, /bc|broadcast/i.test(text))
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) conn.send2Button(id, text, '\n_*Fachri Bot By Fachri*_', 'Owner', '.owner', 'Menu', '.menu', anu)
  conn.reply(m.chat, `_Done_`, m)
}


handler.help = ['bcgc-v'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(bcgcbutton|bcgcb|bcgc-b)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
