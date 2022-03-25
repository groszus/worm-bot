module.exports = async (client) => {
    const slashCommands = await globPromise(`${process.cwd()}/commands/*/*.js`)
    const x = [];
    
    slashCommands.map((value) => {
        const file = require(value)
        if (!file?.name) return;
        client.slashCommands.set(file.name, file)

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description
        x.push(file)
    })

    client.on("ready", async () => {
        await client.guilds.cache
            .get(`872760662676344873`)
            .commands.set(x)
        await client.application.commands.set(x);
    })
};
