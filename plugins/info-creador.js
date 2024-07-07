
let handler = async (m, { conn, args, usedPrefix, command }) => {
let suittag = global.suittag.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid) 
let suittag = global.helpers.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid) 
let teks = `▢ *المطورين*\n─────────────\n` + suittag.map(v => '- @' + v.replace(/@.+/, '')).join`\n\n▢ *المساعدين*\n─────────────\n` + helpers.map(v => '- @' + v.replace(/@.+/, '')).join`\n`
m.reply(teks, null, {mentions: conn.parseMention(teks)})

}
handler.help = ['listsuittag']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'المطور', 'creador', 'dueño', 'Gowner', 'المالك', 'انس', 'أنس', 'المبرمج', 'المساعدين', 'مساعدين'] 

export default handler
