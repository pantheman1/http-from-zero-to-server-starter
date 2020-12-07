const http = require('http');
console.log('hi');

http.createServer(function(req, res) {
    if (req.url === '/OK') {
        console.log('Inbound "OK" request being processed...')
        res.writeHead(200);
        res.end();
    } else if (req.url === '/Bad-Request') {
        console.log('This is a bad request. Error 400.');
        res.writeHead(400);
        res.end();
    } else if (req.url === '/Created') {
        console.log('Request has been successfully created');
        res.writeHead(201);
        res.end();
    } else if (req.url === '/Forbidden') {
        console.log('Request is forbidden. Error 403.')
        res.writeHead(403)
        res.end();
    } else if (req.url === '/Found') {
        console.log('Request redirected. 302 Found.');
        res.writeHead(302);
        res.end();
    } else if (req.url === '/Gateway-Timeout') {
        console.log('Server error. 504 Gateway-Timeout');
        res.writeHead(504);
        res.end();
    } else if (req.url === '/Internal-Server-Error') {
        console.log('Server error. 500 Internal-Server-Error');
        res.writeHead(500);
        res.end();
    } else if (req.url === '/Moved-Permanently') {
        console.log('Request redirected. 301 Moved-Permanently');
        res.writeHead(301);
        res.end();
    } else if (req.url === '/Unauthorized') {
        console.log('Request unauthorized')
        res.writeHead(401);
        res.end();
    } else {
        res.writeHead(404);
        console.log('Status code: 404');
        res.end();
    }
}).listen(3000, function() {
    console.log('Listening for request on port 3000...')
});
