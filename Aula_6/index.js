const http = require('http')

//req ~~~~> é um objeto que contem varias informações do cliente (quem está requisitando algo ao servidor),
//como ip e url.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//res ~~~~> é o que enviara para o cliente
http.createServer((req,res) => {
    if(req.url == "/contato"){
        return res.end("Você está na página de contato")
    // return tem que ser usado para travar o código e não execultar nada mais depois dele se for true.
    // ou seja não execultaria nada além do que está dentro desse código.
    }

    res.end("Parabéns você acessou o servidor!")

//No listen o primeiro parametro é a porta, no segundo é o nome dado ao ip da maquina
//o terceiro pode ser uma callback para testar se o servidor está funcionando como a gunção abaixo.
}).listen(3030,'localhost', (req,res)=> console.log("Estou dentro do servidor") )