/*
string --> carateres
number --> numeros
bolean---> 001010010101 forma de se comunicar com a maquina 
object --> forma de armazernar informações sem precisar estar criando varias variaveis 
null e undefainer --> 


*/


let eduar = "eduar "//string

console.log(eduar)

const isaac = 23 // number
console.log(isaac)

const alves = {   //objetos servi para guardar informaçoes 
    name : "garcia", 
    age: 24, 
    countru: "brasil",
    addreess:{
        cep: 92500000,
        rua: "rua 21",
        numero: 3
    } 
}

console.log(alves)
console.log(alves.addreess.cep)


//Null --> e quando eu quero deixar um espaço basio para prenchimento futuro 
//undefined --> valores que não sõa encontrados pela maquina no nossso codigo