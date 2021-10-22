const Discord = require('discord.js');
const ytdl = require('ytdl-core');

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
