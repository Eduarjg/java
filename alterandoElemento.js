/*
Alterando e acessando textos 

textContent --. pega todo o conteudo 
innerText--> pega APENAS o texto 
innerHTML -> permite adicionar um testo

*/


const element = document.querySelector(".paragrafo-js")

element.textContent = ("o texto e este!")//html
element.innerText = ("o texto e esse!")// css
element.innerHTML = ("o testo não e esse") //tras tudo 
console.group(element.textContent)
console.group(element.innerText)
console.group(element.innerHTML)




const button = document.querySelector(".main-button")
button.style.backgroundColor = "#852394" 
button.style.color = "#fff"
button.style.borderbox = "10px"
button.style.width = "250px"