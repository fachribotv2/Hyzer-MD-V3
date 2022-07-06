import fetch from "node-fetch"
import { readFileSync } from "fs"



export async function all(m) {
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
            "caption": "Gausah Tag Ya kak!", 
            'jpegThumbnail': fs.readFileSync('./d11e20d44501e1a59439b5344e07f5d7.jpg')
		}
	}
}
  //Kalo mau menggokil pake ini
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

  let stc = readFileSync('./STK-20220706-WA0087.webp')

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika ditag 
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/17608914335',
title: 'Ada Apa Ya kak?',
body: wm,
sourceUrl: 'http://github.com/Ipulpachri', thumbnail: await( await fetch(pp)).buffer()
 //Kalo mau ada pp dari sender/pengirimnya
 //Kalo mau ringan pake global.thumb                                                                                                              
                                                                                                               
          //thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: fgc })
          
        }
    } catch (e) {
        return
    }

                                
}
