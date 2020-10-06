import "loadenv";
import StartBot, { Intents, Message, sendMessage } from "discord";

StartBot({
  token: Deno.env.get("BOT_TOKEN") || "NOT DEFINED",
  intents: [Intents.GUILDS, Intents.GUILD_MESSAGES],
  eventHandlers: {
    ready: () => {
      console.log(`Logged!`);
    },
    messageCreate: (message: Message) => {
      if (message.content === "!ping") {
        sendMessage(message.channelID, "Pong");
      }
    },
  },
});
