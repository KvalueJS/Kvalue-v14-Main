const { Kvalue } = require("./src/AppBase.js");
require("discord-reply");
const client = (global.client = new Kvalue());
require("discord-modals")(client);

require("./src/Loaders/commandLoader.js");
require("./src/Loaders/eventLoader.js");
require("./src/Loaders/mongoLoader.js");

client.login(client.Keys.Token).then(() => console.log(`> (Client): Bot token aracılığıyla uygulamaya başarıyla bağlandı.`)).catch((err) => console.error(`> (Client): Bot uygulama ile bağlantı kurarken bir sorun oluştu!\n[Sebep]: ${err}`));
