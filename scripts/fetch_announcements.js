const fs = require('fs');
const https = require('https');

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const CHANNEL_ID = '1520460544811859968';

if (!TOKEN) {
  console.error('No DISCORD_BOT_TOKEN provided.');
  process.exit(1);
}

const options = {
  hostname: 'discord.com',
  port: 443,
  path: `/api/v10/channels/${CHANNEL_ID}/messages?limit=25`,
  method: 'GET',
  headers: {
    'Authorization': `Bot ${TOKEN}`,
    'User-Agent': 'DiscordBot (https://syncink.net, 1.0.0)'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error('Failed to fetch messages:', data);
      process.exit(1);
    }
    const messages = JSON.parse(data);
    
    // We only care about user messages or bot messages that are actual announcements
    const announcements = messages
      .map(msg => ({
        id: msg.id,
        content: msg.content,
        timestamp: msg.timestamp,
        author: msg.author.username,
        author_id: msg.author.id,
        author_avatar: msg.author.avatar,
        embeds: msg.embeds,
        attachments: msg.attachments
      }))
      .filter(msg => (msg.content && msg.content.trim().length > 0) || (msg.embeds && msg.embeds.length > 0));

    if (!fs.existsSync('./data')) {
      fs.mkdirSync('./data');
    }
    fs.writeFileSync('./data/announcements.json', JSON.stringify(announcements, null, 2));
    console.log('Announcements saved successfully.');
  });
});

req.on('error', (e) => {
  console.error('Error fetching discord messages:', e);
  process.exit(1);
});
req.end();
