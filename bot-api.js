// ==========================================
// SYNCINK BOT STATUS API
// ==========================================
// This is the backend server that feeds real-time data to your status.html page.
// 
// 1. Install packages: npm install express cors
// 2. Run this on your server: node bot-api.js
// 3. Update the API_URL in your status.html to point to this server's IP (e.g. http://123.45.67.89:3000/api/status)

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allows your github pages site to fetch this data!

// You can dynamically update this object from your discord.js bots!
// For example, when your bot starts, set \otStats.main.ping = client.ws.ping\
const botStats = {
    main: { status: "ONLINE", ping: 42 },
    radio: { status: "ONLINE", ping: 65 },
    ticket: { status: "ONLINE", ping: 32 },
    voice: { status: "ONLINE", ping: 48 }
};

app.get('/api/status', (req, res) => {
    res.json(botStats);
});

app.listen(3000, () => {
    console.log("Status API listening on port 3000");
});
