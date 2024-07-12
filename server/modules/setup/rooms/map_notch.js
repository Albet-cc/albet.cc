let  { wall: WALL, nest:  n , normal:   _  } = require('../tiles/misc.js'),

room = [

    [  n ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  n ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  n ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  n ,  n ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,WALL,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  n ,  n ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,  n ,  _ ,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ],
    [  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,WALL,  _ ,  _ ,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ],
    [  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  n ,  n ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  n ,WALL,WALL,WALL,WALL,  _ ,  _ ,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  n ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ],
    [  _ ,WALL,  n ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ],
    [  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  n ]

];

module.exports = room;

