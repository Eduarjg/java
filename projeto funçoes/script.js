//Clik nos meus botão e chamar uma função 
//preciso criar de forma aletorio uma escola para o computador
//somar os pontos 

const result = document.querySelector('.result-final')

const playHuman = (humanchoice) => {
   
   playTheGame(humanchoice, playMachine())

}


const playMachine = () => {
   const choices = ["stone", "paper", "scissors"]
   const ramdonNumber = Math.floor(Math.random() * 3)



   return choices[ramdonNumber]
}


const playTheGame = (human, machine) => {
      console.log('Humano: '+ human + ' Computador: ' + machine)

      if(human === machine){
         result.innerHTML = 'empate'
      }

      if(human === 'stone' && machine === 'scissors'){
         result.innerHTML = 'Venceu'
      }
      if(human === 'paper' && machine === 'stone'){
         result.innerHTML = 'Venceu'
      }
      if(human === 'scissors' && machine === 'paper'){
         result.innerHTML = 'Venceu'
      }

      if(human === 'stone' && machine === 'paper'){
         result.innerHTML = 'Perdeu'
      }
      if(human === 'paper' && machine === 'scissors'){
         result.innerHTML = 'Perdeu'
      }
      if(human === 'scissors' && machine === 'stone'){
         result.innerHTML = 'Perdeu'
      }
}



