import('discord.js');
const Discord = new Discord.client(); 
client.login('token')
console.log('Logged into') + client.user.tag 
const disbut = require('discord.js-buttons')(client)

const { SlashCommandBuilder } = require('discord.js') 

module.exports (
    data, new SlashCommandBuilder 
    , client.setName, 'create'
    .setDescription, 'This will create a game And will genarate a code!' 
) 
 
const Discord = require('discord.js');

const prefix = '/'; // You can set your own command prefix

const games = new Map(); // Store active games with join codes

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
const { Client, GatewayIntentBits, ButtonStyle, SelectMenuBuilder } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.content === '!selectmode') {
    const selectMenu = new SelectMenuBuilder()
      .setCustomId('mode_select')
      .setPlaceholder('Select a game mode')
      .addOptions([
        {
          label: 'Rock Paper Scissors',
          value: 'rps',
        },
        {
          label: 'Tic-Tac-Toe',
          value: 'tictactoe',
        },
        {
          label: 'Wordle',
          value: 'wordle',
        },
      ]);

    const row = new MessageActionRow().addComponents(selectMenu);

    await message.channel.send({ content: 'Select a game mode:', components: [row] });
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  const selectedMode = interaction.values[0];
  let response;

  switch (selectedMode) {
    case 'rps':
      response = 'You selected Rock Paper Scissors.';
      break;
    case 'tictactoe':
      response = 'You selected Tic-Tac-Toe.';
      break;
    case 'wordle':
      response = 'You selected Wordle.';
      break;
    default:
      response = 'Invalid selection.';
  }

  await interaction.update({ content: response });
});

// Replace 'YOUR_TOKEN' with your actual bot token
client.login('token')


client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}create`)) {
    // Generate a random join code
    const joinCode = Math.random().toString(36).substring(7);
    const game = {
      joinCode: joinCode,
      creator: message.author,
    };
    games.set(joinCode, game);

    message.channel.send(`Game created! Use the join code: \`${joinCode}\``);
  }

  if (message.content.startsWith(`${prefix}join`)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const joinCode = args[1];

    if (games.has(joinCode)) {
      const game = games.get(joinCode);
      const playerName = message.author.username;
      game.players.push(playerName);
      message.channel.send(`${playerName} has joined the game created by ${game.creator.username}`);
    } else {
      message.channel.send('Invalid join code. Please check the code and try again.');
    }
  }
});


const { Client, GatewayIntentBits, MessageActionRow, ButtonStyle } = require('discord.js');
const botClient = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});


const activeGames = new Map(); // Store active games with join codes

botClient.once('ready', () => {
  console.log(`Logged in as ${botClient.user.tag}`);
});

botClient.on('messageCreate', async (message) => {
  if (message.content === `${commandPrefix}create`) {
    // Generate a random join code
    const joinCode = Math.random().toString(36).substring(7);
    const game = {
      joinCode: joinCode,
      creator: message.author,
      players: [], // Store players who join
    };
    activeGames.set(joinCode, game);

    const row = new MessageActionRow()
      .addComponents(
        {
          type: 'Start',
          style: ButtonStyle.PRIMARY,
          customId: 'start_game',
          label: 'Start Game',
        },
        {
          type: 'Join as player',
          style: ButtonStyle.SECONDARY,
          customId: 'join_player',
          label: 'Join as Player',
        },
        {
          type: 'Join as spectator',
          style: ButtonStyle.SECONDARY,
          customId: 'join_spectator',
          label: 'Join as Spectator',
        }
      );

    await message.channel.send({
      content: `Game created! Use the join code: \`${joinCode}\``,
      components: [row],
    });
  }
});

botClient.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  const joinCode = interaction.message.content.match(/`([^`]+)`/)[1];
  const game = activeGames.get(joinCode);

  if (!game) return;

  const playerName = interaction.user.username;

  if (interaction.customId === 'start_game') {
    if (game.players.length < 2) {
      interaction.reply('You need at least 2 players to start the game.');
    } else {
      // Start the game logic here
      interaction.reply(`Starting the game with players: ${game.players.join(', ')}`);
    }
  } else if (interaction.customId === 'join_player') {
    game.players.push(playerName);
    interaction.reply(`${playerName} joined as a player.`);
  } else if (interaction.customId === 'join_spectator') {
    // You can implement spectator logic here if needed
    interaction.reply(`${playerName} joined as a spectator.`);
  }
  botClient.on('interactionCreate', async (interaction) => {
    if (interaction.isButton()) {
      // ... Existing button handling code ...
  
    } else if (interaction.isSelectMenu()) {
      const joinCode = interaction.message.content.match(/`([^`]+)`/)[1];
      const game = activeGames.get(joinCode);
  
      if (!game) return;
  
      const selectedMode = interaction.values[0];
      game.selectedMode = selectedMode;
  
      interaction.reply(`You selected ${selectedMode}.`);
    }
  });
  
// Function to start the game based on the selected mode
function startGame(selectedMode, players, interaction) {
  // Implement game logic for each mode here
  if (selectedMode === 'rps') {
    // Rock Paper Scissors game logic
    // For example, you can send a message to play RPS 
    interaction.reply('Let\'s play Rock, Paper, Scissors!');
  } else if (selectedMode === 'tictactoe') {
    interaction.reply('Let\'s play Tic-Tac-Toe');
  } else if (selectedMode === 'Wordle') {
    // Implement Wordle game logic here
    interaction.reply('Let\'s play Wordle!');
  } else {
    interaction.reply('Sorry, that game mode is not supported.');
  }
}


// Replace 'YOUR_TOKEN' with your actual bot token
botClient.login('token');

console.log('Command sucessfully runned!')
// Bye this is the end of the code
} ) 

