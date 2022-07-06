import fetch from "node-fetch"
import { readFileSync } from "fs"



export async function all(m) {

  //Kalo mau menggokil pake ini
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

  let stc = readFileSync('./STK-20220706-WA0087.webp')

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika ditag 
 m.ress = async (text, chatId, options) => {
        const moment = require("moment-timezone");
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
    	let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
        let { data } = await conn.getFile(await(await require('node-fetch')(pp)).buffer())
        let name = await conn.getName(m.sender)
        let wm = global.wm
        let web = global.web
        conn.ress(chatId ? chatId : m.chat, text, m, { contextInfo: { mentionedJid: conn.parseMention(text), externalAdReply: { title: `Selamat ${salam} ${name}`, body: wm, sourceUrl: web, thumbnail: data }}, options })   
       }

        try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            m.ress(stc)

    m.name = m.pushName || conn.getName(m.sender)
    if (m.msg && m.msg.url) m.download = () => conn.downloadM(m.msg, m.mtype.toLowerCase().replace(/message/i, ''))
                                                                                                               
                                                                                                               
          //thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
          
        }
    } catch (e) {
        return
    }

                                
}
//res.js
