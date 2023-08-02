import http from 'http';

const server = http.createServer((request, response) => {
    console.log('connection connected')
    response.writeHead(200, { "Content-type": "text/html" })
   // response.end('<h1>Welcome on server</h1>')

    if (request.method === 'POST') {
        let body = '';
        request.on('data', (data) => {
            body += data.toString();
            response.end(body);
            console.log(body)
        })
    }

})



server.listen(3000, () => {
    console.log('server has connected')
})