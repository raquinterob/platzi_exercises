// Valor de cada Billete ATM
let v50 = 50
let v20 = 20
let v10 = 10

// Cantidad de Billetes del ATM
let c50 = 3
let c20 = 2
let c10 = 2

let btnRetirar = document.getElementById('btnRetirar')
btnRetirar.addEventListener('click', retirar)

function retirar() {
  let retiro = document.getElementById('retiro').value
  let respuesta = document.getElementById('respuesta')
  let mensaje
  let totalParcial = retiro

  document.getElementById('solicitado').innerText = '$' + totalParcial

  let b50 = parseInt(retiro / v50)
  if (c50 < b50) {
    b50 = c50
  }
  totalParcial = retiro - b50 * v50
  console.log(b50 + ' Billetes de ' + v50 + ' // Restante ' + totalParcial)

  let b20 = parseInt(totalParcial / v20)
  if (c20 < b20) {
    b20 = c20
  }
  totalParcial = totalParcial - b20 * v20
  console.log(b20 + ' Billetes de ' + v20 + ' // Restante ' + totalParcial)

  let b10 = parseInt(totalParcial / v10)
  totalParcial = totalParcial - b10 * v10
  if (c10 < b10) {
    b10 = c10
    console.log(b10 + ' Billetes de ' + v10 + ' // Restante ' + totalParcial)
    mensaje = 'No tengo suficiente dinero'
  } else if (totalParcial % v10 !== 0) {
    mensaje = 'No tengo billetes de baja denominación, solo múltiplos de 10'
  } else {
    console.log(b10 + ' Billetes de ' + v10 + ' // Restante ' + totalParcial)
    mensaje = 'Toma tu platica!! $' + retiro
  }

  respuesta.innerText = mensaje
  console.log('-----')
}

/*
//Disponibilidad de Billetes del ATM
let c50 = 3
let c20 = 2
let c10 = 2

//let usuario = parseInt(prompt('Cuanto quieres retirar?'))
let btnRetirar = document.getElementById('btnRetirar')
btnRetirar.addEventListener('click', retirar)

function retirar() {
  let retiro = document.getElementById('retiro').value
  document.getElementById('solicitado').innerText = '$' + retiro

  let mensaje

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
  if (c10 < b10) {
    b10 = c10
    console.log(b10 + ' Billetes de 10')
    mensaje = 'No tengo suficiente dinero'
  } else if ((retiro - (b50 * 50 + b20 * 20)) % 10 !== 0) {
    mensaje = 'No tengo billetes de baja denominación, solo múltiplos de 10'
  } else {
    console.log(b10 + ' Billetes de 10')
    mensaje = 'Toma tu platica!! $' + retiro
  }

  let respuesta = document.getElementById('respuesta')
  respuesta.innerText = mensaje

  console.log('-----')
}
*/
