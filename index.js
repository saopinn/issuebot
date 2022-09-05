const tmi = require('tmi.js');
const config = require('./config.js');
const os = require('os');
const si = require('systeminformation');
const humanize= require("humanize-duration");


const client = new tmi.Client({
        options: { debug: true },
        identity: {
                username: BOT_NAME,
                password: TOKEN
        },
        channels: [ 'saopin_', 'fistissue', 'ilotterytea' ]
});

client.connect();
client.on('connected', (channel) => {
	client.say('fistissue', `peepoArrive`);
});

client.on('message', (channel, tags, message, self) => {
        
        // ignore

        if(self) return;
        if(tags['user-id'] === "555579413" && message === "GREDDYSS") return;
        if(tags['user-id'] === "555579413" && message === "Monkeos") return;

        if (tags['user-id'] === "555579413" && message === "monkaGIGAftSaj 🚨 НАЗАР АУДАРЫҢЫЗ!") {
		const emote = ['VisLaud', 'monkaS', 'lol', 'AREYOUAFISH', 'vdwxjeio4r5nro8wo4fcmmmMMmoq9fs83', 'ome', 'GREDDYSS', 'bruhSit', 'bruh'];
		const random = emote[Math.floor(Math.random() * emote.length)];
                client.say(channel, `${random} 🚨 `)
        }
        
        if (message === "GREDDYSS") {
                if(tags['user-id'] === "555579413"){
                         return;
                } else {
                        client.say(channel, "GREDDYSS")
                }
        }

        if (message === "Monkeos") {
                if(tags['user-id'] === "555579413"){
                         return;
                } else {
                        client.say(channel, "Monkeos у")
                }
        }

        if (message === "{ping") {
                function format(seconds){
                    function pad(s){
                      return (s < 10 ? '0' : '') + s;
                    }
                    var days = Math.floor(seconds / (3600*24));
                    var hours = Math.floor(seconds / (60*60));
                    var minutes = Math.floor(seconds % (60*60) / 60);
                    var seconds = Math.floor(seconds % 60);
                  
                    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
                }
                  
                const uptime = process.uptime();
                const uptimetrue = format(uptime);

                
                        
        
                client.say(channel, `pong! FeelsDankMan Uptime: ${uptimetrue}; RAM usage: ${Math.floor(os.freemem() /** 0.000001*/)} B / ${Math.floor(os.totalmem() /** 0.000001*/ )} B;`);
        }

});

