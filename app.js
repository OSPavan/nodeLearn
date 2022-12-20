const http = require('http')

const server = http.createServer()

// no need of call back function
// can use on method of events
// subscribe to it
server.on('request',(req,res)=>{
    res.end("welcome to node")
})
server.listen('4000')