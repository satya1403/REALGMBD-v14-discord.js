import('discord.js'); 
const { SlashCommandBuilder, Client } = require('discord.js');
module.exports (
    data, new  SlashCommandBuilder, new Client
   ,  Client.SetName ('feedback')
   .setDescription ('Will give feedback! Thanks for giving!')
   ) 

   const { Client, Intents } = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '/';
const token = 'BOT_TOKEN'
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'feedback') {
    const feedbackButton = new MessageButton()
      .setCustomId('feedback_button')
      .setLabel('Give Feedback')
      .setStyle('blurple');

    const row = new MessageActionRow().addComponents(feedbackButton);

    const initialMessage = await message.reply({
      content: 'Click the button below to provide feedback:',
      components: [row],
    });

    const filter = (interaction) => interaction.customId === 'feedback_button';
    const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

    collector.on('collect', async (interaction) => {
      await interaction.reply('Please enter your feedback:');
      const responseCollector = message.channel.createMessageCollector({ filter: (m) => !m.author.bot });

      responseCollector.on('collect', async (feedbackMessage) => {
        message.channel.send('vector seem')
        const feedbackContent = feedbackMessage.content;
        const feedbackEmbed = {
          title: 'New Feedback',
          description: feedbackContent,
          timestamp: new Date(),
        };
        const feedbackChannel = client.channels.cache.get(' channel id');  
        feedbackChannel.send({ embeds: [feedbackEmbed] });

        await feedbackMessage.reply('Feedback successfully submitted!');
        responseCollector.stop();
        collector.stop();
      });

      responseCollector.on('end', () => {
        initialMessage.edit({
          content: 'Feedback time has expired.',
          components: [],
        });
      });
    });
  }
});


client.login(token)
console.log('Sucessfully logged into') + client.user.tag
