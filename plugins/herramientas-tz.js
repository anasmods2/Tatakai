import moment from 'moment-timezone';

const handler = async (m, {conn}) => {
  const tzYE = moment().tz('Asia/Yemen').format('DD/MM HH:mm');
  const tzSA = moment().tz('Asia/Riyadh').format('DD/MM HH:mm');
  const tzBR = moment().tz('Asia/Manama').format('DD/MM HH:mm');
  const tzOM = moment().tz('Asia/Muscat').format('DD/MM HH:mm');
  const tzQA = moment().tz('Asia/Doha').format('DD/MM HH:mm');
  const tzKU = moment().tz('Asia/Kuwait_City').format('DD/MM HH:mm');
//  const tzAR = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm');
  await conn.sendMessage(m.chat, {text: `\`\`\`
< الوقت الآن في الدول العربية التالية: />

▢ Yemen       : ${tzYE}
▢ Saudia       : ${tzSA}
▢ Bahrain      : ${tzBR}
▢ Oman        : ${tzOM}
▢ Qatar        : ${tzQA}
▢ Kuwait       : ${tzKU}
\`\`\`
${String.fromCharCode(8206).repeat(850)}
▢ TZ del servidor:\n • ${Intl.DateTimeFormat().resolvedOptions().timeZone}\n • ${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM HH:mm')}`}, {quoted: m});
};

handler.command = /^(التوقيت|توقيت|tz|hora|fecha|horario)$/i;
export default handler;
