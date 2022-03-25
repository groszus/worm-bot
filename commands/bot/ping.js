module.exports = {
    name: "ping",
    description: "Bot ping.",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
        const embed = new Discord.MessageEmbed()
        embed
            .setDescription(`🏓 Websocket ping: **${client.ws.ping}ms**!`)
            .setColor(config.default_color)
        interaction.followUp({ embeds: [embed] });
    },
};
