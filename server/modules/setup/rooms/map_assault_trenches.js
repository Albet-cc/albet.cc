let { wall: WALL, nestNoBoss:  n , normal:  _ , wall0: WAL0, wall2: WAL2} = require('../tiles/misc.js'),
	{ base2:  g , base1:  b , base1protected: bp } = require('../tiles/tdm.js'),

room = [
    [  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ],
    [  b ,  b , bp ,  b ,  b ,  b ,  b ,  b ,  b , bp ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b , bp ,  b ,  b ,  b ,  b ,  b ,  b , bp ,  b ,  b ],
    [  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WAL2,WAL0,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WAL2,WAL0,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,WALL,WAL0,WAL0,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,WAL0,WAL0,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,WAL2,WAL0,WALL,  _ ,  _ ,WALL,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,WALL,WALL,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,WAL0,WAL0,WALL,WALL,  _ ,  _ ,  _ ,WAL2,WAL0,  _ ,  _ ,WALL,  _ ,WALL,WALL,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,WAL2,WAL0,WALL,  _ ,WALL,  _ ,WAL0,WAL0,  _ ,  _ ,WALL,  n ,  n ,  n ,  _ ,  _ ,WALL,  _ ,  _ ,WALL,  _ ,WALL,  _ ,  _ ,WALL,  _ ],
    [  _ ,  _ ,  _ ,  _ ,WAL0,WAL0,  _ ,  _ ,WALL,  _ ,  _ ,WALL,  n ,  n ,WALL,WALL,  n ,  n ,WALL,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ],
    [  _ ,WAL2,WAL0,  _ ,WALL,WALL,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  n ,  n ,WALL,  n ,  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WAL0,WAL0,  _ ,  _ ,  _ ,WAL2,WAL0,WAL2,WAL0,  _ ,WALL,WALL,  _ ,WALL,  n ,WALL,WALL,  _ ,WALL,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,WALL,  _ ,  _ ],
    [  _ ,  _ ,WALL,WALL,WAL2,WAL0,WAL0,WAL0,WAL0,WAL0,  _ ,WALL,  _ ,  _ ,WALL,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,WALL,  _ ,  _ ],
    [  _ ,WALL,WALL,  _ ,WAL0,WAL0,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,  _ ,WALL,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,WALL,  _ ,WALL,  _ ,  _ ,WALL,  _ ,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ],
    [  _ ,WALL,  _ ,WALL,  _ ,WALL,  _ ,  n ,  n ,WALL,  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,WALL,WALL,  _ ,WALL,WALL,WAL2,WAL0,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,  _ ,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,WAL2,WAL0,WAL2,WAL0,WALL,  _ ,WAL0,WAL0,WAL2,WAL0],
    [  _ ,WALL,  _ ,WALL,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,WALL,  _ ,WALL,  n ,  _ ,  _ ,WALL,  _ ,WAL0,WAL0,WAL0,WAL0,  _ ,  _ ,  _ ,  _ ,WAL0,WAL0],
    [  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  n ,WALL],
    [  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WAL2,WAL0,WALL,  _ ,WALL,  _ ,  _ ,  n ,WALL,  n ,WAL2,WAL0,  n ,WALL,  _ ,WAL2,WAL0,  g ,WAL2,WAL0],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WAL0,WAL0,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WAL0,WAL0,WALL,WALL,WALL,WAL0,WAL0,WALL,WAL0,WAL0],

];

module.exports = room;