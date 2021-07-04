const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Tah home page ma aais")
    }
    if(req.url === "/about"){
        res.end("Tah about page ma aais")
    }
    res.end(`<h1>Oops!</h1>`)
})

server.listen(5000)