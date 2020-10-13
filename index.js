const Discord = require("discord.js");
const jimp = require("jimp")
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

bot.login(config.token);
bot.commands = new Discord.Collection();
bot.queues = new Map();
const path = require("path");

bot.on("ready", function () {
    console.log(`Estou conectado como ${bot.user.username}`);
  });

const commandFiles = fs
.readdirSync(path.join(__dirname, "/commands"))
.filter((filename) => filename.endsWith(".js"));

for (var filename of commandFiles) {
  const command = require(`./commands/${filename}`);
  bot.commands.set(command.name, command);
}

bot.on("guildMemberAdd", async member => {
    let canal = bot.channels.cache.get("764248994426912789")
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
    let mask = await jimp.read('mascara.png')
    //let avatar = await jimp.read('Win+r.gif')
    let fundo = await jimp.read('fundo.png')

    jimp.read(member.user.displayAvatarURL({ format: 'jpg' })).then(avatar => {
        avatar.resize(130, 130)
        mask.resize(130, 130)
        avatar.mask(mask)
        fundo.print(fonte, 170, 175, member.user.username)
        fundo.composite(avatar, 40, 90).write('bemvindo.png')
        canal.send(``, { files: ["bemvindo.png"]})
    })
    .catch(error => {
        console.log("Erro ao carregar a imagem")
    });
})

bot.on("message", (msg) => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;
  
    const args = msg.content.slice(config.prefix.length).split(" ");
    const command = args.shift();
  
    try {
      bot.commands.get(command).execute(bot, msg, args);
    } catch (e) {
      console.error(e);
      return msg.reply("Ops! Eu ainda não conheço esse comando!");
    }
});