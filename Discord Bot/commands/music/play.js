const { QueryType } = require('discord-player');
const { post, Axios } = require('axios')

const apiEndPoint = 'http://localhost:8000/endpt';

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author}... try again ? ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`No results found ${message.author}... try again ? ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`I can't join the voice channel ${message.author}... try again ? ❌`);
        }

        await message.channel.send(`Loading your ${res.playlist ? 'playlist' : 'track'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);


        if (!queue.playing) await queue.play();
    
        try{
            await post(apiEndPoint, {
                "songRequest": {
                    "id": message.guild.id,
                    "serverName": message.guild.name,
                    "songName": res.tracks[0].title,
                    "requestingUserName": message.author.username,
                    "timestamp": Date(Date.now()),
                    "channelName": message.channel.name
                }
            });
            }
    
            catch(exception){
                // TODO FIX
                console.log(exception);
            }

    },
};