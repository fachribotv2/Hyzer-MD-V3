let limit = 1024
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./d11e20d44501e1a59439b5344e07f5d7.jpg'), thumbnail: fs.readFileSync('./d11e20d44501e1a59439b5344e07f5d7.jpg'),sendEphemeral: true}}} 
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  let name = await conn.getName(m.sender)
let wm = global.wm
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', fkontak)
*Title:* ${title}
*Filesize:* ${filesizeF}
*${isLimit ? 'Pakai ': ''}Link:* ${dl_link}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', fkontak)
*Title:* ${title}
*Filesize:* ${filesizeF}
`.trim(), m, false, {
  ..._thumb,
  asDocument: chat.useDocument
})
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

