var http = require("http")

http.createServer((request, response) => {
    response.writeHead(200, {"content-type": "text/plain"})

    response.end("Hello Node!!!!")

}).listen(3000)


console.log("server running on port 3000")