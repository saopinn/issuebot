const tmi = require('tmi.js');
const config = require('./config.js');
const os = require('os');

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
        
        // Ignore echoed messages.
        if(self) return;

        //------------------------------------------------------------------------

        if(tags['user-id'] === "555579413" && message === "GREDDYSS") return;

        if (tags['user-id'] === "555579413" && message === "monkaGIGAftSaj 🚨 НАЗАР АУДАРЫҢЫЗ!") {
		const emote = ['VisLaud', 'monkaS', 'lol', 'AREYOUAFISH', 'vdwxjeio4r5nro8wo4fcmmmMMmoq9fs83', 'ome', 'GREDDYSS', 'bruhSit', 'bruh'];
		const random = emote[Math.floor(Math.random() * emote.length)];
                client.say(channel, `${random} 🚨`)
        }
        
        //------------------------------------------------------------------------


        if (message === "GREDDYSS") {
                if(tags['user-id'] === "555579413"){
                         return;
                } else {
                        client.say(channel, "GREDDYSS")
                }
        }

        //------------------------------------------------------------------------

        if (message === "{ping") {
        
                //----------------------------------
        
                function format(seconds){
                    function pad(s){
                      return (s < 10 ? '0' : '') + s;
                    }
                    var days = Math.floor(seconds / (3600*24));
                    var hours = Math.floor(seconds / (60*60));
                    var minutes = Math.floor(seconds % (60*60) / 60);
                    var seconds = Math.floor(seconds % 60);
                  
                    return pad(days) + ' days ' + pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
                }
                  
                const uptime = process.uptime();
                const uptimetrue = format(uptime);
        
                //----------------------------------
        
                // const totalRAM = os.totalmem();
                // const totalram = totalRAM /s (1024 * 1024) * 0.001;
                // console.log(totalram);
        
                const freeRAM = os.freemem();
                const ramfree = freeRAM / (1024 * 1024) * 0.001;
        
                //----------------------------------
                
                //open it on rpi when it will be on rpi FeelsDankMan
                
                /*var spawn = require('child_process').spawn;
        
                temp = spawn('cat', ['/sys/class/thermal/thermal_zone1/temp']);
        
                temp.stdout.on('data', function(data) {*/
        
                // add ${temp} to temperature
        
                //----------------------------------
        
                client.say('fistissue', `pong! FeelsDankMan Running Issuebot v0.1; Uptime: ${uptimetrue}; RAM usage: ${ramfree.toFixed(2)} GB; Temperature: placeholder;`);
                
            }

});

