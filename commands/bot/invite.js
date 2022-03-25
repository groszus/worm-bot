module.exports = {
    name: "invite",
    description: "Invite me to your server.",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
        const button1 = new Discord.MessageButton()
            .setStyle(5)
            .setLabel(`Add ${client.user.username}`)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
        const row = new Discord.MessageActionRow()
            .addComponents(button1)
        interaction.followUp({ components: [row] })

    },
};
