const Discord = require('discord.js')
const emote = require('../../config/emote.json')
module.exports.run = async(bot, message, args) => {

     
    //vérifie la permission du membre
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, il te manque la permission "administrateur" pour effecctuer cette commande!`),
         console.log(`commande : say | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} n'as pas la permission admin`)
    }

    //définir text qui est le texte que l'on vas envoyer
    var text = message.content.split(' ').slice(1).join(' ');

    //si aucun texte défini return
    if(!text) {
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu ne m\'as pas dit ce que je devais écrire!`),
         console.log(`commande : say | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} n'as pas la permission admin`);
    }
    
    //envoyer le text défini plus haut
    message.channel.send(text);
     console.log(`commande : say | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| texte : ${text}`)
        
}
    

module.exports.help = {
name: "say"
}