import('discord.js'); require('discord.js'); const disbut = require('discord.js-buttons')(client);
import('discord.js-buttons'); 
const Discord = require('discord.js')


const token = 'token'
client.login(token)

// Import required modules
// Import required modules
// Import required modules
const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord.js-buttons');
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

// Create a Discord client
const client = new Discord.Client();
require('discord.js-buttons')(client);

// Event handler for when the bot is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Event handler for incoming messages
client.on('message', (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Check if the message content triggers the game
  if (message.content.toLowerCase() === 'start rps') {
    const rockButton = new MessageButton()
      .setStyle('PRIMARY')
      .setCustomId('rock')
      .setLabel('Rock')
      .setValue('rock'); // Set a value for the Rock button

    const paperButton = new MessageButton()
      .setStyle('PRIMARY')
      .setCustomId('paper')
      .setLabel('Paper')
      .setValue('paper'); // Set a value for the Paper button

    const scissorsButton = new MessageButton()
      .setStyle('PRIMARY')
      .setCustomId('scissors')
      .setLabel('Scissors')
      .setValue('scissors'); // Set a value for the Scissors button

    const row = new MessageActionRow().addComponents(rockButton, paperButton, scissorsButton);

    message.channel.send('Choose your move!', row);
  }
});

// Event handler for button clicks
client.on('clickButton', async (button) => {
  if (button.customId === 'rock' || button.customId === 'paper' || button.customId === 'scissors') {
    const userChoice = button.getValue(); // Get the value of the clicked button

    // Generate a random move for the bot
    const botMove = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

    // Determine the winner
    let result = '';
    if (userChoice === botMove) {
      result = 'It\'s a tie!';
    } else if (
      (userChoice === 'rock' && botMove === 'scissors') ||
      (userChoice === 'paper' && botMove === 'rock') ||
      (userChoice === 'scissors' && botMove === 'paper')
    ) {
      result = 'You win!';
    } else {
      result = 'Bot wins!';
    }

    // Send the result
    await button.defer();
    await button.message.edit(`You chose ${userChoice}\nBot chose ${botMove}\n${result}`);
  }
});

// Log in to the Discord server with the bot's token
client.login(process.env.BOT_TOKEN);
