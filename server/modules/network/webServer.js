let fs = require('fs'),
    path = require('path'),
    publicRoot = path.join(__dirname, "../../../public"),
    sharedRoot = path.join(__dirname, "../../../shared"),
    mimeSet = {
        "js": "application/javascript",
        "json": "application/json",
        "css": "text/css",
        "html": "text/html",
        "md": "text/markdown",
        "png": "image/png",
        "ico": "image/x-icon"
    },
    wsServer;

try {
    wsServer = new (require('../../lib/ws/index.js').WebSocketServer)({ noServer: true });
} catch (err) {
    wsServer = new (require('ws').WebSocketServer)({ noServer: true });
}

console.log("Web Server initialized.");
if (Config.host === 'localhost') {
    util.warn(`[WEB SERVER] config.host is just "localhost", are you sure you don't mean "localhost:${Config.port}"?`);
}
if (Config.host.match(/localhost:(\d)/) && Config.host !== 'localhost:' + Config.port) {
    util.warn('[WEB SERVER] config.host is a localhost domain but its port is different to config.port!');
}

server = require('http').createServer((req, res) => {

    //Enable CORS for *.dakarr.cc domains.
    console.log(req.getHeaderNames().join(', '));
    // let origin = req.getHeader('origin');
    // console.log(origin);
    // if (['us.dakarr.cc', 'eu.dakarr.cc', 'dakarr.cc'].includes(origin)) {
    //     res.setHeader('Access-Control-Allow-Origin', origin);
    //     if (req.method === 'OPTIONS') {
    //         res.writeHead(200);
    //         return res.end();
    //     }
    // }

    let resStr = "";
    if (req.url.startsWith('/shared/')) {
        let fileToGet = path.join(sharedRoot, req.url.slice(7));

        //if this file does not exist, return the default;
        if (!fs.existsSync(fileToGet)) {
            fileToGet = path.join(sharedRoot, Config.DEFAULT_FILE);
        } else if (!fs.lstatSync(fileToGet).isFile()) {
            fileToGet = path.join(sharedRoot, Config.DEFAULT_FILE);
        }

        //return the file
        res.writeHead(200, { 'Content-Type': mimeSet[ fileToGet.split('.').pop() ] || 'text/html' });
        return fs.createReadStream(fileToGet).pipe(res);
    } else switch (req.url) {
        case "/lib/json/mockups.json":
            resStr = mockupJsonData;
            break;
        case "/lib/json/gamemodeData.json":
            resStr = JSON.stringify({ gameMode: Config.gameModeName, players: sockets.players.length });
            break;
        case "/serverData.json":
            resStr = JSON.stringify({ ip: Config.host });
            break;
        default:
            let fileToGet = path.join(publicRoot, req.url);

            //if this file does not exist, return the default;
            if (!fs.existsSync(fileToGet)) {
                fileToGet = path.join(publicRoot, Config.DEFAULT_FILE);
            } else if (!fs.lstatSync(fileToGet).isFile()) {
                fileToGet = path.join(publicRoot, Config.DEFAULT_FILE);
            }

            //return the file
            res.writeHead(200, { 'Content-Type': mimeSet[ fileToGet.split('.').pop() ] || 'text/html' });
            return fs.createReadStream(fileToGet).pipe(res);
    }
    res.writeHead(200);
    res.end(resStr);
});
server.on('upgrade', (req, socket, head) => wsServer.handleUpgrade(req, socket, head, ws => sockets.connect(ws, req)));
server.listen(Config.port, () => console.log("[WEB SERVER] Server listening on port", Config.port));
module.exports = { server };