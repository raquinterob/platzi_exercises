// Clase Billetes
class Billete {
  constructor(v, c) {
    this.valor = v
    this.cantidad = c
  }
}

// Array del valor y cantidad de los billetes
let caja = []
caja.push(new Billete(100, 3))
caja.push(new Billete(50, 8))
caja.push(new Billete(20, 10))
caja.push(new Billete(10, 20))
caja.push(new Billete(5, 50))

for (const i of caja) {
  console.log(i.cantidad + ' billetes de $' + i.valor)
}
console.log('-------------')

//
let btnRetirar = document.getElementById('btnRetirar')
btnRetirar.addEventListener('click', retirarDinero)

function retirarDinero() {
  // Lo que pide el usuario y lo que se le va a entregar
  let dinero = 0
  let dineroPendiente = 0
  let entregado = []
  let div = 0
  let mensaje

  dinero = document.getElementById('dineroUsuario').value
  dinero = parseInt(dinero)

  document.getElementById('solicitado').innerText = '$' + dinero

  console.log('Solicitado Cliente: $' + dinero)

  dineroPendiente = dinero

  let i = 0

  for (let b of caja) {
    if (dineroPendiente > 0) {
      div = Math.floor(dineroPendiente / b.valor)
      if (div > b.cantidad) {
        div = b.cantidad
      }
      entregado.push(new Billete(b.valor, div))
      dineroPendiente = dineroPendiente - div * b.valor

      console.log(
        entregado[i].cantidad +
          ' x $' +
          entregado[i].valor +
          ' // Pendiente: $' +
          dineroPendiente
      )
      i++
    }
  }
  if (dineroPendiente == 0) {
    mensaje = 'Toma tu dinero!! $' + dinero
    console.log('-------------')
    console.log('Quedan')
    for (let i = 0; i < entregado.length; i++) {
      caja[i].cantidad -= entregado[i].cantidad
    }
    for (const i of caja) {
      console.log(i.cantidad + ' billetes de $' + i.valor)
    }
  } else {
    mensaje = 'No puedo entregarte ese dinero :('
  }

  respuesta.innerText = mensaje
  console.log('-------------')
}

// BEFORE Platzi

/*
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
  let retiro = document.getElementById('dineroUsuario').value
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
*/
