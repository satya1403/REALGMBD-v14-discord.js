import('discord.js'); require('discord.js'); 
const Discord = require('discord.js')
const djs = new Discord.Client();
const prefix = "/" 

const token = 'token';
client.login(token);

module.exports (
    data, new djs, prefix
 , client.setName ('join') 
 .setDescription ('will join a game requiring a game code..')
) 


if (message.content.startsWith(`${commandPrefix}join`)) {
    const args = message.content.slice(commandPrefix.length).trim().split(/ +/);
    const joinCode = args[1];

    {if (activeGames.has(joinCode)) {
      const game = activeGames.get(joinCode);
      const playerName = message.author.username;

      if (!game.players.includes(playerName)) {
       game.players.push(playerName);
        message.channel.send(`${playerName} has joined the game created by ${game.creator.username}`);
      } else {
       message.channel.send(`${playerName} is already in the game.`); 
      }
    } else {
      message.channel.send('Invalid join code. Please check the code and try again.');
    } 
  }
};

client.login(token)





