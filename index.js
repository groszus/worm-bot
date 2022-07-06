global.Discord = require(`discord.js`)
global.client = new Discord.Client({ intents: 32767, allowedMentions: { repliedUser: false } });
global.util = require(`util`)
global.glob = require(`glob`)
global.globPromise = util.promisify(glob)
global.ms = require(`ms`)
global.fs = require(`fs`)
global.axios = require(`axios`)
global.fetch = require(`node-fetch`)
global.config = require(`./config.json`)
global.cp = require(`child_process`)
module.exports = client;

client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
require("./handler/command")(client);
require("./handler/event")(client);

process.on('unhandledRejection', error => require('./events/error')(error))
process.on('uncaughtException', error => require('./events/error')(error))

client.login(config.token).catch(() => { 
    console.log(`❌ Invaild token! Go to "config.json" and check token!`)
})
