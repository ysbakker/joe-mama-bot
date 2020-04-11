require('dotenv').config();

const figlet = require('figlet');
const Discord = require('discord.js');
const client = new Discord.Client();

const asciiText = (...params) =>
  new Promise((resolve, reject) => {
    figlet(...params, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });

client.on('ready', () => {
  console.log('-> Joe mama bot started');
});

const triggers = [
  "who's joe?",
  'whos joe?',
  "who's joe",
  'whos joe',
  'wie is joe?',
  'wie is joe',
];

client.on('message', async ({ content, channel }) => {
  const msg = content.trim().toLowerCase();
  if (triggers.includes(msg))
    channel.send(
      `\`\`\`${await Promise.all(
        'J\no\ne\nm\na\nm\na'
          .split()
          .map((letter) => asciiText(letter, { font: 'isometric1' }))
      )}\`\`\``
    );
});

client.login(process.env.DISCORD_TOKEN);
