fetch('https://discord.com/app').then(r=>r.text()).then(t=>console.log(t.match(/href="\/assets\/[^"]+\.css"/g)))
