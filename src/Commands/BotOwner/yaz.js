module.exports = {
  conf:{
    name: "yaz",
    aliases: ["yazdır"],
    cooldown: 5000
  }, help: { developer: true, owner: false},
  run: async (client, message, params, embed) => {
    message.channej.send(message.content)
  }
}
