
// 1. Crie rotinas para conversão de temperaturas da escala Celsius (°C) para a escala
// Fahrenheit (°F) e vice-versa, usando as seguintes fórmulas de conversão:
//  De Celsius para Fahrenheit: subtraia 32, multiplique por 5 e divida por 9
//  De Fahrenheit para Celsius: a conversão é feita pela função inversa da conversão
// Celsius para Fahrenheit 


const celsiusToFarenheit = (temperaturaCelsius) =>{

    const conversaoParaFarenheit=  (temperaturaCelsius * 9/5) + 32

    return conversaoParaFarenheit

}

const FahrenheitToCelsius = (tempFarenheit) => {
    const conversaoParaCelsius = (tempFarenheit - 32) * (5/9)

    return conversaoParaCelsius
}

console.log(celsiusToFarenheit(35))
console.log(FahrenheitToCelsius(35))