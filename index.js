const Discord = require('discord.js');
const { execute } = require('./functions');
const queue = require('./queue');

/**
 * Your .env file should include the prefix and token of your bot
 */
require('dotenv').config();
const { PREFIX, TOKEN } = process.env;

const client = new Discord.Client();
client.login(TOKEN);

client.once('ready', () => {
  console.log('Ready!');
});

client.once('reconnecting', () => {
  console.log('Reconnecting!');
});

client.once('disconnect', () => {
  console.log('Disconnect!');
});

client.on('message', async (message) => {
  const { author, content, guild } = message;
  const serverQueue = queue.get(guild.id);

  // checks if the message is from the bot
  if (author.bot) return;
  // checks if the message starts with the prefix
  if (!content.startsWith(PREFIX)) return;

  if (content.startsWith(`${PREFIX}play`)) {
    execute(message, serverQueue);
    return;
  } else if (content.startsWith(`${PREFIX}skip`)) {
    execute(message, serverQueue);
    return;
  } else if (content.startsWith(`${PREFIX}stop`)) {
    execute(message, serverQueue);
    return;
  } else {
    message.channel.send('You need to enter a valid command!');
  }
});
