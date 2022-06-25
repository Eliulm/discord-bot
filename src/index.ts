import { Client, Intents, Message } from 'discord.js';
import  'dotenv/config' ;

const token = process.env.BOT_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready');
})


const prefix = 'bonk';

client.on('message', (message: Message) => {
    if (message.content.startsWith(prefix) && !message.author.bot) {
        message.reply('yes, bonk!');
    }
})

client.login(token);