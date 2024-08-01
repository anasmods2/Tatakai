let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, {image: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `_ʙʏ : ᴀɴᴀs-ᴍᴏᴅs_` }, { quoted: m })
	}

handler.help = ['storyanime']
handler.tags = ['anime']
handler.command = ['boy', 'اولاد', 'افتار2']
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/a7e420a1c6c3dd10c21bb.jpg' ,
'https://telegra.ph/file/f3c53297f8e1be3be27e4.jpg' ,
'https://telegra.ph/file/2f257fddf8513d15624ce.jpg' ,
'https://telegra.ph/file/936cc3adc03dd6e4ad71b.jpg' ,
'https://telegra.ph/file/5f777f3dbea7784adcad0.jpg' ,
'https://telegra.ph/file/ff00aa6d84e0a94e3a8a3.jpg' ,
'https://telegra.ph/file/9c6a1d5e71eec72504f23.jpg' ,
'https://telegra.ph/file/ba9d096e7b3ca35016b4a.jpg' ,
'https://telegra.ph/file/686b13f075d663aeee9a0.jpg' ,
'https://telegra.ph/file/043bfc59d6d6687bc87f6.jpg' ,
'https://telegra.ph/file/0fc81e84fba744e7c51e5.jpg' ,
'https://telegra.ph/file/1b65425878a2c015e2b5d.jpg' ,
'https://telegra.ph/file/c1fd2133bb55d518d420f.jpg' ,
'https://telegra.ph/file/d8a4e1bc4c43441354715.jpg' ,
'https://telegra.ph/file/bae1e572f6168d02e0866.jpg' ,
'https://telegra.ph/file/cda1efaec6cfe4eada6a5.jpg' ,
'https://telegra.ph/file/4a635eedb96bb8906bdf2.jpg' ,
'https://telegra.ph/file/6e538a005160f761d90eb.jpg' ,
'https://telegra.ph/file/ff907576bd6e38216f660.jpg' ,
'https://telegra.ph/file/d137d495e59a6b6a31dda.jpg' ,
'https://telegra.ph/file/f558bfa38a7a3a142b6a5.jpg' ,
'https://telegra.ph/file/f5f5ca88dcfb5a537acc1.jpg' ,
'https://telegra.ph/file/b9e7dd1f4e0bbb3f65b87.jpg' ,
'https://telegra.ph/file/1dcc01c07cf11a3a3f425.jpg' ,
'https://telegra.ph/file/c584a927cd1b241eb93a8.jpg' ,
'https://telegra.ph/file/6d3f11698ae7c4c118455.jpg' ,
'https://telegra.ph/file/51ece84a4887dd0a9c838.jpg' ,
'https://telegra.ph/file/45080807126ec51977144.jpg' ,
'https://telegra.ph/file/221d7b1813330dc8e2458.jpg' ,
'https://telegra.ph/file/a930cbac5a4387681f8ed.jpg' ,
'https://telegra.ph/file/23e8cdab87ff52ebe0e22.jpg' ,
'https://telegra.ph/file/dc86a657cc1eb778875d9.jpg' ,
'https://telegra.ph/file/44da8be2204b7579330f8.jpg' ,
'https://telegra.ph/file/f83c4e4d9d857b0e1c583.jpg' ,
'https://telegra.ph/file/f3f1b4c773c781f6bc048.jpg' ,
'https://telegra.ph/file/52f98a05e09dff263927f.jpg' ,
'https://telegra.ph/file/e6b4b1e9bd6e36f700b7d.jpg' ,
'https://telegra.ph/file/cc31d915fafb485e289c0.jpg' ,
'https://telegra.ph/file/96333dc46ea91e8bc142c.jpg' ,
'https://telegra.ph/file/0cdffef55f90d67c5c3bb.jpg' ,
'https://telegra.ph/file/81570fd2d686b2c4c64e4.jpg' ,
'https://telegra.ph/file/610a78474d84c86749d1c.jpg' ,
'https://telegra.ph/file/d6c72f913540315728425.jpg' ,
'https://telegra.ph/file/2f5319c6de0b030cd8313.jpg' ,
'https://telegra.ph/file/3b48ef3a14bfe85a5e6c4.jpg' ,
'https://telegra.ph/file/67417d3a8969c61570e2c.jpg' ,
'https://telegra.ph/file/0ed6db5c159b1f676314f.jpg' ,
'https://telegra.ph/file/93b2dc205e247ff3c235e.jpg' ,
'https://telegra.ph/file/b73ea3d0922b293c3d0ae.jpg' ,
'https://telegra.ph/file/0aad64f657fbf686b9387.jpg' ,
'https://telegra.ph/file/afa1d43881138570663da.jpg' ,
'https://telegra.ph/file/a847b14a1bcc8a848ea42.jpg' ,
'https://telegra.ph/file/e6245d7aeea2088fd2175.jpg' ,
  
 
'',
]