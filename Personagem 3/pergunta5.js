var nome;

function meDigaSeuNome() {
    nome = prompt ("Digite abaixo o seu nome");
}

function clickFinalizar () {
    alert(`Muito bem ${nome} você conseguiu`);
}

function verificaResposta(respostaCerta) {
    var resposta = prompt ('Pense e digite sua resposta')
    if(resposta.toLocaleLowerCase() === respostaCerta) {
        alert('Parabéns você acertou!! Click em finalizar')
    }else{
        alert('Xiiii!! Tente novamente')
    }
}
