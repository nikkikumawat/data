import http from "http";

let names = ['nikki', 'gefdf', 'cxvcx', 'dsf']

const server = http.createServer((request, response) => {

    if (request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(names))
    }

    else if (request.method === "POST") {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        request.on("data", (data) => {
            const datastring = data.toString()
            if (datastring.includes(',')) {        
                const newdata = datastring.split(',')
                names.push(...newdata)
            }
            else {
                names.push(datastring)
            }

        })
        request.on("end",()=>{
            response.end(JSON.stringify(names))
        })
    }

    else if (request.method === "PUT") {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        request.on('data', (data) => {
            const datastring = data.toString()
            let idFromURL = Number(request.url.split("/")[1])
            names[idFromURL] = 
            if (datastring.include(',')) {        
                const newdata = datastring.split(',')
                names.splice(0, names.length, ...newdata)
            }
            else {
                names.splice(0, names.length, datastring)
            }
            response.end(JSON.stringify(names))
        })
        
            
        request.on("end",()=>{
            request.end(JSON.stringify(names))
        })
    }
})
server.listen(3000, () => {
    console.log('server has connected')
})


