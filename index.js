const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("./index.html", "utf-8");
const Port = 2000;
const hostname = "localhost";
const server = http.createServer((req, res) => {
    if (req.url == "/") { 
       return  res.end(home);
    }
    if (req.url == '/about') {
        return res.end("<h1>About Page</h1>");
    }
    if(req.url=='/contact'){ 
        return res.end("<h1>Contact Page</h1>");
    }
    if(req.url=='/service'){ 
        return res.end("<h1>SERVICE Page</h1>");
    }
    else {
        return res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(2000, hostname, () => {
    console.log(`Server is running on http://${hostname}:${Port})`);
});

