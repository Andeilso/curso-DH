const pets = require('./pets.json')
let data = new Date
let dataComHora = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()} - ${data.getHours() -1}:${data.getMinutes()}hs`
let dataSemHora = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`

const darBanho = pet => {
    console.log(`Dando banho em ${pet.nome}`)
    pet.servicos.push({nome:"Banho", "data" : data})
    return pet
}

const darVacina = pet => {
    if(pet.vacinado){
        console.log(`${pet.nome} já é vacinado!`)
        console.log(pet)
        return pet
    } else {
        console.log (`Vacinando o ${pet.nome}!`)
        pet.servicos.push({nome:"Vacina", "data" : data})
        pet.vacinado = true
        console.log(pet)
        return pet
    }
}

const tosar = pet => {
    console.log(`Tosando o ${pet.nome}`)
    pet.servicos.push({nome :"tosar", "data" : data})
    return pet
}

const consulta = pet => {
    console.log(`${pet.nome} está passando pela consulta `)
    pet.servicos.push({nome:"Vacina", "data" : data})
    return pet
}

let aplicarServico = (pet, ...servico) => {
    for(let serv in servico){
        servico[serv](pet)
    }
}
aplicarServico(pets[2],darBanho, darVacina, tosar, consulta)