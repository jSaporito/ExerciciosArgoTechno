// 2. Crie uma rotina para a conversão de uma lista de temperaturas. Utilize a lista abaixo
// como exemplo de argumento de entrada para a rotina. Para o último item da lista, crie a
// rotina para a conversão da escala Kelvin para Celsius, usando a seguinte fórmula:
//  De Kelvin para Celsius: subtraia 273,15


let arrTemperaturas = [37, 212, 0, -40, 0];
var calculoTemperatura;
let temperaurasConvertidas = []

const conversaoListaTemperaturas = () => {

    arrTemperaturas.forEach((temperatura, index) => {

        if (index == 0) {
            calculoTemperatura = (temperatura * 9 / 5) + 32
            temperaurasConvertidas.push(calculoTemperatura)
        }
        if (index == 1) {
            calculoTemperatura = (temperatura - 32) * (5 / 9)
            temperaurasConvertidas.push(calculoTemperatura)
        }
        if (index == 2) {
            calculoTemperatura = (temperatura * 9 / 5) + 32
            temperaurasConvertidas.push(calculoTemperatura)
        }
        if (index == 3) {
            calculoTemperatura = (temperatura - 32) * (5 / 9)
            temperaurasConvertidas.push(calculoTemperatura)
        }
        if (index == 4) {
            calculoTemperatura = temperatura - 273, 15
            temperaurasConvertidas.push(calculoTemperatura)
        }
        return temperaurasConvertidas
    })
}

conversaoListaTemperaturas();

console.log(temperaurasConvertidas)