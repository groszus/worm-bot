module.exports = async error => {
    const embed = new Discord.MessageEmbed()
        .setColor(config.error_color)
        .setDescription(`\`\`\`js\n${error}\`\`\``)
    client.channels.cache.get(config.error_channel_id).send({ embeds: [embed] })
}