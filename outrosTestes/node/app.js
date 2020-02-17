const http = require ('http');

http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type" : "text/html; charset=utf-8"})

        switch(req.url){
            case "/":
                res.end("Você está na pagina Home!")
                break
            case "/contato":
                res.end("Você está na página de contato!")
                break
            default:
                res.end("pagina não encontrada")
                break
        }
}).listen(3030,localhost)