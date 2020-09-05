const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'Online').size}\` Hoes Invited `); 
 message.delete(); 
};     
});

client.on('ready',()=>{
    console.log(' Bot ready to use!');
    let statuses = [
        "Join for E-Girls & Nitro!",        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"STREAMING"})
    
        }, 3000) //Seconds to Random



});

client.login("NzM4MzExNDUxODAyMDc1MTc3.XyKEHw.Q4nHYqp2vHsFhiGvgKaenAIN_q4")