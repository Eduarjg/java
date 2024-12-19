/*
Document --> Html
getelementbyid-->  tras um elemento pelo id
getElementByClassName--> tras todos os elementos com essa clase.
getElementByTagName--> tras todos os elementos com essa tag
getElementByname-->tras  todos os elementos com esse nome 


quarySelector---> tras um elemento, o promeiro que encontrar 
quarySeletorAll--> tars todos os elementos que encontrar 


*/
//forma de pegar elementos pelo id
const input = document.getElementById("main-input")

console.log(input)
//forma para localizar um elemento pela class
const paragrafo = document.getElementsByClassName("paragrafo-js")

console.log(paragrafo)

//procura pela teg
const teste = document.getElementsByTagName("p")

console.log(teste)

//procura pelo nome, geralmente usado para formulario
const teste2 = document.getElementsByName("name")
console.log(teste2)

const teste3 = document.querySelector("p")
console.log(teste3)

// pode colocar um pornto para achar uma class
//# para procurar um id 
// querySeletoctorAll tras todos os elemento que voce pedir 