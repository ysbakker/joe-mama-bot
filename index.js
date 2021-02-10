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
  'who\'s joe',
  'whos joe',
  'wie is joe',
  'who is joe'
];

client.on('message', async ({ content, channel, author }) => {
  const msg = content.trim().toLowerCase();
  if (triggers.includes(msg) || triggers.includes(msg.slice(0, -1))) {
    console.log(`Trigger message received by ${author.username}`);
    if (author.username.toLowerCase().includes('daniel')) {
      channel.send('Opkutten Daniël')
    } else {
      channel.send(
        `\`\`\`
        ${await asciiText('Joe', { font: 'Weird' })}
        ${await asciiText('Mama', { font: 'Weird' })}
        \`\`\``
      );
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
