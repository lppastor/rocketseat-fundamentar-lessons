// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra
//     C = (F - 32) * 5/9
//     F = C * 9/5 + 32

function convertDegree(degree) {
  let celsiusExist = degree.toUpperCase().includes("C");
  let fahrenheitExist = degree.toUpperCase().includes("F");

  if (!celsiusExist && !fahrenheitExist) {
    throw Error("Temperatura invalida");
  }

  //F -> C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let convert = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSignal = "C";

  //C -> F
  if (celsiusExist) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    convert = (celsius) => (celsius * 9) / 5 + 32;
    degreeSignal = "F";
  }

  return convert(updatedDegree) + degreeSignal;
}

try {
  console.log(convertDegree("50F"));
  console.log(convertDegree("10C"));
  console.log(convertDegree("230R"));
} catch (e) {
  console.log(e.message);
}
