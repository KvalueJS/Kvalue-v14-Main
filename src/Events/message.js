const { MessageEmbed } = require("discord.js");
const client = global.client;

setInterval(() => {
  client.cooldown.forEach((x, index) => {
    if (Date.now() - x.lastUsage > x.cooldown) client.cooldown.delete(index);
  });
}, 8000);

module.exports = {
  conf:{
    type: "messageCreate"
  },
  execute: async (message) => {
    if(message.author.bot || !message.content.startsWith(client.Keys.Prefix)) return;

    let params = message.content.substring(client.Keys.Prefix.length).trim().split(' ');
    let commandName = params[0].toLowerCase();
    params = params.splice(1);

    let cmd = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));
    const kvalue = client.users.fetch("895662018432991232");
    let embed = new MessageEmbed().setAuthor(message.author.user.username, message.guild.iconURL({ dyamic: true })).setFooter(`Developed by Kvalue`, kvalue.avatarURL({ dynamic: true })).setTimestamp()

    if(cmd){
      if(cmd.help.developer && !client.Keys.BotOwners.includes(message.author.id)) return message.react(client.Emojis.red), message.reply(`Bu komutu kullanmak için yeterli yetkin yok !`)
      else if(cmd.help.owner && !client.Keys.ServerOwners.includes(message.author.id)) return message.react(client.Emojis.red), message.reply(`Bu komutu kullanmak için yeterli yetkin yok !`)
      const cooldown = cmd.conf.cooldown ;
      const cd = client.cooldown.get(message.author.id);
      if (cd) {
      const diff = Date.now() - cd.lastUsage;
      if (diff < cooldown)
        if (!sended) {
          sended = true;
          return message.channel.send(`${message.author}, Bu komutu tekrar kullanabilmek için **${Number(((cooldown - diff) / 1000).toFixed(2))}** daha beklemelisin!`).then((x) => x.delete({ timeout: (cooldown - diff) }));
        }
      } else client.cooldown.set(message.author.id, { cooldown, lastUsage: Date.now() });
      cmd.run(client, message, args, embed);
    }
  }
}