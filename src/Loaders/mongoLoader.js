const mongoose = require("mongoose");
const client = global.client;

mongoose.connect(client.Keys.MongoURL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

mongoose.connection.on("connected", async () => {
  setTimeout(() => {
    console.log(`> (Database): Mongo DB ile sağlıklı bağlantı sağladım!`)
  }, 5000);
});

mongoose.connection.on("error", async () => {
  console.error(`> (Database): Mongo URL ye bağlanırken sorunla karşılaştım!`)
});