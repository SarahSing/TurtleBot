const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(NDE2ODMxODk2MjE2MTQxODM0.DXKMkw.2vpyoS9N0ED62Q4_yPthMj8gOlk);
