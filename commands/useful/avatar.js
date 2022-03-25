module.exports = {
    name: "avatar",
    description: "Displays user avatar.",
    type: 'CHAT_INPUT',
    options: [
        {
            name: "member",
            description: "Mention user.",
            type: "USER",
            required: false,
        }
    ],
    run: async (client, interaction, args) => {
        const target = interaction.options.getMember("member") || interaction.member
        const png = new Discord.MessageButton()
            .setStyle(5)
            .setLabel('.png')
            .setURL(`https://cdn.discordapp.com/avatars/${target.user.id}/${target.user.avatar}.png`)
        const gif = new Discord.MessageButton()
            .setStyle(5)
            .setLabel('.gif')
            .setURL(`https://cdn.discordapp.com/avatars/${target.user.id}/${target.user.avatar}.gif`)
        const jpg = new Discord.MessageButton()
            .setStyle(5)
            .setLabel('.jpg')
            .setURL(`https://cdn.discordapp.com/avatars/${target.user.id}/${target.user.avatar}.jpg`)
        const row = new Discord.MessageActionRow()
            .addComponents(png, gif, jpg)
        const embed = new Discord.MessageEmbed()
        embed
            .setImage(`${target.displayAvatarURL({ dynamic: true })}?size=4096`)
            .setColor(config.default_color)
        interaction.followUp({ embeds: [embed], components: [row] });
    }
}