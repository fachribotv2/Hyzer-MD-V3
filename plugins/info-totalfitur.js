let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye}, 
Total Fitur saat ini: ${totalf}
conn.sendBut(m.chat, esce, wm3, 'Oke', 'ok', m) 
}
handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']

module.exports = handler

