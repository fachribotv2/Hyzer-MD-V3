let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let fbz = 'https://telegra.ph/file/b17f0ba47c63bcfadc3df.jpg'
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of anu) {
    await delay(500)
    conn.send2ButtonImg(i, fbz, `${pesan}`, wm, 'OWNER', '.owner', 'MENU', '#menu', null).catch(_ => _)
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgcimg <teks>']
handler.tags = ['owner']
handler.command = /^((broadcastgcimage|bcgcimg)$/i

handler.owner = true

module.exports = handler
