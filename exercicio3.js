const prompt = require('prompt');

const properties = [
    {
        name: 'andares',
    },
    {
        name: 'apartamentosPorAndar',
    }
];

prompt.start();

prompt.get(properties, function (err, result) {
    if (err) {
        return onErr(err);
    }


    var inputAndares = result.andares;
    var inputApartamentoPorAndar = result.apartamentosPorAndar
    var andares = [];
    var apartamentosPorAndar = []
    var id = []


    for (i = 0; i < inputAndares; i++) {
        andares.push(i + 1)
    }
    for (j = 0; j < inputApartamentoPorAndar; j++) {
        apartamentosPorAndar.push(j + 1)
    }



    const stringAndares = andares.map(String)
    const stringApartamentos = apartamentosPorAndar.map(String)



    for (let i = 0; i < andares.length; i++) {
        for (let j = 0; j < apartamentosPorAndar.length; j++) {
            id.push(stringAndares[i] + stringApartamentos[j])
        }
    }
    console.log(id)

});

function onErr(err) {
    console.log(err);
    return 1;
}

