let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️ قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '♻️قامت الاوامر🍀',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'YES',
                        rows: [
                          {
                            header: ' [🧫]طيف[🧫] ',
                            title: '.طيف',                                 description: '',
                            id: 'te'
                          },
                          {
                            header: ' [♻️]αρƙ[♻️] ',
                            title: '.apk',
                            description: '',
                            id: 'te'
  },
                          {
header: ' [❄]تطبيق-برو[❄] ',
                            title: '.تطبيق_برو',
                            description: '',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['اوامر']
handler.tags = ['main']
handler.command = ['اوامر']

export default handler
