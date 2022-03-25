module.exports = {
    name: "embed",
    description: "Create embed message.",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "title",
            description: "Embed title.",
            type: "STRING",
            required: true,
        },
        {
            name: "description",
            description: "Embed description.",
            type: "STRING",
            required: true,
        },
        {
            name: "color",
            description: "Embed color.",
            type: "STRING",
            required: true,
        },
        {
            name: "footer",
            description: "Embed footer.",
            type: "STRING",
            required: false,
        },
    ],
    run: async (client, interaction, args) => {
        try {
            const title = interaction.options.getString("title")
            const desc = interaction.options.getString("description")
            const color = interaction.options.getString("color")
            const footer = interaction.options.getString("footer")

            if (footer) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(title)
                    .setColor(color)
                    .setDescription(desc)
                    .setFooter({ text: footer })
                interaction.followUp({ embeds: [embed] })
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(title)
                    .setColor(color)
                    .setDescription(desc)
                interaction.followUp({ embeds: [embed] })
            }

        } catch (e) {
            const embed = new Discord.MessageEmbed()
            embed
                .setDescription(`❌ I can't send embed!`)
                .setColor(config.error_color)
            return interaction.followUp({ embeds: [embed] });
        }
    }
}
