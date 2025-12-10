module.exports = {
    name: "getsettings",
    alias: [],
    category: "owner",
    desc: "Show current bot settings",
    react: "⚙️",
    start: async (ctx) => {
        let settingsMessage = `⚙️ *Current Bot Settings:*
🔸 *prefix*: .
🔸 *mode*: private
🔸 *autobio*: OFF
🔸 *anticall*: OFF
🔸 *chatbot*: OFF
🔸 *antibug*: OFF
🔸 *autotype*: OFF
🔸 *autoread*: OFF
🔸 *antiedit*: private
🔸 *menustyle*: 5
🔸 *autoreact*: OFF
🔸 *autoblock*: OFF
🔸 *autorecord*: OFF
🔸 *antidelete*: private
🔸 *alwaysonline*: ON
🔸 *autoviewstatus*: ON
🔸 *autoreactstatus*: OFF
🔸 *autorecordtype*: OFF
🔸 *statusantidelete*: ON
🔸 *botname*: SPACE-MD
🔸 *ownername*: Not set!
🔸 *ownernumber*: 25470000000
🔸 *statusemoji*: 🧡,💚,🔥,✨,❤️,🥰,😎
🔸 *watermark*: © SPACE-MD
🔸 *author*: MD
🔸 *packname*: SPACE
🔸 *timezone*: Africa/Nairobi
🔸 *contextlink*: https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg---
`;
        ctx.reply(settingsMessage);
    }
};
