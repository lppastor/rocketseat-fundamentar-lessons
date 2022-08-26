// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: []
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e
// despesas e irá mostrar uma mensagem se a família está com
// saldo positivo ou negativo, seguido do valor do saldo.

let controle = {
  receitas: [200, 14, 82, 362, 441, 20, 50],
  despesas: [15, 36, 52, 16, 120, 64, 55],
};

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

//Salário
controle.receitas.push(2300);

console.log(controle.receitas);
console.log(controle.despesas);

let totalReceita = sum(controle.receitas);
console.log("Total das Receitas: " + totalReceita);

let totalDespesas = sum(controle.despesas);
console.log("Total das Despesas: " + totalDespesas);

let saldo = totalReceita - totalDespesas;
console.log(`Seu saldo foi de: R$ ${saldo.toFixed(2)}`);
