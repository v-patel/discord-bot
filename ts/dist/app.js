"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const Discord = require("discord.js");
const messages_1 = require("./messages");
const client = new Discord.Client();
const prefix = "!";
client.on("message", function (message) {
    if (message.author.bot)
        return;
    if (!message.content.startsWith(prefix))
        return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(" ");
    const command = (args.shift() || "").toLowerCase();
    switch (command) {
        case "ping":
            messages_1.ping(message);
            break;
        case "sum":
            messages_1.sum(message, args);
            break;
    }
});
client.login(process.env.BOT_TOKEN);
console.log("Discord bot started");
