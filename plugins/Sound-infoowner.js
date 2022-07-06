import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/gratata.mp3'
conn.sendFile(m.chat, vn, 'gratata.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['infoowner']
handler.tags = ['main']
handler.customPrefix = /(infoowner)/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
