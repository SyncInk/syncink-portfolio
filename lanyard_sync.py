# ==========================================
# SYNCINK LANYARD KV SYNC (Python)
# ==========================================
# 1. Install requests: pip install requests
# 2. Put this code in your discord.py bots!

import requests
import time
import json
import threading

LANYARD_API_KEY = "lnyd_108974c8403b5e39910bd6d24eb7eb4d"
LANYARD_USER_ID = "930306512864280607"

bot_pings = {
    "main": 42,
    "security": 25,
    "radio": 65,
    "ticket": 32,
    "voice": 48
}

def sync_to_lanyard():
    while True:
        bot_pings["last_update"] = int(time.time() * 1000)
        try:
            url = f"https://api.lanyard.rest/v1/users/{LANYARD_USER_ID}/kv/bot_pings"
            headers = {
                "Authorization": LANYARD_API_KEY,
                "Content-Type": "text/plain"
            }
            # Lanyard KV takes a string payload
            requests.put(url, headers=headers, data=json.dumps(bot_pings))
            print("Successfully synced pings to Lanyard!")
        except Exception as e:
            print("Error syncing to Lanyard:", e)
        
        time.sleep(15) # Sync every 15 seconds

# To run this in the background in your bot:
# threading.Thread(target=sync_to_lanyard, daemon=True).start()
