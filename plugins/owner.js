/* codded by raashii
use this git under copyright
dont change credit
*/

const Rashi = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

if (config.WORKTYPE == 'private') {

Rashi.addCommand({pattern: 'owner', fromMe: true, desc: 'it send owner details'}, (async (message, match) => {

    var rashi = await axios.get(config.RASHI, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(rashi.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `*` + config.BOTPLK + `*` + `  CREATED BY ` + config.PLK + `\n\n` + `*•━━━━━━━━╼  ╾━━━━━━━•*`
}) 

}));
}

else if (config.WORKTYPE == 'public') {

Rashi.addCommand({pattern: 'owner', fromMe: false, desc: 'it send owner details'}, (async (message, match) => {

    var rashi = await axios.get(config.RASHI, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(rashi.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `*` + config.BOTPLK + `*` + `  CREATED BY ` + config.PLK + `\n\n` + `*•━━━━━━━━╼  ╾━━━━━━━•*`
}) 

}));
}