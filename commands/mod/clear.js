module.exports = {
    name: "clear",
    description: "Clear messages from channel.",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "amount",
            description: "Amount of messages.",
            type: "INTEGER",
            required: true,
        }
    ],
    run: async (client, interaction, args) => {
        const amount = interaction.options.getInteger("amount")

        if (amount > 99) {
            const embed = new Discord.MessageEmbed()
            embed
                .setDescription(`❌ The maximum amount of messages is **99**!`)
                .setColor(config.error_color)
            return interaction.followUp({ embeds: [embed] });
        }

        if (amount < 1) {
            const embed = new Discord.MessageEmbed()
            embed
                .setDescription(`❌ The minimal amount of messages is **1**!`)
                .setColor(config.error_color)
            return interaction.followUp({ embeds: [embed] });
        }

        const messages = await interaction.channel.messages.fetch({ limit: amount + 1 })
        const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms("14 days"))

        if (filtered.size < 1) {
            const embed = new Discord.MessageEmbed()
            embed
                .setDescription(`❌ There is no messages in this channel!`)
                .setColor(config.error_color)
            return interaction.followUp({ embeds: [embed] });
        }
        
        await interaction.channel.bulkDelete(filtered)
    },
};
