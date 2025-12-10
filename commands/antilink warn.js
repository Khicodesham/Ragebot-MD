module.exports = {
    name: "antilink",
    alias: [],
    category: "group",
    desc: "Warn users who send links",
    react: "⚠️",
    start: async (ctx) => {
        // logic to warn on link messages
        ctx.reply("Antilink is now set to warn!");
    }
};
