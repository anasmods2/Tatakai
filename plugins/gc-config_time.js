/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */


const handler = async (m, {conn, isAdmin, isOwner, args, usedPrefix, command}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_config_time

  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn);
    throw false;
  }
  const isClose = {
	  'فتح': 'not_announcement',
	  'افتح': 'not_announcement',
    'on': 'not_announcement',
	  '1': 'not_announcement',
	  'قفل': 'announcement',
	  'اقفل': 'announcement',
    'اغلق': 'announcement',
    'اغلاق': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
	  const caption = `
${tradutor.texto1[0]}
*${usedPrefix + command} فتح 1*
*${usedPrefix + command} اغلاق 1*
${tradutor.texto1[1]} *${usedPrefix + command} اغلاق 1* 
${tradutor.texto1[2]}
`;
    m.reply(caption);
	  throw false;
  }
  const timeoutset = 86400000 * args[1] / 24;
  await conn.groupSettingUpdate(m.chat, isClose).then(async (_)=> {
	  m.reply(`⚠️ *_المجموعة ${isClose == 'announcement' ? 'مغلقة' : 'مفتوحة'} ${args[1] ? `خلال ${clockString(timeoutset)}_*` : ''}`);
  });
  if (args[1]) {
	 setTimeout(async () => {
      await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async (_)=>{
		    conn.reply(m.chat, `${isClose == 'not_announcement' ? tradutor.texto2 : tradutor.texto3}!`);
	    });
    }, timeoutset);
  }
};
handler.help = ['مؤقت *<فتح/اغلاق>* *<المده>*'];
handler.tags = ['group'];
handler.command = /^(grouptime|gctime|مؤقت|مؤقتا|توقيت|مؤقتاً|مؤقتًا)$/i;

handler.botAdmin = true;
handler.group = true;

export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
