const fs = require('fs');
const https = require('https');

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const CHANNEL_ID = '1520460505196662836';
const USER_ID = '902097486820466728';

if (!TOKEN) {
  console.error('No DISCORD_BOT_TOKEN provided.');
  process.exit(1);
}

function fetchJson(path) {
  return new Promise((resolve, reject) => {
    https.get({
      hostname: 'discord.com',
      port: 443,
      path: path,
      headers: {
        'Authorization': `Bot ${TOKEN}`,
        'User-Agent': 'DiscordBot (https://syncink.net, 1.0.0)'
      }
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  try {
    if (!fs.existsSync('./data')) fs.mkdirSync('./data');

    // 1. Get the Guild ID
    const channel = await fetchJson(`/api/v10/channels/${CHANNEL_ID}`);
    const guild_id = channel.guild_id;
    if (!guild_id) throw new Error("Could not find guild_id for channel");

    // 2. Fetch User's Server Profile
    const member = await fetchJson(`/api/v10/guilds/${guild_id}/members/${USER_ID}`);
    const profileData = {
      guild_id: guild_id,
      user_id: USER_ID,
      global_avatar: member.user ? member.user.avatar : null,
      server_avatar: member.avatar || null
    };
    fs.writeFileSync('./data/profile.json', JSON.stringify(profileData, null, 2));

    // 3. Fetch Announcements
    const messages = await fetchJson(`/api/v10/channels/${CHANNEL_ID}/messages?limit=25`);
    const announcements = messages
      .filter(msg => (msg.content && msg.content.trim().length > 0) || (msg.embeds && msg.embeds.length > 0))
      .map(msg => {
        let author_avatar = msg.author.avatar;
        let is_server_avatar = false;
        
        if (msg.member && msg.member.avatar) {
          author_avatar = msg.member.avatar;
          is_server_avatar = true;
        }
        
        return {
          id: msg.id,
          content: msg.content,
          timestamp: msg.timestamp,
          author: msg.author.username,
          author_id: msg.author.id,
          author_avatar: author_avatar,
          is_server_avatar: is_server_avatar,
          guild_id: guild_id,
          embeds: msg.embeds,
          attachments: msg.attachments
        };
      });

    fs.writeFileSync('./data/announcements.json', JSON.stringify(announcements, null, 2));
    console.log('Fully synced announcements and server profile successfully.');
  } catch(e) {
    console.error('Error fetching discord data:', e);
    process.exit(1);
  }
}

run();
