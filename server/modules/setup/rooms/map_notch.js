let  { wall: WALL, nest:  n , normal:   _  } = require('../tiles/misc.js'),

room = [

    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,WALL,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,WALL,  _ ],
    [  _ ,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ],
    [  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,WALL,  _ ,  _ ,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ],
    [  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ,WALL,WALL,  _ ,WALL,WALL,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,WALL,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,WALL,  _ ,  _ ],
    [  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ]

];

module.exports = room;

