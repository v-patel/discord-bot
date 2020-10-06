require('dotenv').config()
const Discord = require("discord.js");

const { ping, sum } = require("./messages");

const client = new Discord.Client();
const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  switch(command) {
    case 'ping': ping()
    case 'sum': sum()
  }
});

client.login(process.env.BOT_TOKEN);