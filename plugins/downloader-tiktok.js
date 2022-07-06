const hxz = require("hxz-api")
let handler = async(m,{text, conn}) => {
let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
    fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
                            }
                          }
                        }
conn.sendFile(m.chat, nowm, null, 'Nih Kak', fdoc)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

module.exports = handler
