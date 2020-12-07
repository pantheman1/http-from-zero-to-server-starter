const http = require('http');

http.createServer(function(req, res) {
    if (req.url === '/OK') {
        console.log('Inbound "OK" request being processed...')
        res.writeHead(200);
        res.end();
    }
}).listen(3000, function() {
    console.log('Listening for request on port 3000...')
})