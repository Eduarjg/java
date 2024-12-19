



const contacts = [
    { name: "Eduar", phone: "9976367576" },
    { name: "isaac", phone: "9983798232" },
    { name: "alves", phone: "9923456789" },
    { name: "ludmila", phone: "9925436789" },
    { name: "gislaine", phone: "9993456789" },
    { name: "maguive", phone: "99993456789" },
]


function procurarContato() {
    let input = document.querySelector("input")
    let p = document.querySelector("p")
    let encontrado = false

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name) {
            p.innerHTML = `seu contato e ${contacts[i].name} com o numero ${contacts[i].phone}`
            encontrado = true;
            break;
        }


        if (!encontrado) {
            p.innerHTML = "contato nao encontrado"
        }
    }


}

//verificar os valor no array
//procurar o contato