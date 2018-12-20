client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'moments-📖');
 
  if (!channel) return;

  channel.send(`**.# Welcome To  Moments | Server, , :black_heart::crown:**, ${member}`);
});
