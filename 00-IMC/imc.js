const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let Classificacao = '';

        if (valorIMC < 18.5) {
            Classificacao = 'Abaixo do peso.'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${Classificacao}`;
    }else {
        resultado.textContent = 'Preencha Todos os campos!!!'
    }


}

calcular.addEventListener('click', imc)