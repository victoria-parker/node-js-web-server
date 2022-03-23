const http=require('http');
const fs=require('fs');
const port=3000;

const server= http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html'})
    fs.readFile('index.html', function(err, data){
        if(err){
            res.writeHead(404, res.write('File not found'))
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log("something went wrong ", error)
    }else{
        console.log('Server is listening on port',port)
    }
})
