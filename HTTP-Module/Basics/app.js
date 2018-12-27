//Import HTTP Module
const http = require('http');
const fs = require('fs');

const filename = './page.html'

//Create a HTTP Server
const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
        return;
    }

    if (req.url === '/page.html') {   
        // Read the contents from file
        var data = fs.readFileSync(filename, 'utf-8');
        res.write(data);
        res.end();
        return;
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify(['Javascript', 'Node.js', 'Angular']));
        res.end();
        return;
    }

    console.log("Invalid URL: ", req.url);
    // Catch All unsupported. Return Page not found
    res.statusCode = 404;
    res.statusMessage = "The URL is invalid";
    res.end();
});

//Listen on port
server.listen(3000);
console.log("Listening on port 3000...");
