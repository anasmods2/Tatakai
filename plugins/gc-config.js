
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_config

  const isClose = { // Switch Case Like :v
    'فتح': 'not_announcement',
    'قفل': 'announcement',
    'افتح': 'not_announcement',
    'اغلاق': 'announcement',
    'افتح': 'not_announcement',
    'اغلق': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
${tradutor.texto1[0]}

${tradutor.texto1[1]}
*┠┉↯ ${usedPrefix + command} قفل*
*┠┉↯ ${usedPrefix + command} فتح*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply(`⎈ تم اعداد الأمر`);}
};
handler.help = ['جروب فتح / قفل', 'جروب افتح / اغلق'];
handler.tags = ['group'];
handler.command = /^(group|grupo|جروب|قروب|مجموعه|مجموعة)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
