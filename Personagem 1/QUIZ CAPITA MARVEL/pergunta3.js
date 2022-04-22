var nome;

function meDigaSeuNome() {
   nome = prompt ("Digite abaixo o seu nome , depois clique em responder");
}
var nome;

function verificaResposta(respostaCerta) {
    var contador = 3
    var resposta = prompt (`Pense com cuidado e digite sua resposta ${nome} , escolha entre as letras abaixo`)
    while(contador > 1 ){
        if(resposta.toLocaleLowerCase() === respostaCerta) {
            alert(`Parabéns ${nome} você acertou!!`)
            window.location.href = 'pergunta4.html';
            break;
        }else{
            contador --
            alert(`Xiiii!! Tente novamente ${nome}`)
            var resposta = prompt ('Digite a resposta novamente')

        }
        window.location.href = 'perdeu.html';
    }

}
