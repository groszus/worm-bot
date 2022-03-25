client.on("messageCreate", async (message) => {
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
        const embed = new Discord.MessageEmbed()
        embed
            .setDescription(`🐞 **${client.user.username}** | not so good discord bot but its cool \n\nPrefix \`/\` (slash commands)`)
            .addField(`Uptime`, `<t:${~~(client.readyTimestamp / 1000)}:R>`, true)
            .addField(`Ping`, `${client.ws.ping}ms`, true)
            .addField(`\u200b`, `\u200b`, true)
            .setColor(config.default_color)
        return message.reply({ embeds: [embed] })
    }
})
