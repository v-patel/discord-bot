import { config } from "dotenv";
config();
import * as Discord from "discord.js";
import { ping, sum } from "./messages";

const client = new Discord.Client();
const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = (args.shift() || "").toLowerCase();
  switch(command) {
    case "ping": 
      ping(message); 
      break;
    case "sum": 
      sum(message, args);
      break;
  }
});

client.login(process.env.BOT_TOKEN);
console.log("Discord bot started");
