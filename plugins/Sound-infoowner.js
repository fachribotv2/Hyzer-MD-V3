import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/gratata.mp3'
conn.sendFile(m.chat, vn, 'gratata.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['toxic']
handler.tags = ['sound']
handler.customPrefix = /(Anj|Asu|Asw|Bacot|Babi|Bangsat|Bgst|Bangsad|Cok|Cog|Cvk|Dancok|Damput|Fantek|Fantex|Goblok|Gblk|Hancok|Itil|Jancok|Jnck|Jncok|Jamput|Kontol|Kntl|Kontl|Lapet|Memek|Mmk|Mmek|Najis|Opel|Pantek|Pantex|Pntk|Pntx|Qirik|Taek|Tai|Thai|Taehyung|Vantek|Vantex|Wanjay|Zancok|fck|Fuck|nenen)/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler

