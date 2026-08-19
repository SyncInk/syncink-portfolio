// ==========================================
// SYNCINK LANYARD KV SYNC (Node.js)
// ==========================================
// 1. Install node-fetch if you don't have it (or use built-in fetch in Node 18+)
// 2. Put this code in your discord.js bots!

const LANYARD_API_KEY = "lnyd_108974c8403b5e39910bd6d24eb7eb4d";
const LANYARD_USER_ID = "930306512864280607";

// Update this object with your actual live pings from your discord bots
let botPings = {
    "main": 42,
    "security": 25,
    "radio": 65,
    "ticket": 32,
    "voice": 48,
    "last_update": Date.now()
};

async function syncToLanyard() {
    botPings.last_update = Date.now();
    try {
        const response = await fetch(\https://api.lanyard.rest/v1/users/\/kv/bot_pings\, {
            method: 'PUT',
            headers: {
                'Authorization': LANYARD_API_KEY,
                'Content-Type': 'text/plain' // Lanyard KV accepts strings
            },
            body: JSON.stringify(botPings)
        });
        
        if (response.ok) {
            console.log("Successfully synced pings to Lanyard!");
        } else {
            console.error("Failed to sync:", response.statusText);
        }
    } catch (e) {
        console.error("Error syncing to Lanyard:", e);
    }
}

// Run this every 15 seconds to keep the dashboard live!
setInterval(() => {
    // Example: update the ticket ping if you are in the ticket bot
    // botPings.ticket = client.ws.ping;
    syncToLanyard();
}, 15000);
