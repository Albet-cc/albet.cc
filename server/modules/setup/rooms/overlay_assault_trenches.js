let { dominatorGreen, sanctuaryGreen } = require('../tiles/assault.js'),
    room = Array(Config.roomHeight).fill(() => Array(Config.roomWidth).fill()).map(x => x());

room[Math.floor(Config.roomHeight / 2)][Math.floor(Config.roomWidth / 4)] = 
room[Math.floor(Config.roomHeight / 4)][Math.floor(Config.roomWidth / 2)] = 
room[Math.floor(3 * Config.roomHeight / 4)][Math.floor(Config.roomWidth / 2)] = 
room[Math.floor(Config.roomHeight / 2)][Math.floor(3 * Config.roomWidth / 4)] =
dominatorGreen; 
room[Math.floor(Config.roomHeight / 1.12195121951)][Math.floor(Config.roomWidth / 1.09090909)] = sanctuaryGreen;


module.exports = room;