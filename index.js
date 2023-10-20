const prompt = require("prompt-sync")({sigint:true})

// Variáveis
let name = prompt("What is your name? ")
let level

// Laços de repetição + Operadores
do{
    level = prompt("What is your XP? (Choose a number greater than 1) ")
}while(level < 0)

// Estruturas de decisões + Operadores
if(level > 0 && level <= 1.000){
    level = "Ferro"
}else if(level > 1.001 && level <= 2.000){
    level = "Bronze"
}else if(level > 2.001 && level <= 5.000){
    level = "Prata"
}else if(level > 6.001 && level <= 7.000){
    level = "Ouro"
}else if(level > 7.001 && level <= 8.000){
    level = "Platina"
}else if(level > 8.001 && level <= 9.000){
    level = "Ascendente"
}else if(level > 9.001 && level <= 10.000){
    level = "Imortal"
}else if(level >= 10000){
    level = "Radiante"
}else{
    console.log("You're just starting the game")
}

// Saída
console.log("The Hero called " + name + " it's in the level " + level)