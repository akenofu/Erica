const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        let re = /\d{1,2}:\d{1,2}:\d{1,2}/;

        if (args.length > 1 || !re.test(args[0])) return message.channel.send('Wrong time format ❌.\nPlease enter the time in the following format ➤ hours:minutes:seconds')

        const timeArray = args[0].split(":");

        const timeToMS = ms(`${timeArray[0]}h`) + ms(`${timeArray[1]}m`) + ms(`${timeArray[0]}s`);

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`The indicated time is higher than the total time of the current song ${message.author}... try again ? ❌`);

        await queue.seek(timeToMS);

        message.channel.send(`Time set on the current song: **${timeArray[0]} hours, ${timeArray[1]} minutes and ${timeArray[2]} seconds.** ✅`);
    },
};