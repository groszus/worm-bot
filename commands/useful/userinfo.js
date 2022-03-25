module.exports = {
    name: "userinfo",
    description: "Displays info about member.",
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
        const embed = new Discord.MessageEmbed()
        embed
            .addField(`Username & tag:`, `${target.user.username} (${target.user.tag})`)
            .addField(`User ID:`, `${target.id}`)
            .addField(`Created:`, `<t:${~~(target.user.createdTimestamp / 1000)}:R>`)
            .addField(`Joined server:`, `<t:${~~(target.joinedTimestamp / 1000)}:R>`)
            .addField(`Highest role:`, `${target.roles.highest}`)
            .addField(`All roles:`, `${target.roles.cache.map(r => `${r.toString()}`).join(', ')}`)
            .setThumbnail(`${target.displayAvatarURL({ dynamic: true })}`)
            .setColor(config.default_color)
        interaction.followUp({ embeds: [embed] });
    }
}