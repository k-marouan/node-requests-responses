// server.js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { // req : request object | res: response: object
    // console.log(req); // huge object
    // console.log(req.url); // /about
    // console.log(req.method); // GET

    // Set header content type
    // res.setHeader('Content-Type', 'text/plain'); // send text
    // res.setHeader('Content-Type', 'text/html'); // send html
    // res.write('hello, marouan!');
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello, marouan!</p>');
    // res.write('<p>hello again, marouan!</p>');
    // res.end();

    // Set header content type
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data); 
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});