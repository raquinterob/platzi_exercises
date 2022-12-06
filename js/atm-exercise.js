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
