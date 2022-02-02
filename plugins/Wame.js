//Wame by mask se
const Asena = require("../Utilis/events")
const { getBuffer } = require('../Utilis/download');
const url1 = 'https://i.imgur.com/cG7lsKu.jpeg'
//created by mask ser
Asena.addCommand({ pattern: "wame ?(.*)", fromMe: true, desc: 'give the link of the user' },
async (message, match) => {
const options={}
const buff1 = await getBuffer (url1)
options.quoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast"
            },
            message: {
                "imageMessage": {
                    "jpegThumbnail": buff1.buffer,
                    "caption": " ♥ MASK SER♥"
                }
            }
        }
    match =  'https://wa.me/' + ( message.reply_message.jid || message.mention[0] || match).split('@')[0] 
await message.sendMessage(match , options)
})


