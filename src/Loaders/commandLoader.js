const fs = require("fs");
const client = global.client;

module.exports = fs.readdir('./src/Commands/', (err, first) => {
  if(err) console.error(err);
  first.forEach(x => {
    fs.readdir('./src/Commands/'+x+'/', (err, last) => {
      if(err) console.error(err);
      last.filter(x => x.endsWith('.js')).forEach(f => {
        const cmd = require("../Commands/"+x+"/"+f);
        if(!cmd.conf || !cmd.run) return;
        client.commands.set(cmd.conf.name, cmd)
        cmd.conf.aliases.forEach(a => client.aliases.set(a, cmd.conf.name))
      });
      console.log(`> (Commands): ${x} klasöründe ${last.length} adet komut yüklendi!`)
    });
  });
});