module.exports = {
    name: "eval",
    description: "Executes a code.",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "code",
            description: "Code.",
            type: "STRING",
            required: true,
        }
    ],
    run: async (client, interaction, args) => {
        if (!config.dev.includes(interaction.member.user.id)) {
            const embed = new Discord.MessageEmbed()
                .setColor(config.error_color)
                .setDescription(`❌ You don't have permissions!`)
            return interaction.followUp({ embeds: [embed] })
        }

        const clean = async (text) => {
            if (text && text.constructor.name == "Promise")
                text = await text;
            if (typeof text !== "string")
                text = require("util").inspect(text, { depth: 1 });
            text = text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203));
            return text;
        }

        try {
            const evaled = eval(args.join(" "));
            const cleaned = await clean(evaled, client)

            if (!evaled) {
                const embed = new Discord.MessageEmbed()
                    .setColor(config.default_color)
                    .setDescription(`\`\`\`js\nCode executed successfully.\`\`\``)
                return interaction.followUp({ embeds: [embed] })
            }
            const embed = new Discord.MessageEmbed()
                .setColor(config.default_color)
                .setDescription(`\`\`\`js\n${cleaned}\`\`\``)
            interaction.followUp({ embeds: [embed] })
        } catch (err) {
            const embed = new Discord.MessageEmbed()
                .setColor(config.error_color)
                .setDescription(`\`\`\`js\n${err}\`\`\``)
            interaction.followUp({ embeds: [embed] })
        }

    }
}
