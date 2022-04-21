
var nome;

function meDigaSeuNome() {
    nome = prompt ("Digite abaixo o seu nome");
}

function proximaPergunta () {
    alert(`Muito bem ${nome} vá para a próxima pergunta`);
}

function verificaResposta(respostaCerta) {
    var resposta = prompt ('Pense e digite sua resposta')
    if(resposta.toLocaleLowerCase() === respostaCerta) {
        alert('Parabéns você acertou!! Vá para a proxima pergunta')
    }else{
        alert('Xiiii!! Tente novamente')
    }
}
