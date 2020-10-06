import type { Message } from "discord.js";
export function ping(message: Message) {
  const timeTaken = Date.now() - message.createdTimestamp;
  message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
}

export function sum(message: Message, args: string[]) {
  const numArgs = args.map(x => parseFloat(x));
  const sum = numArgs.reduce((counter, x) => counter += x);
  message.reply(`The sum of all the arguments you provided is ${sum}!`);
}
