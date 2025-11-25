const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello from Server")
})
server.listen(8000, "127.0.0.1", () => {
    console.log("Server Started")
})
