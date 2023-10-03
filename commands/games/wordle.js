import('discord.js'); require('discord.js'); 
const disbut = require('discord.js-buttons')(client);

const Discord = require('discord.js'); 
// replace token with ur real token
const token = 'token'; 
client.login(token)

const { ButtonBuilder } = require('discord.js'); 
const { MessageButton } = require('discord.js-buttons');

Discord.Message('Lets play wordle!') 
// List of words
const wordList = ['apple', 'banana', 'cherry', 'draine', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'witch'];

// Function to generate a random word
function generateRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

module.exports = generateRandomWord;

const generateRandomWord = require('./randomWordGenerator');

// Generate a random word
const randomWord = generateRandomWord();

console.log(`The random word is: ${randomWord}`);

let button = new disbut.MessageButton()

.setStyle('red')
.setLabel('leave') 
.setID('PRIMARY')
.setDisabled(false) 
const user = message.mentions.users.first(); // Assuming you have a message with a mention

if (user) {
  const mentionString = user.toString(); // Mentions the user
  const messageContent = `${mentionString} left the game.`;
  
  message.channel.send(messageContent);
} else {
  // Handle the case where no user was mentioned
  message.channel.send("No user mentioned.");
} 

let button2 = new disbut.MessageButton() 
.setStyle('green') 
.setLabel('guess')
.setID('PRIMARY')
.setDisabled(false)

const client = new Discord.Client();
require('discord.js-buttons')(client);

// Event handler for when the bot is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Event handler for incoming messages
client.on('message', (message) => {
  // ... (existing code for message handling)
});

// Event handler for button clicks
client.on('clickButton', async (button) => {
  // ... (code for handling button clicks)
});

// Log in to the Discord server with the bot's token
client.login(process.env.BOT_TOKEN);

let button3 = new disbut.MessageButton() 
.setStyle('red') 
.setLabel('Skip ur turn') 
.setID('PRIMARY') 
.setDisabled(true);
