client.on("ready", () => {
    console.log(`✅ ${client.user.tag} online!`)
    console.log(`✅ Guilds size: ${client.guilds.cache.size}`)
    client.user.setActivity(`/help`, { type: "PLAYING" })
})
