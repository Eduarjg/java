/*
IF(SE) faça esso
else(se não) executa o else
Else if (se) executa o else if

*/

const temperature = 49


if(temperature == 36){
    console.log("temperatura normal")
}else if(temperature > 36 && temperature < 40){
    console.log("temperatura alta")
}else if(temperature > 40){
    console.log("temperatura muito alta")
}else{
    console.log("temperatura baixa")
}