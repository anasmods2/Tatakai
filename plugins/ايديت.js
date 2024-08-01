let handler = async (m, { conn, usedPrefix, command }) => {

await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `*🎀┃الفيديو يوجد فيه موسيقي🎀┃*` }, { quoted: m })

}

handler.help = ['animestory']

handler.tags = ['dd']

handler.command = /^ايديت$/i

export default handler

const dir = [
'https://telegra.ph/file/d6269a1f7f2bf94a406df.mp4', 'https://telegra.ph/file/8034305ce5330ebc11a99.mp4', 'https://telegra.ph/file/5c70fbac268fb54ff847e.mp4', 'https://telegra.ph/file/f2a6bec5b7635364d6768.mp4', 'https://telegra.ph/file/d7f5799da8e64b9aff5aa.mp4', 'https://telegra.ph/file/261100ff5fe590b08e35d.mp4', 'https://telegra.ph/file/6214d68e0da156ef8e54a.mp4',

'https://telegra.ph/file/960bece94cac521c5fd68.mp4',

'https://telegra.ph/file/759c10b0e0a1605ae9716.mp4',

'https://telegra.ph/file/1d4d8d50e19929f4870f6.mp4',

'https://telegra.ph/file/07941ba2e117fea621e5d.mp4',

'https://telegra.ph/file/5fb988f765cd747cde120.mp4',

'https://telegra.ph/file/5ddb8eec9a8d4883dde9c.mp4',

'https://telegra.ph/file/bc4cafca3f25376e7cb2e.mp4',

'https://telegra.ph/file/2243a5e4d437536f7dc8b.mp4',

'https://telegra.ph/file/65ffa16e5eaee2715e713.mp4',

'https://telegra.ph/file/d1ae62ec93fdfbfb44f11.mp4',

'https://telegra.ph/file/539d50387958f5d58e76c.mp4',

'https://telegra.ph/file/aa6c00ce3e0e07d6775dd.mp4',

'https://telegra.ph/file/6a8818cad48e79495390a.mp4',

'https://telegra.ph/fil e/141b6f6cda402a8de3c3e.mp4',

'https://telegra.ph/file/1180e55bd2cf29924c8d2.mp4',

'https://telegra.ph/file/38bde47b6402f2bfb06aa.mp4', 

'https://telegra.ph/file/32344686758198df923a1.mp4',

'https://telegra.ph/file/38bc86129afa59776ec41.mp4',

'https://telegra.ph/file/db3c8672cde1ca5e6552a.mp4',

'https://telegra.ph/file/830101289dc6bd39811bb.mp4',

'https://telegra.ph/file/822c53d16b73d2dde32d3.mp4',

'https://telegra.ph/file/886982e1eebd12cd53395.mp4',

'https://telegra.ph/file/7d2cdc5219bf3a551aa63.mp4',

'https://telegra.ph/file/0ac041f0b5a3afc29e017.mp4',

'https://telegra.ph/file/ea5e5e24b7fb66974473d.mp4',

'https://telegra.ph/file/92c7e1232a8bf6363e4f9.mp4',

'https://telegra.ph/file/961d4145ccc3e7f1c01ad.mp4',

'https://telegra.ph/file/7678a0f51d614c4c16f13.mp4',

'https://telegra.ph/file/0bd52734057a8a8edb95e.mp4',

'https://telegra.ph/file/02ca204f4e6a35f857574.mp4',

'https://telegra.ph/file/fdee2c0ae99a871c879f2.mp4',

'https://telegra.ph/file/c390eb0c4663ec4c58e9f.mp4',

'https://telegra.ph/file/e53d1ca92142e93a9d3b8.mp4',

'https://telegra.ph/file/0584a114a36c10db6a611.mp4',

'https://telegra.ph/file/6b04390e25c21b28b482c.mp4',

'https://telegra.ph/file/de7eda58ae3b945410c19.mp4',

'https://telegra.ph/file/8be0819b1a9ccafd74653.mp4',

'https://telegra.ph/file/3affb77764c72e541c9c7.mp4',

'https://telegra.ph/file/75299bee060e8342daf3c.mp4',

'https://telegra.ph/file/a64a814e561242128d11e.mp4',

'https://telegra.ph/file/28db308ee36082e5bb9fd.mp4',

'https://telegra.ph/file/540faab16cbdcb568b241.mp4',

'https://telegra.ph/file/77d4d5e03015da8411f71.mp4',

'https://telegra.ph/file/cc672124f0b8afe2dd020.mp4',

'https://telegra.ph/file/638a8885025af228f6de6.mp4',

'https://telegra.ph/file/e108c60492a2dc2b9d48f.mp4',

'https://telegra.ph/file/2105fb2cbfee931204e12.mp4',

'https://telegra.ph/file/af4397b8abac12bd81c76.mp4',

'https://telegra.ph/file/703dc161569560d4b9533.mp4',

'https://telegra.ph/file/381cbc23153d4a979300c.mp4',

'https://telegra.ph/file/6fa34083e9d0605de39ca.mp4',

'https://telegra.ph/file/f5fa34862faba7c29875a.mp4',

'https://telegra.ph/file/9419ab2ddbb1f62193e3f.mp4',

'https://telegra.ph/file/5d3493f1eaff7e69d578d.mp4',

'https://telegra.ph/file/a821c3b25bbfa406a4da0.mp4',

'https://telegra.ph/file/9d33ae0a2830d03c820c2.mp4',

'https://telegra.ph/file/a8cb1c29be302dc938dbe.mp4',

'https://telegra.ph/file/a907cc16f4ae28171d0dd.mp4',

'https://telegra.ph/file/f3ac58e739933a6c3654e.mp4',

'https://telegra.ph/file/c5e36f2a11976f3c9b1f9.mp4',

'https://telegra.ph/file/3aba3b86aced4c00e3b05.mp4',

'https://telegra.ph/file/03cc6997426e99c687e6a.mp4',

'https://telegra.ph/file/5a9f45e1842da8a02510d.mp4',

'https://i.imgur.com/OAbYGlz.mp4',

'https://i.imgur.com/Pad6zvr.mp4',

'https://telegra.ph/file/5df925bf07f7b35c566a9.mp4',

'https://telegra.ph/file/296446e7bda8435cff317.mp4',

'https://telegra.ph/file/fd5af468337aa6b983c63.mp4',

'https://telegra.ph/file/ab1e1700e30be96ad23ae.mp4',

'https://i.imgur.com/NILGHXC.mp4',

'https://i.imgur.com/dztvsNW.mp4',

'https://telegra.ph/file/b16bae2461e7e8f708714.mp4',

'https://telegra.ph/file/9e75b87f61514b2ac1891.mp4',

'https://telegra.ph/file/a0baddc3b867f94343e39.mp4',

'https://telegra.ph/file/e27c0b4190d2d107fe92a.mp4',

'https://telegra.ph/file/dc0c1f36245ea087e179c.mp4',

'https://telegra.ph/file/2b961f5f333cb8e0a71b5.mp4',

'https://telegra.ph/file/034fbe32c484b4c1fb879.mp4',

'https://telegra.ph/file/22d52f7feb7f6c8cf48ab.mp4',

'https://telegra.ph/file/00bb241d3408dc711f4c7.mp4',

'https://telegra.ph/file/0f519faa00b985a225097.mp4',

'https://telegra.ph/file/a8ff62adaac7b36e020ef.mp4',

'https://telegra.ph/file/491d97b8e5aad56ce8a62.mp4',

'https://telegra.ph/file/bb6f549a4aa04370656af.mp4',

'https://telegra.ph/file/565c34124ead8a15497b2.mp4',

'https://telegra.ph/file/9c51f97917ed5fd88a6f6.mp4',

'https://telegra.ph/file/900377152f73574238d51.mp4',

'https://telegra.ph/file/e7fb1642655952aea07ec.mp4',
'https://telegra.ph/file/0d4fb93951c620aacb229.mp4',
'https://g.top4top.io/m_2391c90iu1.mp4',
'https://h.top4top.io/m_2391mfvy22.mp4',
'https://i.top4top.io/m_2391iwmee3.mp4',
'https://j.top4top.io/m_23915x5204.mp4',
'https://l.top4top.io/m_2391e795x5.mp4',
'https://a.top4top.io/m_2391jcee66.mp4',
'https://b.top4top.io/m_2391ho0bz7.mp4',
'https://c.top4top.io/m_23910hulw8.mp4',
'https://d.top4top.io/m_2391dj01a9.mp4',
'https://e.top4top.io/m_23912fdr210.mp4',
'https://a.top4top.io/m_23911dhqx1.mp4',
'https://b.top4top.io/m_2391wwr402.mp4',
'https://c.top4top.io/m_2391vfkp63.mp4',
'https://d.top4top.io/m_2391b7cey4.mp4',
'https://e.top4top.io/m_2391fxdc85.mp4',
'https://telegra.ph/file/c3deeb5b0b7f7738a95ad.mp4',
'https://telegra.ph/file/7ca9eef850f5edc53f7f2.mp4',
'https://telegra.ph/file/44f73812ae0c19f097264.mp4',
'https://telegra.ph/file/10399f910bb90de8a6c53.mp4',
'https://telegra.ph/file/f7b440b02e742d1d4bed6.mp4',
'https://telegra.ph/file/3571f86c9c8843f48ce03.mp4',
'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
'https://telegra.ph/file/c0b4e700e2d696f6ae448.mp4',
'https://telegra.ph/file/fbfa5ac6baca454de22ad.mp4',
'https://telegra.ph/file/899cb30e29de1f0692ea1.mp4',
'https://telegra.ph/file/30e226e2d30e51bda678f.mp4',
'https://telegra.ph/file/4b20016e2f4ff96280fea.mp4',
'https://telegra.ph/file/d48fde63f91f9aa585716.mp4',
'https://telegra.ph/file/3a1f2afb1172b4606cd50.mp4',
'https://telegra.ph/file/fe7de67cadcddf80e4f23.mp4',
'https://telegra.ph/file/f4eabe96d994b28b7020d.mp4',
'https://telegra.ph/file/f8adc8f3af8ce6f80254b.mp4',
'https://telegra.ph/file/909a4beb3be92dae9e8ef.mp4',
'https://telegra.ph/file/57dff983fe52d49cf9e11.mp4',
'https://telegra.ph/file/70ed984ecf1382e0e74ce.mp4',
'https://telegra.ph/file/a922d3d0214e7b95dfb89.mp4',
'https://telegra.ph/file/ff7a0e8598bfd47898932.mp4',
'https://telegra.ph/file/c992c64d4bb59df46f06e.mp4',
'https://telegra.ph/file/137346459c02371cf5de9.mp4',
'https://telegra.ph/file/2ae60a3fc1509f779cba0.mp4',
'https://telegra.ph/file/223ac432cbca27313c59c.mp4',
'https://telegra.ph/file/6411bbcedc5da320b8656.mp4',
'https://telegra.ph/file/33a005837185d86435a26.mp4',
'https://telegra.ph/file/3b5cf36d1fc154ee36345.mp4',
'https://telegra.ph/file/c5606fb628f4c8268f1bb.mp4',
'https://telegra.ph/file/a91ba184bd2faedf2ca93.mp4',
'https://telegra.ph/file/aebad466be77f72498981.mp4',
'https://telegra.ph/file/a38ff1a80c53fb374af90.mp4',
'https://telegra.ph/file/607217019e1e5952920c1.mp4',
'https://telegra.ph/file/8a98532caa714b28acce1.mp4',
'https://telegra.ph/file/9eb4be5e79b7e71bfecc5.mp4',
'https://telegra.ph/file/10bbd3972f7b75a8b2ef6.mp4',
'https://telegra.ph/file/3fae1c6aacaba812ea651.mp4',
'https://telegra.ph/file/68378ab14e55b8a4113c2.mp4',
'https://telegra.ph/file/9cb140f6f74012cce30c7.mp4',
'https://telegra.ph/file/17a3d58921c2754cf86ef.mp4',
'https://telegra.ph/file/3ac2c8447b8915a879e7a.mp4',
'https://telegra.ph/file/269cd09dcf42f8bd3a6f9.mp4',
'https://telegra.ph/file/d2e59e56cfdaac79ca7f8.mp4',
'https://telegra.ph/file/504ac80844f99a8e3fc54.mp4',
'https://telegra.ph/file/dd2b8fba0010f539085d1.mp4',
'https://telegra.ph/file/af9726aad0dce10dc4529.mp4',
'https://telegra.ph/file/c693724dba3bb96bb6c70.mp4',
'https://telegra.ph/file/5b91438135d01c11e7c92.mp4',
'https://telegra.ph/file/d2a468ff7cd4c29dcdb4a.mp4',
'https://telegra.ph/file/9cc245954979317b3484c.mp4',
'https://telegra.ph/file/cde12f0fd2c73ab8eb933.mp4',
'https://telegra.ph/file/ab58119a87c7f2c2367dc.mp4',
'https://telegra.ph/file/9146e2d5490c1b01c6e87.mp4',
'https://telegra.ph/file/09c9e72d3e0d44175c304.mp4',
'https://telegra.ph/file/2f01ddd037c40477ed07f.mp4',
'https://telegra.ph/file/be72f95d92490f0a1db3b.mp4',
'https://telegra.ph/file/d1464f070543fb3aaeaee.mp4',
'https://telegra.ph/file/99f02aa82825f1bf61e9a.mp4',
'https://telegra.ph/file/d540762b1d4f9e767357d.mp4',
'https://telegra.ph/file/98d09d227e8552d4e2bea.mp4',
'https://telegra.ph/file/4a9dc4ba09484791dfa9a.mp4',
'https://telegra.ph/file/91d8701c2783775637125.mp4',
]
