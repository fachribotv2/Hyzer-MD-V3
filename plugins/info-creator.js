let fs = require('fs')
let handler = async function (m) {
	const fakegrup = {
	key : {
fromMe: false,
participant : '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
locationMessage: {
name: 'Ini Kak Owner FachriBot OωO',
jpegThumbnail: fs.readFileSync('https://telegra.ph/file/843f1cb89170180568d64.jpg')
  }
 }
}
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Fachri\nitem1.TEL;waid=6285713041886:6285713041886\nitem1.X-ABLabel: Jadilah Dirimu Sendiri ^ω^\nEND:VCARD`
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: fakegrup })
          let buttons = [
  {buttonId: '.donasi', buttonText: {displayText: 'Donasi'}, type: 1},
  {buttonId: '.menu', buttonText: {displayText: 'Menu'}, type: 1},
]
const buttonsMessage = {
    contentText: `
Itu Owner Ku Kak >ω<
*Jangan Di Apa Apain Kak Owner Ku.*
`.trim(),    footerText: `jgn sungkan chat ya kak`,
    buttons: buttons,
  headerType: 'EMPTY'
}
conn.sendMessage(m.chat, buttonsMessage, 'buttonsMessage', { quoted: test})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
