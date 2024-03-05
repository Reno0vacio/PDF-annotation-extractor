const pdfParser = require('pdf-parse')
const fs = require('fs')
const http = require('http')
const formidable = require('formidable')

const port = 8080;
const app = fs.readFileSync('./index.html', 'utf-8')
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(app)
    res.end();
})
server.listen(port, function(err) {
    if (err) {
        res.writeHead(500)
        console.log('There is something wrong!')
    } else {
        console.log(`The server runs on the http://localhost:${port} addres. `)
    }
})
