const { Client, Collection, Intents } = require("discord.js");

class Kvalue extends Client {
  constructor(options){
    super(options);

    this.Config = require("./Configs/Config.json");
    this.Keys = require("./Configs/Keys.json");
    this.Settings = require("./Configs/Settings.json");
    this.Emojis = require("./Configs/Emojis.json");

    this.commands = new Collection();
    this.aliases = new Collection();
    this.cooldown = new Map();
    
    this.channelDelete = new Map();
    this.channelCreate = new Map();
    this.channelUpdate = new Map(),
    this.roleDelete = new Map();
    this.roleCreate = new Map();
    this.roleUpdate = new Map();
    this.clickBan = new Map();
    this.clickKick = new Map();
    this.clickTimeout = new Map();
    this.clickUpdate = new Map();

    this.allIntents = Object.keys(Intents.FLAGS)
  }
}

module.exports = { Kvalue };