module.exports = {
    name: "addsudo",
    alias: [],
    category: "user",
    desc: "Add a user to SUDO list",
    react: "✅",
    start: async (ctx) => {
        // implement your sudo list logic here
        ctx.reply("User added to SUDO list!");
    }
};
