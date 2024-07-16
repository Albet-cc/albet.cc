let { dominatorGreen, sanctuaryGreen } = require('../tiles/assault.js'),
    room = Array(Config.roomHeight).fill(() => Array(Config.roomWidth).fill()).map(x => x());

room[Math.floor(Config.roomHeight / 2.3)][Math.floor(Config.roomWidth / 2.3076923076923076923076923076923)] = 
room[Math.floor(Config.roomHeight / 1.4375)][Math.floor(Config.roomWidth / 4.2857142857142857142857142857143)] = 
room[Math.floor(Config.roomHeight / 1.15)][Math.floor(Config.roomWidth / 1.7647058823529411764705882352941)] = 
room[Math.floor(Config.roomHeight / 1.6428571428571428571428571428571)][Math.floor(Config.roomWidth / 1.3043478260869565217391304347826)] =
dominatorGreen; 
room[Math.floor(Config.roomHeight / 1.15)][Math.floor(Config.roomWidth / 1.111111)] = sanctuaryGreen;


module.exports = room;