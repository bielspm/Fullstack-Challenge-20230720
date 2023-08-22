const fs = require('fs');

//- planos que começaram antes de hoje
filtrarPlanosComDataInicioValida = plan => {
    let DataAtual = new Date();
    let dataInicioPlano = new Date(plan.schedule.startDate.slice(0, 10));
    if(dataInicioPlano.getTime() <= DataAtual.getTime()){
        return true
    }
    return false
};


//- exibir 1 única vez planos com o mesmo : name, localidade. dando preferência quem possuir o schedule.startDate mais recente.
planosComNameLocalidadeIguaisFilter = (array) => {
    for(var i=0; i < array.length; i++){
        if (array[i]==undefined) continue;
        for(var g = i+1; g < array.length; g++){
            if (array[g]==undefined) continue;
            if(
                array[i].name === array[g].name
                && array[i].localidade.nome === array[g].localidade.nome
            ){
                let dataInicioPlanoAtual = new Date(array[i].schedule.startDate.slice(0, 10)).getTime();
                let dataInicioOutroPlano = new Date(array[g].schedule.startDate.slice(0, 10)).getTime();
                if (dataInicioPlanoAtual > dataInicioOutroPlano){
                    delete array[g];
                } else {
                    delete array[i];
                    break;
                }
            }
        }    
    }
    let arrayResultante = [];
    array.forEach(
        (element, index, arrayOriginal) => {
            if(array.hasOwnProperty(index)){
                arrayResultante.push(element);
            }
        }
    );
    return arrayResultante;
};


/* exibir 1 única vez planos com o mesmos : name. dando preferência a hierarquia de localidades. cidade > estado > pais */
planosComNameIgualAndLocalidadeHierarchyFilter = (array) => {
    let arrayResultante = [];
    for(var i=0; i < array.length; i++){
        if (array[i]==undefined) continue;
        for(var g = i+1; g < array.length; g++){
            if (array[g]==undefined) continue;
            if(array[i].name === array[g].name){
                if (array[i].localidade.prioridade > array[g].localidade.prioridade){
                    delete array[g];
                } 
                else if(array[i].localidade.prioridade === array[g].localidade.prioridade){
                    continue;
                }
                else {
                    delete array[i];
                    break;
                }
            }
        }    
    }
    array.forEach(
        (element, index, arrayOriginal) => {
            if(array.hasOwnProperty(index)){
                arrayResultante.push(element)
            }
        }
    );
    return arrayResultante;
};


aplicarFiltros = (planos) => {
    let resultado = planos.filter(filtrarPlanosComDataInicioValida);
    resultado = planosComNameLocalidadeIguaisFilter(resultado);
    resultado = planosComNameIgualAndLocalidadeHierarchyFilter(resultado);
    return resultado;
};

// console.log((dados.plans.filter(filtrarPlanosComDataInicioValida)));
// console.log(planosComNameLocalidadeIguaisFilter(dados.plans));
// console.log(planosComNameIgualAndLocalidadeHierarchyFilter(dados.plans));

let dados = JSON.parse(fs.readFileSync('data.json', 'utf8'));
let planosFiltrados = aplicarFiltros(dados.plans);
console.log(planosFiltrados);