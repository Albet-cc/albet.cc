let bossRush;
if (Config.SPECIAL_BOSS_SPAWNS) bossRush = new BossRush();
let train;
if (Config.TRAIN) train = new Train();
let moon;
if (Config.SPACE_MODE) moon = new Moon();
let hunt;
if (Config.HUNT) hunt = new ManHunt();
let portalLoop;
if (Config.PORTAL_SPAWNS) portalLoop = new PortalLoop();

if (Config.MOTHERSHIP_LOOP) mothershipLoop.spawn();
if (Config.SPECIAL_BOSS_SPAWNS) bossRush.init();
if (Config.PORTAL_SPAWNS) portalLoop.init();
if (Config.MAZE > 0) generateMaze(Config.MAZE);

let logger = new LagLogger();
const gamemodeLoop = function() {
    logger.set();
    if (Config.HUNT) hunt.loop();
    if (Config.TRAIN) train.loop();
    if (Config.SPACE_MODE) moon.loop();
    if (Config.MOTHERSHIP_LOOP) mothershipLoop.loop();
    if (Config.SPECIAL_BOSS_SPAWNS) bossRush.loop();
    logger.mark();
    if (logger.totalTime > 100) {
        console.log("Gamemode loop is taking a long time!");
        console.log(`Gamemode loop took ${logger.totalTime}ms to complete!`);
        console.log(`Gamemode loop log history: (Last ${logger.sum.length} entries)`);
        console.log(logger.sum.map(entry => `Run at: ${entry.at}. Time: ${entry.time}.`).join("\n"));
    }
};

module.exports = { gamemodeLoop };