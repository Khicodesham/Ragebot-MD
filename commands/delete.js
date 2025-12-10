module.exports = {
    name: "delete",
    alias: ["del"],
    category: "admin",
    desc: "Delete a message",
    react: "🗑️",
    start: async (ctx) => {
        try {
            if (!ctx.quoted) return ctx.reply("Reply to the message you want to delete!");
            await ctx.delete(ctx.quoted.id); // works in group or personal chat
            ctx.reply("Message deleted successfully ✅");
        } catch (err) {
            ctx.reply("Failed to delete the message ❌");
            console.log(err);
        }
    }
};
