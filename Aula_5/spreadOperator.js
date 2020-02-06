// spread operator é denotado por '...'
let dono = {
  nome: "Lucas Pedroso",
  cpf: "025.232.333-09",
  telefone: "(11)9-9999-9999"
};

let pet = {
  nome: "Kaká",
  idade: 7,
  ...dono
};
// A solução acima copia os campos de dono para o pet
// contudo, sobreescreve os campos de mesmo nome

// console.log(pet);
// Spread operator para arrays
let a = [5, 6, 7];
let b = [2, 9];
let c = [...a, ...b];
console.log(c);

// Spread operator para funções!!!
const somarComMensagem = (msg, ...numeros) => {
  console.log(`Mensage: ${msg}`);
  console.log(numeros.reduce((ini, acum) => ini + acum));
};

somarComMensagem("Segue soma!", 2, 4, 5, 6, 67, 8, 8, 6, 6);
