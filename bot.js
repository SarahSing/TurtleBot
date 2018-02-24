const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.on('ready', () => {
    console.log('Hey Am i Human? can i be?');

});
client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if(message.content.startsWith(config.prefix + "ping")) {
          message.channel.send({embed: {
            color: 2752220,
            description: ("pong!")
          }})
  }
      if(message.author.id !== config.ownerID) return;
      if(message.content.startsWith(config.prefix + "prefix")) {
      // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
     let newPrefix = message.content.split(" ").slice(1, 2)[0];
     // change the configuration in memory
    config.prefix = newPrefix;

    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  };
});

client.login(config.token);
