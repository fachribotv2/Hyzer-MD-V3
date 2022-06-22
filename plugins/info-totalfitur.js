
let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
let ye = `@${m.sender.split`@`[0]}`
    (v) => v.help && v.tags
  ).length;
let esce = `
Hai ${ye}, 
Total Fitur saat ini: ${totalf}
conn.sendBut(m.chat, esce, wm3, 'Oke', 'ok', m) 
}
handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler

