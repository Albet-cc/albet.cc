// Labyrinth generation
let generateLabyrinth = (size) => {
    const padding = 1;

    let maze = JSON.parse(JSON.stringify(Array(size).fill(Array(size).fill(true))));
    let bfsqx = [1];
    let bfsqy = [1];
    let intermediateQX = [1];
    let intermediateQY = [1];
    const offsets = [0, 1, 0, -1, 0];
    
    while (bfsqx.length) {
        // Delete walls where the search travels
        let currentX = bfsqx.shift();
        let currentY = bfsqy.shift();
        let intermediateX = intermediateQX.shift();
        let intermediateY = intermediateQY.shift();
        if (!maze[currentY][currentX]) continue;
        maze[currentY][currentX] = false;
        if (intermediateX && intermediateY) maze[intermediateX][intermediateY] = false;

        let options = [];
        for (let i = 0; i < 4; i++) {
            // Move between grid cells
            let newX = currentX + offsets[i] * 2;
            let newY = currentY + offsets[i+1] * 2;

            // Punch holes in the walls to reach the outer edge
            if (newX < 0 || newX >= size || newY < 0 || newY >= size) {
                if (ran.random(1) < 0.25) {
                    maze[currentY + offsets[i+1]][currentX + offsets[i]] = false;
                }
                continue;
            }
            if (!maze[newY][newX]) continue;
            options.push([newX, newY]);
        }

        if (!options.length) continue;

        // Pick where to go
        shuffledOptions = [];
        while (options.length) {
            let index = Math.floor(ran.random(options.length));
            shuffledOptions.push([...options[index]]);
            options.splice(index, 1);
        }

        // Save all options on where to go so we can come back to them later
        bfsqx.unshift(...shuffledOptions.map((x) => x[0]));
        bfsqy.unshift(...shuffledOptions.map((x) => x[1]));
        intermediateQX.unshift(...shuffledOptions.map((x) => (x[0] + currentX) / 2));
        intermediateQY.unshift(...shuffledOptions.map((x) => (x[1] + currentY) / 2));
    }

    // Make the maze more interconnected by randomly removing walls
    for (let x = 1; x < size; x += 2) {
        for (let y = 1; y < size; y += 2) {
            for (let i = 0; i < 4; i++) {
                let nextX = x + offsets[i];
                let nextY = y + offsets[i + 1];
                if (ran.random(1) < 0.9) continue;
                maze[nextY][nextX] = false;
            }
        }
    }

    // Punch holes in the maze
    const holeCenters = [
        [5, 5],
        [5, 25],
        [25, 5],
        [25, 25],
        [15, 15],
    ];
    const holeRadius = 2;
    for (let [centerX, centerY] of holeCenters) {
        for (let x = centerX - holeRadius; x <= centerX + holeRadius; x++) {
            for (let y = centerY - holeRadius; y <= centerY + holeRadius; y++) {
                maze[y][x] = false;
            }
        }
    }

    // Spawn the maze
    for (let x = padding; x < size + padding; x++) {
        for (let y = padding; y < size + padding; y++) {
            let spawnWall = false,
                d = {},
                scale = room.height / (size + 2 * padding);

            // Find spawn location and size
            for (let s = 5; s >= 1; s--) {
                if (maze[x-1][y-1] == s) {
                    d = {
                        x: (x * scale) + (scale * s / 2),
                        y: (y * scale) + (scale * s / 2),
                        s: scale * s,
                    };
                    spawnWall = true;
                    break
                }
            }
            if (spawnWall && room.getAt(d).data.allowMazeWallSpawn) {
                let o = new Entity({
                    x: d.x,
                    y: d.y
                });
                o.define("wall");
                o.SIZE = d.s * 0.5 / lazyRealSizes[4] * Math.SQRT2 - 2;
                o.team = TEAM_ENEMIES;
                o.protect();
                o.life();
                makeHitbox(o);
                walls.push(o);
            }
        }
    }
}

// Big 3Ds
Class.sphere.SIZE = 17;
Class.cube.SIZE = 22;
Class.tetrahedron.SIZE = 27;
Class.octahedron.SIZE = 28;
Class.dodecahedron.SIZE = 30;
Class.icosahedron.SIZE = 32;
Class.tesseract.SIZE = 39;

// Portal loop
class PortalLoop {
    constructor() {
        this.spawnInterval = 50000;
        this.initialized = false;
        this.spawnBuffer = 50;
        this.openBounds = {
            xMin: 19050,
            xMax: 25950,
            yMin: 1050,
            yMax: 7950,
        };
        this.labyrinthBounds = {
            xMin: 50,
            xMax: 8950,
            yMin: 50,
            yMax: 8950,
        };
        this.spawnBatches = [
            {
                bounds: this.labyrinthBounds,
                types: [
                    {
                        type: "spikyPortalOfficialV1",
                        destination: this.openBounds,
                        buffer: 1050,
                    }
                ]
            },
            {
                bounds: this.openBounds,
                types: [
                    {
                        type: "spikyPortalOfficialV1",
                        destination: this.labyrinthBounds,
                        buffer: 50,
                    }
                ]
            }
        ]
    }
    spawnCycle() {
        console.log('spawning')
        for (let batch of this.spawnBatches) {
            for (let portal of batch.types) {
                let spawnX = ran.irandomRange(batch.bounds.xMin, batch.bounds.xMax);
                let spawnY = ran.irandomRange(batch.bounds.yMin, batch.bounds.yMax);
                let entity = new Entity({x: spawnX, y: spawnY});
                entity.define(portal.type);
                entity.activation.set(true);
                entity.settings.diesAtRange = true; // Can't set this on define because then the portal dies immediately
                entity.on('collide', ({other}) => {
                    if (other.type != 'tank') return;
                    if ((other.x - entity.x) ** 2 + (other.y - entity.y) ** 2 > 225) return;
                    other.x = ran.irandomRange(portal.destination.xMin, portal.destination.xMax);
                    other.y = ran.irandomRange(portal.destination.yMin, portal.destination.yMax);
                    other.invuln = true;
                    
                    // Set new confinement
                    other.confinement.xMin = portal.destination.xMin - portal.buffer;
                    other.confinement.xMax = portal.destination.xMax + portal.buffer;
                    other.confinement.yMin = portal.destination.yMin - portal.buffer;
                    other.confinement.yMax = portal.destination.yMax + portal.buffer;
                });
            }
        }
    }
    spawnLoop() {
        if (global.arenaCosed) return;
        setTimeout(() => {
            this.spawnCycle();
            this.spawnLoop();
        }, this.spawnInterval);
    }
    init() {
        this.spawnCycle();
        this.spawnLoop();
    }
}

global.generateMaze = generateLabyrinth;
module.exports = { generateLabyrinth, PortalLoop };