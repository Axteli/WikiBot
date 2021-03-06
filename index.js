const Discord = require("discord.js");
const fs = require('fs');
const config = require("./config/config.json");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.description = new Discord.Collection();
bot.usage = new Discord.Collection();
bot.example = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync('./commandes/');

Timer = Date.now();

["command", "event"].forEach(handler => {
	require(`./handlers/${handler}`)(bot);
});


bot.login(config.token);
