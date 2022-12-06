//Disponibilidad de Billetes del ATM
let c50 = 3
let c20 = 2
let c10 = 2

let respuesta = "hola"

//let usuario = parseInt(prompt('Cuanto quieres retirar?'))
let retiro = document.getElementById('retiro').value
let btnRetirar = document.getElementById('btnRetirar')
btnRetirar.addEventListener('click', retirar)

function retirar(){
    console.log(retiro)

    let b50 = parseInt(retiro / 50)
    if (c50 < b50) {
      b50 = c50
    }
    console.log(b50 + ' Billetes de 50')
    
    let b20 = parseInt((retiro - b50 * 50) / 20)
    if (c20 < b20) {
      b20 = c20
    }
    console.log(b20 + ' Billetes de 20')
    
    let b10 = parseInt((retiro - (b50 * 50 + b20 * 20)) / 10)
    console.log(b10 + ' Billetes de 10')
    if (c10 < b10) {
      b10 = c10
      console.log(b10 + ' Billetes de 10')
      respuesta = 'No tengo suficiente dinero'
    } else if ((retiro - (b50 * 50 + b20 * 20)) % 10 !== 0) {
      respuesta = 'No tengo billetes de baja denominación'
    } else {
      respuesta = 'Toma tu platica!! $' + retiro
    }
    
    console.log(respuesta)
}
