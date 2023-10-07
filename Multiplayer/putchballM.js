const { Message } = require('discord.js');

import('discord.js') 
const Discord = new DiscordClient(); 
const disbut = require ('discord.js-buttons')(client);

djs.on('message', (message) => {
{
message.channel.send("You have selected multiplayer!")
setTimeout(function() {
    message.channel.send('And rhe gamemode selected is putchball')
}, 5000); // 5000 milliseconds = 5 seconds

}
})  

let button = new disbut.MessageButton 
.setStyle('red') 
.setLabel('button') 
.setID('PRIMARY') 
.setDisabled(false);

let button2 = new disbut.MessageButton
.setStyle('green') 
.setLabel('left') 
.setURL('example.com')  
.setDisabled(false);




buttons: [ 
    button, button2
]