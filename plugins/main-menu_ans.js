const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
*Hallo user 𝕭𝖔𝖙,* 

*Satu Dua Tutup Botol,
Yang Baca Cem Kmtl 🤧...
Bye : 𝕭𝖔𝖙 • Andii あ*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '[❗] Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: '🔮GroupBot🔮',
               url: gc
             }

           },
                {
               urlButton: {
               displayText: '🐻Instagram creator🐻',
               url: web
             }

           },
               {
             quickReplyButton: {
               displayText: 'PATUHI RULES BOT',
               id: '.snk',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'SOURCE CODE',
               id: '.sc',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'COMMAND',
               id: '.zifa',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(menu|help)$/i
handler.help = ['menu']
module.exports = handler
