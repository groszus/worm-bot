module.exports = {
    name: "shell",
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

        try {
            const a = await cp.execSync(`${args.join(` `)}`)

            const embed = new Discord.MessageEmbed()
                .setColor(config.default_color)
                .setDescription(`\`\`\`js\n${a}\`\`\``)
            interaction.followUp({ embeds: [embed] })
        } catch (err) {
            const embed = new Discord.MessageEmbed()
                .setColor(config.error_color)
                .setDescription(`\`\`\`js\n${err}\`\`\``)
            interaction.followUp({ embeds: [embed] })
        }

    }
}
