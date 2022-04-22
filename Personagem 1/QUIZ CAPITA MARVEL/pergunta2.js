var nome;

function meDigaSeuNome() {
    nome = prompt ("Digite abaixo o seu nome");
}

function proximaPergunta () {
    alert(`Muito bem ${nome}`);
}


function verificaResposta(respostaCerta) {
    var contador = 3
    var resposta = prompt ('Pense e digite sua resposta')
    while(contador > 1 ){
        if(resposta.toLocaleLowerCase() === respostaCerta) {
            alert('Parabéns você acertou!!')
            window.location.href = 'pergunta3.html';
            break;
        }else{
            contador --
            alert('Xiiii!! Tente novamente')
            var resposta = prompt ('Digite a resposta novamente')

        }
        window.location.href = 'perdeu.html';
    }

}
