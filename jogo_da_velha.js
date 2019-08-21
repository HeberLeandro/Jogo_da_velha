var turno = false; //false = X
var fimJogo = false;
var jogador;

function passaTurno(){
    var JogadordaVez = document.getElementById("turno");

    if(turno == false){
        JogadordaVez.innerHTML = "Vez do jogador: O"
        turno = true;
    }
    else {
        JogadordaVez.innerHTML = "Vez do jogador: X"
        turno = false;
    }
}

function casasIguais(a, b, c){
    if((a.innerHTML == b.innerHTML) && (b.innerHTML == c.innerHTML) && (a.innerHTML != "?")){  
        if(a.innerHTML == "X") jogador = "X";
        else if(a.innerHTML == "O") jogador = "O";

        return true;
    }
    else return false;
}

function verificafimDeJogo(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");
    var btn9 = document.getElementById("btn9");
    var result = document.getElementById("resultado");

    if( casasIguais(btn1, btn2, btn3) || casasIguais(btn4, btn5, btn6) || casasIguais(btn7, btn8, btn9) || casasIguais(btn1, btn4, btn7) || 
        casasIguais(btn2, btn5, btn8) || casasIguais(btn3, btn6, btn9) || casasIguais(btn1, btn5, btn9) || casasIguais(btn3, btn5, btn7)) {
            fimJogo = true;
            result.innerHTML = "O Jogador " + jogador + " Venceu!";
        }

}

function fazerJogada(botao){
    if(turno == false && event.which==1 && fimJogo == false && botao.innerHTML == "?"){
        botao.innerHTML = "X";
        verificafimDeJogo();
        passaTurno();

    }
    else if(turno == true && event.which==3 && fimJogo == false && botao.innerHTML == "?"){
        botao.innerHTML = "O";
        verificafimDeJogo();
        passaTurno();
        
    }
}

function resetGame(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");
    var btn9 = document.getElementById("btn9");
    var result = document.getElementById("resultado");
    var JogadordaVez = document.getElementById("turno");
    
    //Voltando ao estado inicial
    turno = false;
    fimJogo = false;
    JogadordaVez.innerHTML = "Vez do jogador: X";
    btn1.innerHTML = "?";
    btn2.innerHTML = "?";
    btn3.innerHTML = "?";
    btn4.innerHTML = "?";
    btn5.innerHTML = "?";
    btn6.innerHTML = "?";
    btn7.innerHTML = "?";
    btn8.innerHTML = "?";
    btn9.innerHTML = "?";
    result.innerHTML = "";
}