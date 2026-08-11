let contador = 0;
let moeda = 0;
let loja = 0;
let qdm_nivel_alto = 100;
let qdm_nivel_1 = 10;
let qdm_nivel_2 = 20;
let qdm_nivel_3 = 30;
let qdm_nivel_4 = 40;

let limite = 10;
let forca_clique = 1;


let loja3 = 0;

function loja1() {
    let loja2 = document.getElementById("texto");

    if (loja3 == 0) {
        loja3 = 1;
        loja2.style.display = "block";
    } else {
        loja3 = 0;
        loja2.style.display = "none";
    }
}


function botaoclique() {
    contador += forca_clique;

    document.getElementById("contador").textContent = contador;
    document.getElementById("moeda").textContent = moeda;

    if (contador >= limite) {
        moeda += 1;
        limite += 10;
    }
}

function botaoupar1() {
    if (moeda >= qdm_nivel_1) {
        moeda -= qdm_nivel_1;
        qdm_nivel_1 += 10;
        forca_clique += 1;
    }
}

function botaoupar2() {
    if (moeda >= qdm_nivel_2) {
        moeda -= qdm_nivel_2;
        forca_clique += 2;
    }
}

function botaoupar5() {
    if (moeda >= qdm_nivel_3) {
        moeda -= qdm_nivel_3;
        forca_clique += 5;
    }
}

function botaoupar10() {
    if (moeda >= qdm_nivel_4) {
        moeda -= qdm_nivel_4;
        forca_clique += 10;
    }
}
function m1ps() {
    if (moeda >= qdm_nivel_alto) {
        moeda -= qdm_nivel_alto;

        document.getElementById("moeda").textContent = moeda;

        setInterval(function() {
            contador += 1;
            document.getElementById("contador").textContent = contador;
        }, 1000);
    }
}
