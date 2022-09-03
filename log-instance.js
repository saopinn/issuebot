const tmi = require('tmi.js');
const config = require('./config.js');
const os = require('os');

const client = new tmi.Client({
        options: { debug: true },
        identity: {
                username: BOT_NAME,
                password: TOKEN
        },
        channels: [ 'saopin_', 'fistissue' ]
});

client.connect();
client.on('connected', (channel) => {
	client.say('fistissue', `peepoArrive 2`);
});

client.on("ban", (channel, username, reason, userstate) => {
    client.say('fistissue', `${channel} : LOGGING @${username} got permabanned`);
});
             
client.on("timeout", (channel, username, reason, duration, userstate) => {
    client.say('fistissue', `${channel} : LOGGING @${username} got timed out for ${duration}s`);
});


client.on('message', (channel, tags, message, self) => {
   
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

        client.say(channel, `pong! FeelsDankMan Running Issuebot v0.1; Uptime: ${uptimetrue}; RAM usage: ${Math.floor(os.freemem() /** 0.000001*/)} MB / ${Math.floor(os.totalmem() * 0.000001 )} MB; Temp. : ${si.cpuTemperature()}`);
        
}
});


// округление .toFixed(2)