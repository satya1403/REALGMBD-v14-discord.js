import('discord.js'); const disbut = require('discord.js-buttons')(client);
const Discord = require('discord.js')
import('discord.js-buttons')

message.channel.send('This game mode is multiplayer!') 


let myembed = new discord.MessageEmbed()
.setLabel('User left')
  .setDescription('The user has left tic-tac-toe');

let btn = new disbut.MessageButton()
  .setStyle('red') //default: blurple
  .setLabel('Leave') //default: NO_LABEL_PROVIDED
  .setID('click_to_function') 
 
  .setDisabled(false); //disables the button | default: false 
  