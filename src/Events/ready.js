const { joinVoiceChannel } = require("@discordjs/voice");
const client = global.client;

module.exports = {
  conf:{
    type: "ready"
  },
  execute: async () => {
    client.user.setPresence({
      activities:[
        { name: "Developed by Kvalue", type: 5 }
      ]
    });

    client.channels.cache.map(x => {
      if(x.type == 'GUILD_VOICE'){
        if(x.id == client.Keys.Voice) joinVoiceChannel({ channelId: x.id, guildId: x.guild.id, adapterCreator: x.guild.voiceAdapterCreator }).then(
          () => console.log(`> (Client): Bot ses kanalına bağlandı!`)
        ).catch(
          (err) => console.error(`> (Client): Bot ses kanalına bağlanırken bir sorun ile karşılaştı!`)
        );
      }
    });
  }
}