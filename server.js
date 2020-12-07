const http = require('http');

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
    } else if ()


    else {
        res.writeHead(404);
        console.log('Status code: 404');
        res.end();
    }
}).listen(3000, function() {
    console.log('Listening for request on port 3000...')
});
