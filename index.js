const http = require('http');

const app = http.createServer((req, res)=>{
    const url = req.url;
    if(url === "/"){
        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        res.write('<h1 align="center">This is home page</h1>');
    }
    else if(url === "/about"){
        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        res.write('<h1 align="center">This is about page</h1>');
    }
    else if(url === "/contact"){
        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        res.write('<h1 align="center">This is contact page</h1>');
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'            
        });
        res.write("<h1 align='center'>404 !!! Page not found</h1>")
    }
});

app.listen(8080,()=>{
    console.log('Server is running at port no 8080');
})