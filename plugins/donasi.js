let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭─「  Donasi • Pulsa 」
├❒ axis [083825289775]
╰────

╭─「  Donasi • Non Pulsa 」
├❒ Gopay [083103728298]
├❒ Ovo [083825289775]
├❒ Shopee Pay [122083825289775]
╰────

╭─「  Hubungi 」
├❒ Ingin Donasi? wa.me/6283825289775
╰────
`.trim(), 'Yang donasi dapat pahala', 'Owner', '.owner', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler