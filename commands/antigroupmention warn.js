module.exports = {
    name: "antigroupmention",
    alias: [],
    category: "group",
    desc: "Warn users who mention the bot",
    react: "⚠️",
    start: async (ctx) => {
        // logic to warn user on @mention
        ctx.reply("Antigroupmention is now set to warn!");
    }
};
