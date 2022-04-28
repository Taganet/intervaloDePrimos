/*
    Elielder Oliveira
    Retorna apenas os numeros primos entres o intervalo informado
*/
const primos = (numberOne, numberTwo) => {
  let numberPrimos = new Array;
  
  function validPrimo(validNumber)
  {
    let divisores = 0;
    for(let d = 1; d <= validNumber; d++)
    {
      if((validNumber % d) === 0)
      {
        divisores++;
      }
    }
    return divisores;
  }
  
  for(let i = (numberOne + 1); i < numberTwo; i++ )
  {
    if(validPrimo(i) === 2)
    {
      numberPrimos.push(i);
    }
  }
  
  return numberPrimos;
}
let PrimosRes = primos(10, 29);
console.log("Encontrados "+ PrimosRes.length +" números primos, são eles: "+ PrimosRes);