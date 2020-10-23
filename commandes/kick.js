const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

    message.delete()

    //vérifie les permissions
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, tu n'as pas la permission de kick!`),
             console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : ${message.author.username} n'as pas la permission de kick`)
        }

        if (!message.guild.me.hasPermission("KICK_MEMBERS"))
            return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, je n\'est pas la permission de kick !`), 
             console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : le bot n'as pas la permission de kick`)



    //vérifie que quelqu'un a été mentionné
        if (!args[0]) {
            return message.channel.send(`${message.author.username}, précise qui je dois kick!`)
        }

    //définir member
        const member = message.mentions.members.first() || message.id.members.first();


    //si member est = a rien return
        if(!member) 
            return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author.username}, je ne trouve pas cet utilisateur :/`),
             console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : l'utilisateur est introuvable`)


    //vérifie qui est la personne a kick
        if(member.id === '761914312422981632') 
            return message.channel.send(`${message.author}, pourquoi veut tu me kick? tu ne m\'aime pas? :cry:`),
             console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de kick le bot`)

        if(member.id === message.author) 
            return message.channel.send(`${message.author}, tu ne peux pas te kick toi-meme!`),
             console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de se kick sois-meme`)


    //verifie si la personne est kickable
        if(!member.kickable) 
            return message.channel.send(`<a:tickred:764793956813766687> Erreur | ${message.author}, je ne peux pas kicker cet personne probablement car il a un role au dessus du miens`),
             console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : la personne ne peut pas etre kick par le bot`)

    //vérifie si la personne à kick n'est pas plus haut gradé
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) 
            return message.channel.send(`${message.author.username}, tu ne peux pas kick quelqu'un plus haut gradé que toi!`)
             console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| détails : a essayé de kick un membre plus haut gradé`)



    //définir la raison
        let reason = args.slice(1).join(" ");
         
    // si raison = a rien alors reason = non fourni
        if (reason === "") reason = "Non-fourni"


    //envoie le mp au membre kické
        const kickmp = new Discord.MessageEmbed()
        
         .setColor("#527a9e")
         .setTitle(`Tu a été kick du serveur : ${message.guild}`)
         .setDescription(`Par : ${message.author}\nRaison : ${reason}`)
         .setThumbnail(message.guild.iconURL())
         .setTimestamp()

        member.send(kickmp);
        
    //kick le membre après 500ms
        await setTimeout(() => { member.kick({reason: `${reason} | Par : ${message.author.tag} (${message.author.id})`})
         .catch(err => {if(err) return message.channel.send('keskicpace')})}, 500);


        const kickembed = new Discord.MessageEmbed()

         .setColor("#527a9e")
         .setTitle('Membre kické')
         .setThumbnail(member.user.displayAvatarURL())
         .setDescription(`Membre kické : ${member}\nPar : ${message.author}\nRaison : ${reason}`)
     
        message.channel.send(kickembed);

    console.log(`commande : kick | par : ${message.author.tag} (${message.author.id}) | dans : ${message.channel.name} (${message.channel.id})| serveur : ${message.guild} (${message.guild.id})| membre visé : ${member}`)



}

module.exports.help = {
name: "kick"
}