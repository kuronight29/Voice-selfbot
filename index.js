const { Client } = require('discord.js-selfbot-v13');
const { token } = require('./config.json');
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Client(); 

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  client.channels.fetch("935924655951347712") 
    .then((channel) => { 
        const VoiceConnection = joinVoiceChannel({
            channelId: "935924655951347712", 
            guildId: "755793441287438469", 
            adapterCreator: channel.guild.voiceAdapterCreator,
            selfDeaf: false
        });
    });
})

client.login(token);
