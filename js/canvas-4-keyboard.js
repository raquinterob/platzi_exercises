let teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
}

document.addEventListener('keydown', dibujoPorTecla)

let cuadrito = document.getElementById('area_de_dibujo')
let papel = cuadrito.getContext('2d')
let xLinea = cuadrito.width / 2
let yLinea = cuadrito.height / 2
let i = 0
let trazoLinea = 3
let movimiento = 5
let hueChange = 3
let colorLinea = 'hsl(' + i + ',100%,50%)'

dibujarLinea(colorLinea, xLinea - 1, yLinea - 1, xLinea + 1, yLinea + 1, papel)

function dibujarLinea(colorLinea, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath()
  lienzo.strokeStyle = colorLinea
  lienzo.lineWidth = trazoLinea
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke()
  lienzo.closePath()
}

function dibujoPorTecla(evento) {
  //console.log('Tecla oprimida =' + evento.keyCode + ' ' + evento.key)
  //console.log(evento)
  //if (evento.keyCode == teclas.LEFT) {
  //  console.log("Vamo'pa arriba")
  //}

  switch (evento.keyCode) {
    case teclas.LEFT:
      //console.log("Vamo'pa Izquierda")
      //console.log(xLinea)
      i += hueChange
      colorLinea = 'hsl(' + i + ',100%,50%)'
      dibujarLinea(
        colorLinea,
        xLinea,
        yLinea,
        xLinea - movimiento,
        yLinea,
        papel
      )
      xLinea = xLinea - movimiento
      break
    case teclas.UP:
      //console.log('Vamo Arriba')
      i += hueChange
      colorLinea = 'hsl(' + i + ',100%,50%)'
      dibujarLinea(
        colorLinea,
        xLinea,
        yLinea,
        xLinea,
        yLinea - movimiento,
        papel
      )
      yLinea = yLinea - movimiento
      break
    case teclas.RIGHT:
      //console.log("Vamo'pa Derecha")
      i += hueChange
      colorLinea = 'hsl(' + i + ',100%,50%)'
      dibujarLinea(
        colorLinea,
        xLinea,
        yLinea,
        xLinea + movimiento,
        yLinea,
        papel
      )
      xLinea = xLinea + movimiento
      break
    case teclas.DOWN:
      //console.log('Vamo abajo')
      i += hueChange
      colorLinea = 'hsl(' + i + ',100%,50%)'
      dibujarLinea(
        colorLinea,
        xLinea,
        yLinea,
        xLinea,
        yLinea + movimiento,
        papel
      )
      yLinea = yLinea + movimiento
      break

    default:
      //console.log('otra tecla')
      break
  }
}
