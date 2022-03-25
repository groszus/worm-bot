module.exports = {
    name: "help",
    description: "Commands list.",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
        const bot = fs.readdirSync(`commands/bot`).join(`, \``).replace(/\.js/gi, `\``) || `No commands found!\``
        const fun = fs.readdirSync(`commands/fun`).join(`, \``).replace(/\.js/gi, `\``) || `No commands found!\``
        const mod = fs.readdirSync(`commands/mod`).join(`, \``).replace(/\.js/gi, `\``) || `No commands found!\``
        const owner = fs.readdirSync(`commands/owner`).join(`, \``).replace(/\.js/gi, `\``) || `No commands found!\``
        const useful = fs.readdirSync(`commands/useful`).join(`, \``).replace(/\.js/gi, `\``) || `No commands found!\``
        const embed = new Discord.MessageEmbed()
        embed
            .addField(`🐞 Bot`, `\`${bot}`)
            .addField(`🛠 Moderation`, `\`${mod}`)
            .addField(`🧪 Useful`, `\`${useful}`)
            .addField(`🎉 4Fun`, `\`${fun}`)
            .addField(`🔧 Owner`, `\`${owner}`)
            .setColor(config.default_color)
        interaction.followUp({ embeds: [embed] });
    },
};
