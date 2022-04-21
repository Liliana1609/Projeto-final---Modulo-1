var nome;

function meDigaSeuNome() {
    nome = prompt ("Digite abaixo o seu nome");
}

function proximaPergunta () {
    alert(`Muito bem ${nome}`);
}


function verificaResposta(respostaCerta) {
    var resposta = prompt ('Pense e digite sua resposta')
    if(resposta.toLocaleLowerCase() === respostaCerta) {
        alert('Parabéns você acertou!!')
    }else{
        alert('Xiiii!! Tente novamente')
    }
}
