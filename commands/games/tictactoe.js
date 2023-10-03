import('discord.js'); require('discord.js'); const disbut = require('discord.js-buttons')(client);
import('discord.js-buttons'); 
const Discord = require('discord.js');

const token = 'token'
client.login(token)

let button = new disbut.MessageButton()  
.setStyle('red')
.setLabel('Leave')
.setID('attachmentButton')
.setDisabled(false)
// for .setID you can add any button id things like attachmentButton(number) or set it to primary 
// for .set disabled you can set to true this disables the button so that people cant intreact with it

let button2 = new disbut.MessageButton
.setStyle('blurple')
.setLabel('Challenge some one else')
.setID('attachmentButton2')
.setDisabled(false)

let button3 = new disbut.MessageButton
.setStyle('blurple')
.setLabel('left')
.setID('attachmentButton3')
.setDisabled(false) 

let button4 = new disbut.MessageButton
.setStyle('blurple')
.setLabel('right')
.setID('attachmentButton4')
.setDisabled(false) 

let button5 = new disbut.MessageButton

buttons: [
    button, button2, button3, button4
  ] 
  //Make sure if u want to put more buttons then you have to put the button variable in buttons: [ button, button2, button3, button4 ]
  // this will make it so that this is a unused variable otherwise its hard to debug (dunno why u want to debug but u can if uwant to)
