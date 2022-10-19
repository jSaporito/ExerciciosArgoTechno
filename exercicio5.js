const dataCorrente = '11/23/2020';
const dataValidade = new Date(dataCorrente);
const anoExpiracao = dataValidade.getFullYear().toString().slice(2, 4)
const mesExpiracao = dataValidade.getMonth() + 1
const formatacaoValidade = anoExpiracao + mesExpiracao
const CartoesEncontradosKappaOuGamma = [];
const cartoesForaDaValidade = [];



let arrayCartoes = [
    ";854922420655947=20087011490683843?",
    ";722792821249=190220153666234?",
    ";8657607910110=2209701507597562?",
    ";6034523459017=24032012187993726?",
    ";83407977524115=2010701164703842?",
    ";22554987787910=1903201221224791?",
    ";7621767951747=21112018460506111?",
    ";24478927568913=230470179307259?",
    ";88674481889649=19062014166695784?",
    ";76985229117350=1805701127970335?",
    ";2147686439882=2712701977197697?",
    ";86392841965929=2108201878359745?"
]


const verificaValidade = () => {
    arrayCartoes.forEach(cartao => {

        const indice = cartao.indexOf("=") + 1
        const extraiDataDaString = cartao.substring(indice, indice + 4)
        const dataValidadeCartao = extraiDataDaString;
        if (dataValidadeCartao < dataValidade) {
            cartoesForaDaValidade.push(cartao)
        }
    })
}

const encontraBandeira = () => {
    arrayCartoes.forEach(cartao => {
       
        const formatStringCartao = cartao.replace(";", '')
        const encontraCartaoKappaOuGamma = formatStringCartao.substring(0, 2)
        if (encontraCartaoKappaOuGamma.startsWith(2) || encontraCartaoKappaOuGamma.startsWith(72) || encontraCartaoKappaOuGamma.startsWith(76)){
            CartoesEncontradosKappaOuGamma.push(cartao)
        }
        
    })
}

verificaValidade()
encontraBandeira()


// console.log(cartoesForaDaValidade)
 console.log(CartoesEncontradosKappaOuGamma)
