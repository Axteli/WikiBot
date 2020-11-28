const Discord = require('discord.js')
const config = require('../config.json')
const emote = require('../emote.json')
module.exports.run = async(bot, message, args) => {

    message.delete();

    const suggestChannel = bot.channels.cache.get(config.suggestChannel)
    const guild = suggestChannel.guild.id


    if (`${message.guild.id}` === `${guild}`) {
        

        //définir suggestion comme args0
        let suggestion = args.slice(0).join(" ");

        //si aucune suggestion
        if (!args[0]) 
            return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, tu ne m'as pas dit quel étais ta suggestion!`), 
             console.log(`commande : suggest | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : aucune suggestion`);
        
        //envoyer l'embed de suggestion   
        const icon = message.guild.iconURL()

        const embed = new Discord.MessageEmbed()
         .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
         .setDescription(suggestion)
         .setColor(config.embedColor)
         .setFooter(`${message.guild.name}`, icon)
         .setTimestamp()

        suggestChannel.send(embed).then(msg => {
        
            //réagire a l'embed
            msg.react(emote.tick);
            msg.react(emote.neutral);
            msg.react(emote.cross);

            setTimeout(() => {
                message.channel.send(`${emote.tick} | Ta suggestion a bien été envoyer dans ${suggestChannel} !`),
                console.log(`commande : suggest | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| suggestion : ${suggestion}`)
            }, 3000)

        });

    }else{
        return message.channel.send(`${emote.cross} Erreur | ${message.author.username}, le système de suggestion n'est pas disponible sur ce serveur!`),
         console.log(`commande : suggest | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le système de suggestion n'est pas dispo sur ce serveur`);
    }

    }

    module.exports.help = {
    name: "suggest"
    }