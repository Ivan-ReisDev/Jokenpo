
function OpcaoPlayer(num) {
    let opcao = document.querySelector("button.botao-individual").value = num
    if(opcao == 0) {
       let amarelo = document.querySelectorAll('.botao')[0];
       let cinza = document.querySelectorAll('.botao')[1];
       let cinza1 = document.querySelectorAll('.botao')[2];
       amarelo.style.background = '#ffbd2f'
       cinza.style.background = '#696969'
       cinza1.style.background = '#696969'
        
    } else if (opcao == 1) {
        let amarelo = document.querySelectorAll('.botao')[1];
        let cinza = document.querySelectorAll('.botao')[0];
        let cinza1 = document.querySelectorAll('.botao')[2];
        amarelo.style.background = '#ffbd2f'
        cinza.style.background = '#696969'
        cinza1.style.background = '#696969'

    } else {
        let amarelo = document.querySelectorAll('.botao')[2];
        let cinza = document.querySelectorAll('.botao')[1];
        let cinza1 = document.querySelectorAll('.botao')[0];
        amarelo.style.background = '#ffbd2f'
        cinza.style.background = '#696969'
        cinza1.style.background = '#696969'
    }
}

function Player() {
    let opcao = document.querySelector("button.botao-individual").value 
    let value = Number(opcao);

    if(value == 0) {
        document.getElementById('player').src = "src/img/pedra.png"

     } else if (value == 1) {
         document.getElementById('player').src = "src/img/papel.png"

     } else {
         document.getElementById('player').src = "src/img/tesoura.png"
     }

    switch(value) {
        case 0:
            return 'Pedra';
        case 1: 
            return 'Papel';
        case 2:
            return 'Tesoura';
    }
}


function bot(){
    const sorteador = parseInt(Math.random() * 3);
    document.getElementById('botJogada').textContent = sorteador;

    if(sorteador == 0) {
        document.getElementById('bot').src = "src/img/pedra.png"

     } else if (sorteador == 1) {
         document.getElementById('bot').src = "src/img/papel.png"

     } else {
         document.getElementById('bot').src = "src/img/tesoura.png"
     }

    switch(sorteador){
        case 0:
           return 'Pedra';
        case 1: 
           return 'Papel';
        case 2:
            return 'Tesoura';
    }
    
}


function resultado() {

    var ValorPlayer = Player();
    var valorBot = bot();
    var result = ''; 

    console.log('Bot: ', valorBot);
    console.log('Player: ', ValorPlayer);

    if(valorBot == 'Pedra') {
        if(ValorPlayer == 'Tesoura') {
            result = 'O computador venceu!';
        } else if(ValorPlayer == 'Papel') {
            result = 'Parabéns, você ganhou!';
        } else {
            result = 'Rodada empatada';
        }

    } else if (valorBot == 'Papel') {

        if(ValorPlayer == 'Tesoura') {
            result = 'Parabéns, você venceu!';
        } else if(ValorPlayer == 'Papel') {
            result = 'Rodada empatada';
        } else {
            result = 'O computador venceu!';
        } 

    } else {
        if(ValorPlayer == 'Tesoura') {
            result = 'Rodada empatada';
        } else if(ValorPlayer == 'Papel') {
            result = 'O computador venceu!';
        } else {
            result = 'Parabéns, você venceu!';

        }
    }

    document.getElementById('resultado').textContent = result;

} 
