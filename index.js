const tmi = require('tmi.js');
const os = require('os');
const si = require('systeminformation');
const humanize= require("humanize-duration");
const fetch = require('fs');


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

        /*if (message === "Monkeos") {
                if(tags['user-id'] === "555579413"){
                         return;
                } else {
                        client.say(channel, "Monkeos")
                }
        }*/

        if (message === "{players") {

        const getReddit = async () => {
                const response = await fetch('https://reddit.com/');
                const body = await response.text();
                console.log(body); // prints a chock full of HTML richness
                return body;
        };
        
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

                /*var temp = fs.readFileSync("/sys/class/thermal/thermal_zone0/temp");
                var temp_c = temp/1000;*/

                client.say(channel, `pong! FeelsDankMan Uptime: ${uptimetrue}; RAM usage: ${Math.floor(os.freemem() /** 0.000001*/)} B / ${Math.floor(os.totalmem() /** 0.000001*/ )} B;`);
                /*Temperature: ${temp_c}°C*/
        }
        
        /*const util = require('minecraft-server-util');

        const options = {
        timeout: 1000 * 5, // timeout in milliseconds
        enableSRV: true // SRV record lookup
        };

        // The port and options arguments are optional, the
        // port will default to 25565 and the options will
        // use the default options.
        util.status('play.hypixel.net', 25565, options)
        .then((result) => console.log(result))
        .catch((error) => console.error(error));*/

        
        
        

        

});


