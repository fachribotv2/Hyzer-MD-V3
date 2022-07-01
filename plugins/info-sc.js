/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm,
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Nyari Sc Ya? 

Nih Link Sc Nya Dibawah :
https://github.com/Ipulpachri/Hyzer-MD-V3
`
conn.sendBut(m.chat, esce, 'Jgn Lupa Kasih Star&Follow Ya kak', 'Oke', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
