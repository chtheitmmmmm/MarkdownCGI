const fastcgi = require("node-fastcgi")
const http = require("http")
const path = require("path")
const fs = require("fs")
const mume = require("@shd101wyy/mume")


fastcgi.createServer(function (req, res) {
    console.log(path.join(__dirname, ".." + req.url))
    const engine = new mume.MarkdownEngine({
        filePath: path.join(__dirname, ".." + req.url)
    })
    engine.htmlExport({
        offline: false,
        runAllCodeChunks: true
    }).then(value => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(fs.readFileSync(value))
        fs.rmSync(value)
    }).catch(_ => {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.write("Service not available.")
    }).then(() => {
        res.end()
    })
}).listen(1314);

console.log("Server launch at 1314.")