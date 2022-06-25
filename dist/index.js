"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require("dotenv/config");
const token = process.env.BOT_TOKEN;
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES] });
client.once('ready', () => {
    console.log('Ready');
});
const prefix = 'bonk';
client.on('message', (message) => {
    if (message.content.startsWith(prefix) && !message.author.bot) {
        message.reply('yes, bonk!');
    }
});
client.login(token);
