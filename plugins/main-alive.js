let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = './Assets/mp3/Alive.mp3'
  let url = 'https://github.com/SHADOWHACKERS-lab/SHADOW-V1.1'
  let murl = 'https:/'
  let img = 'https://imgur.com/a/ZAqFU6j.jpeg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228256@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'firemd',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'I AM ALIVE',
        body: 'SHADOW-V1.1',
        thumbnailUrl: img,
        sourceUrl: 'https://whatsapp.com/channel/0029Vafy50bB4hdZV9YAAn2r',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']{}
handler.command = /^(alive)$/i

export default handler
