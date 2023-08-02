import http from 'http';

const server = http.createServer((request,response)=>{
    console.log('connection connected')
    response.writeHead(200, {'Content-type':"text/html"})
    response.end('<h1>WELCOME ON SERVER SIDE !<h1>')
});

server.listen(3000,()=>{
    console.log('server connected')
})

         
