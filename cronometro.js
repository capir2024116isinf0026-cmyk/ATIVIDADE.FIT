let segundos = 0;

let intervalo;

function atualizarTempo(){

    let horas = String(Math.floor(segundos / 3600)).padStart(2,"0");

    let minutos = String(Math.floor((segundos % 3600)/60)).padStart(2,"0");

    let seg = String(segundos % 60).padStart(2,"0");

    document.getElementById("tempo").innerHTML =
    `${horas}:${minutos}:${seg}`;

}

function iniciar(){

    if(!intervalo){

        intervalo = setInterval(function(){

            segundos++;

            atualizarTempo();

        },1000);

    }

}

function pausar(){

    clearInterval(intervalo);

    intervalo = null;

}

function reiniciar(){

    clearInterval(intervalo);

    intervalo = null;

    segundos = 0;

    atualizarTempo();

}
