"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.ping = void 0;
function ping(message) {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
}
exports.ping = ping;
function sum(message, args) {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
}
exports.sum = sum;
