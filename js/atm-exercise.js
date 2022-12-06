// Clase Billetes
class Billete {
  constructor(v, c) {
    this.valor = v
    this.cantidad = c
  }
}

// Array del valor y cantidad de los billetes
let caja = []
caja.push(new Billete(50, 3))
caja.push(new Billete(20, 2))
caja.push(new Billete(10, 2))

// Lo que pide el usuario y lo que se le va a entregar
let dinero = 0
let dineroPendiente = 0
let entregado = []
let div = 0
let papeles = 0
let mensaje

//
let btnRetirar = document.getElementById('btnRetirar')
btnRetirar.addEventListener('click', retirarDinero)

function retirarDinero() {
  dinero = document.getElementById('dineroUsuario').value
  document.getElementById('solicitado').innerText = '$' + dinero

  dineroPendiente = dinero

  let i = 0

  for (let b of caja) {
    if (dineroPendiente > 0) {
      div = Math.floor(dineroPendiente / b.valor)
      if (div > b.cantidad) {
        papeles = b.cantidad
      } else {
        papeles = div
      }
      entregado.push(new Billete(b.valor, papeles))
      dineroPendiente = dineroPendiente - papeles * b.valor

      console.log(
        'Entregado: $' + entregado[i].valor + ' x ' + entregado[i].cantidad
      )
      console.log('Dinero pendiente: $' + dineroPendiente)
      i = i + 1
    }
  }
  if (dineroPendiente == 0) {
    mensaje = 'Toma tu dinero!! $' + dinero
  } else {
    mensaje = 'No puedo entregarte ese dinero :('
  }

  respuesta.innerText = mensaje
  console.log('--------------')

  dinero = 0
  entregado = []
  div = 0
  papeles = 0
}

//
/*
function retirar() {
    let dinero = document.getElementById('dineroUsuario').value
    let respuesta = document.getElementById('respuesta')
    let mensaje
    let totalParcial = dinero

    document.getElementById('solicitado').innerText = '$' + totalParcial

    let b50 = parseInt(dinero / v50)
    if (c50 < b50) {
      b50 = c50
    }
    totalParcial = dinero - b50 * v50
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
      mensaje = 'Toma tu platica!! $' + dinero
    }

    respuesta.innerText = mensaje
    console.log('-----')
  }
}

let btnRetirar = document.getElementById('btnRetirar')
btnRetirar.addEventListener('click', Billetes.retirar())
*/

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
