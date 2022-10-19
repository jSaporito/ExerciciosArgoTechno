var arrayFibonacci = []
const ELEMENTOS = 100;

const fibonacci = (qtdElementos) => {

    if (qtdElementos === 1) {
        return [0, 1];
    }
    else {
        arrayFibonacci = fibonacci(qtdElementos - 1);
        arrayFibonacci.push(arrayFibonacci[arrayFibonacci.length - 1] + arrayFibonacci[arrayFibonacci.length - 2]);
        return arrayFibonacci;
    }
}

fibonacci(ELEMENTOS)

const somaElementos = arrayFibonacci.reduce((somaParcial, elemento) => somaParcial + elemento, 0);

console.log(somaElementos)

