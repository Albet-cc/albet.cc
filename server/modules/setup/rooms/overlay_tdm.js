let bases = require('../tiles/tdm.js'),
	teams = require('../gamemodeconfigs/tdm.js').TEAMS,
	room = Array(Config.roomHeight).fill(() => Array(Config.roomWidth).fill()).map(x => x()),
locations = [
	[
		[[ 0,  0], [ 1,  0], [ 0,  1]],
		[[ 1,  1]]
	],[
		[
			[Config.roomHeight - 1, Config.roomWidth - 1], 
			[Config.roomHeight - 2, Config.roomWidth - 1], 
			[Config.roomHeight - 1, Config.roomWidth - 2]
		],
		[[Config.roomHeight - 2, Config.roomWidth - 2]]
	],[
		[
			[ 0, Config.roomWidth - 1], 
			[ 1, Config.roomWidth - 1], 
			[ 0, Config.roomWidth - 2]
		],
		[[ 1, Config.roomWidth - 2]]
	],[
		[
			[Config.roomHeight - 1,  0], 
			[Config.roomHeight - 1,  1], 
			[Config.roomHeight - 2,  0]
		],
		[[Config.roomHeight - 2,  1]]
	],[
		[
			[0,  Math.floor(Config.roomWidth / 2) - 1], 
			[1,  Math.floor(Config.roomWidth / 2)], 
			[0,  Math.floor(Config.roomWidth / 2) + 1]
		],
		[[0,  Math.floor(Config.roomWidth / 2)]]
	],[
		[
			[Math.floor(Config.roomHeight / 2) - 1,  Config.roomWidth - 1], 
			[Math.floor(Config.roomHeight / 2),  	 Config.roomWidth - 2], 
			[Math.floor(Config.roomHeight / 2) + 1,  Config.roomWidth - 1]
		],
		[[Math.floor(Config.roomHeight / 2),  Config.roomWidth - 1]]
	],[
		[
			[Config.roomHeight - 1,  Math.floor(Config.roomWidth / 2) - 1], 
			[Config.roomHeight - 2,  Math.floor(Config.roomWidth / 2)], 
			[Config.roomHeight - 1,  Math.floor(Config.roomWidth / 2) + 1]
		],
		[[Config.roomHeight - 1,  Math.floor(Config.roomWidth / 2)]]
	],[
		[
			[Math.floor(Config.roomHeight / 2) - 1,  0], 
			[Math.floor(Config.roomHeight / 2),  	 1], 
			[Math.floor(Config.roomHeight / 2) + 1,  0]
		],
		[[Math.floor(Config.roomHeight / 2),  0]]
	]
];

if (teams === 2) {
	let baseprotGap = Math.ceil((Config.roomHeight - 1) / 6);
	for (let y = 0; y < Config.roomHeight; y++) {
		room[y][0] = bases.base1;
		room[y][Config.roomWidth - 1] = bases.base2;
	}
	for (let i = -2; i <= 2; i++) {
		let y = Math.floor(Config.roomHeight / 2 - baseprotGap * i);
		room[y][0] = bases.base1protected;
		room[y][Config.roomWidth - 1] = bases.base2protected;
	}
} else {
	for (let i = 1; i <= teams; i++) {
		let [ spawns, protectors ] = locations[i - 1];
		for (let [y, x] of spawns) room[y][x] = bases[`base${i}`];
		for (let [y, x] of protectors) room[y][x] = bases[`base${i}protected`];
	}
}

module.exports = room;
