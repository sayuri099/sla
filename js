let contador = 0;
let moeda = 0;
let clique = 0;
let contidade_de_moedas_nivel_1 = 10;
let contidade_de_moedas_nivel_2 = 20;
let contidade_de_moedas_nivel_3 = 30;
let contidade_de_moedas_nivel_4 = 40;
let contidade_de_moedas_nivel_5 = 50;
let limite = 10;
let forca_clique = 1;
function botaoclique(){
        clique += 1
        contador += forca_clique
        if (contador >= limite){
            moeda += 1
            limite += 10
        }
        }
        
function botaoupar1(){
    if moeda >= contidade_de_moedas_nivel_1{
        moeda -= contidade_de_moedas_nivel_1
        contidade_de_moedas_nivel_1 += 10;
    }
    }
    function botãoupar2(){
        if moeda == contidade_de_moedas_nivel_2 
        moeda -= contidade_de_moedas_nivel_2
        forca_clique += 2 
    clique += 4
    }
    function botãoupar3(){
        forca_clique =+ 4;
        if moeda == contidade_de_moedas_nivel_3
        if moeda == contidade_de_moedas_nivel_3
    clique += 4
    }
    function botãoupar4(){
        forca_clique =+ 6
        if moeda == contidade_de_moedas_nivel_4
        if moeda == contidade_de_moedas_nivel_4
    }
    function botãoupar5(){
        forca_clique =+ 8
        if moeda == contidade_de_moedas_nivel_5
        if moeda == contidade_de_moedas_nivel_5
    }
    
