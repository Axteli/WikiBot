const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    const generateur = new Discord.MessageEmbed()
     .setTitle("générateur de forme")
     .setColor("#527a9e")
     .setDescription("Le <#756635002401194114> vous permet de générer n'importe quel forme ! De la plus farfelue au logo du jeu, tout est possible !\n[le générateur (clique ici!)](https://viewer.shapez.io/)")
    message.channel.send(generateur);
    console.log('commande generateur executé')

}

module.exports.help = {
name: "generateur"
}