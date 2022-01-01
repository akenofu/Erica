const { put, post, Axios } = require("axios");

module.exports = async (client) => {
  console.log(
    `Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`
  );

  const guilds = client.guilds.cache.map((guild) => {
    return {
      serverName: guild.name,
      serverID: guild.id,
    };
  });

  Promise.all(
    guilds.map((guild) => {
      return post(`${process.env.statisticsAPI}/api/v1/servers`, {
        server: guild,
      });
    })
  ).then(res => {})
  .catch(err => console.log)

  client.user.setActivity(client.config.app.playing);
};
