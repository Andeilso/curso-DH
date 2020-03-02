const Pizzas = [
    {
        nome: "Peperoni",
        ingredientes: [
            "mussarela",
            "peperoni"
        ]
    },
    {
        nome: "Marguerita",
        ingredientes: [
            "mussarela",
            "tomate",
            "manjericao"
        ]
    }
]

const listarPizzas = (req,res) =>{
    return res.send(Pizzas)
}

const mostrarPizza =(req,res) =>{
    let {id} = req.params
    if((id-1) < Pizzas.length){
        res.send(Pizzas[id-1])
    } else {
        res.send("erro pizza não existe")
    }
}

module.exports = {listarPizzas,mostrarPizza}