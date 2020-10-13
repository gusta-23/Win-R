const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    console.log(msg.guild.splash);
    /*const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(`Total de membros no servidor: ${msg.guild.memberCount}`)
    .setAuthor("Alt+F4",
    `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`)
    .setFooter("Profano19 2020. Todos os direitos reservados", 
    `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`);*/

    const embed = {
        color: "#0099ff",
        title: "Quantidade de membros no servidor",
        thumbnail: {
            url: msg.author.avatar
        ? `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
        : `https://cdn.discordapp.com/embed/avatars/${
            msg.author.discriminator % 5
        }.png`,
    },
        author: {
            name: "Win+R",
            icon_url: `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
            url: " ",
        },
        fields: {
            name: "Total de membros: ",
            value: msg.guild.memberCount,
            inline: true,
        },
        timestamp: new Date(),
        footer: {
            text: "Guxta 2020. Todos os direitos reservados",
            icon_url: `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
        },
    };

    msg.channel.send({ embed });

};

module.exports = {
    name: "qtd",
    help: "Retorna uma MessageEmbed",
    execute,
};