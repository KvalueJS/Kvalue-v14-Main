const fs = require("fs");
const client = global.client;

module.exports = fs.readdir('./src/Events/', (err, file) => {
  if(err) console.error(err);
  file.forEach(f => {
    const event = require("../Events/"+f);
    if(!event.conf || !event.execute) return;
    client.on(event.conf.type, event.execute);
    console.log(`> (Events): ${event.conf.type} eventi yüklendi!`)
  });
});