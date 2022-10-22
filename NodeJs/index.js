// create a node server

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', "index.html"), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //         res.end(data);
    //     });
    // }
    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', "about.html"), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //         res.end(data);
    //     });
    // }

    let fileUrl = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    let contentType = 'text/html';

    let ext = path.extname(fileUrl);
    if (!ext) {
        fileUrl += '.html';
    }

    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'application/javascript';
        default:
            contentType = 'text/html';
    }

    fs.readFile(fileUrl, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', "error.html"), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end(err);
                } else {
                    res.writeHead(404, {
                        'Content-Type': contentType
                    });
                    res.end(data);
                }
            });
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            });
            res.end(content);
        }
    });


});

const PORT = process.env.PORT || 3000;
server.listen(3000, () => {
    console.log('listening on port ' + PORT);

});
