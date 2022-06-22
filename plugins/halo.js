let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://raw.githubusercontent.com/Ipulpachri/fachribotzv3/FachriBotzv3/sticker/Hallohaori.webp', m, { packname: "sticker by", author: "FachriBot-MD" })
}

handler.customPrefix = /^(halo)$/i
handler.command = new RegExp

module.exports = handler
