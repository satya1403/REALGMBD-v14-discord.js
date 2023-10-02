import('discord.js'); require('discord.js'); const disbut = require('discord.js-buttons')(client);
import('discord.js-buttons'); 
const Discord = require('discord.js'); 

const token = 'MTE1NTY2MzYyNDAxOTM5MDQ3NAGo3dUk.l56yj1nHd9ys2IJrQOVay_ksLqB5Rzbvs7vHIw'
client.login(token)

const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord.js-buttons');
const client = new Discord.Client();


const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord.js-buttons');
require('discord.js-buttons')(client);

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  // Check if the message is not sent by a bot to prevent infinite loops
  if (message.author.bot) return;

  // Send buttons with different attachments
  const buttons = [
    new MessageButton()
      .setStyle('PRIMARY')
      .setLabel('Button 1')
      .setID('attachmentButton1'),
    new MessageButton()
      .setStyle('PRIMARY')
      .setLabel('Button 2')
      .setID('attachmentButton2'),
    new MessageButton()
      .setStyle('PRIMARY')
      .setLabel('Button 3')
      .setID('attachmentButton3'),
    new MessageButton()
      .setStyle('PRIMARY')
      .setLabel('Button 4')
      .setID('attachmentButton4'),
  ];

  const row = new MessageActionRow().addComponents(buttons);

  message.channel.send('Click any button to receive an attachment:', row);
});

client.on('clickButton', async (button) => {
  switch (button.id) {
    case 'attachmentButton1':
      await sendAttachment(button, 'attachment1.png');
      break;
    case 'attachmentButton2':
      await sendAttachment(button, 'attachment2.png');
      break;
    case 'attachmentButton3':
      await sendAttachment(button, 'attachment3.png');
      break;
    case 'attachmentButton4':
      await sendAttachment(button, 'attachment4.png');
      break;
    default:
      break;
  }
});

async function sendAttachment(button, attachmentFileName) {
  const attachment = new Discord.MessageAttachment(`path/to/attachments/${attachmentFileName}`);
  await button.reply.send('Here is your attachment:', { files: [attachment] });
}

client.login('YOUR_BOT_TOKEN');
