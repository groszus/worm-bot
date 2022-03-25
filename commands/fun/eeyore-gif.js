module.exports = {
    name: "eeyore-gif",
    description: "Sends eeyore gif.",
    type: "CHAT_INPUT",
    run: async (client, interaction, args) => {
        let url = "http://eeyore-api.herokuapp.com/api/gif"
        let image, repsonse;
        response = await axios.get(url)
        image = response.data;
        fetch("http://eeyore-api.herokuapp.com/api/text")
            .then((json) => json.text())
            .then((text) => {
                const embed = new Discord.MessageEmbed()
                embed
                    .setDescription(`${text}`)
                    .setImage(image.gif)
                    .setColor(config.default_color)
                interaction.followUp({ embeds: [embed] });
            })
    },
};
