const http = require('http')
const path = require('path')
const server = http.createServer((req,res)=>{
    if(req.url === '/about' ){
        res.end("about me dude!!!")
    }else if(req.url === '/' ){
        res.end(`<h1>Welcome to home page dude!!!</h1>`)
    }
    else res.end(`<h1>Where are you going dude!!!</h1>`)
})

server.listen(4000)