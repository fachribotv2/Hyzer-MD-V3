let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/377aae9aa4e207e115721.jpg', m, { packname: "sticker by", author: "FachriBot-MD" })
}

handler.customPrefix = /^(halo)$/i
handler.command = new RegExp

module.exports = handler
