let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*عدد المستخدمين البوت حاليا:* ${totalreg}`)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(المستخدمين|users)$/i
handler.prems = true
export default handler