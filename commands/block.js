module.exports = {
    name: "block",
    alias: [],
    category: "admin",
    desc: "Block a user",
    react: "⛔",
    start: async (ctx) => {
        try {
            let user = ctx.mentions && ctx.mentions[0];
            if (!user) return ctx.reply("Mention a user to block!");
            await ctx.client.updateBlockStatus(user, "block"); // works in group or personal chat
            ctx.reply(`User ${user.split("@")[0]} has been blocked ✅`);
        } catch (err) {
            ctx.reply("Failed to block user ❌");
            console.log(err);
        }
    }
};
