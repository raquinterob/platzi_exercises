let d = document.getElementById('map-area')
let lienzo = d.getContext('2d')

let fondo = {
  url: '//resources.rqdigital.co/img/granja/tile.png',
  cargaOK: false,
}

let vaca = {
  url: '//resources.rqdigital.co/img/granja/vaca.png',
  cargaOK: false,
  cantidad: aleatorio(1, 4),
  x: [],
  y: [],
}

let cerdo = {
  url: '//resources.rqdigital.co/img/granja/cerdo.png',
  cargaOK: false,
  cantidad: aleatorio(1, 6),
  x: [],
  y: [],
}

let pollo = {
  url: '//resources.rqdigital.co/img/granja/pollo.png',
  cargaOK: false,
  cantidad: aleatorio(1, 8),
  x: [],
  y: [],
}

let scarecrow = {
  url: '//resources.rqdigital.co/img/granja/scarecrow.png',
  cargaOK: false,
  x: aleatorio(0, 420),
  y: aleatorio(0, 420),
}

fondo.imagen = new Image()
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener('load', cargarFondo)

vaca.imagen = new Image()
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener('load', cargarVacas)

cerdo.imagen = new Image()
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener('load', cargarCerdos)

pollo.imagen = new Image()
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener('load', cargarPollos)

scarecrow.imagen = new Image()
scarecrow.imagen.src = scarecrow.url
scarecrow.imagen.addEventListener('load', cargarScarecrow)

function cargarFondo() {
  fondo.cargaOK = true
  dibujar()
}

function cargarVacas() {
  vaca.cargaOK = true
  dibujar()
}

function cargarCerdos() {
  cerdo.cargaOK = true
  dibujar()
}

function cargarPollos() {
  pollo.cargaOK = true
  dibujar()
}

function cargarScarecrow() {
  scarecrow.cargaOK = true
  dibujar()
}

function dibujar() {
  if (
    fondo.cargaOK &&
    vaca.cargaOK &&
    cerdo.cargaOK &&
    pollo.cargaOK &&
    scarecrow.cargaOK
  ) {
    lienzo.drawImage(fondo.imagen, 0, 0)

    for (let i = 0; i < vaca.cantidad; i++) {
      vaca.x[i] = aleatorio(0, 420)
      vaca.y[i] = aleatorio(0, 420)
      lienzo.drawImage(vaca.imagen, vaca.x[i], vaca.y[i])
    }

    for (let i = 0; i < cerdo.cantidad; i++) {
      cerdo.x[i] = aleatorio(0, 420)
      cerdo.y[i] = aleatorio(0, 420)
      lienzo.drawImage(cerdo.imagen, cerdo.x[i], cerdo.y[i])
    }

    for (let i = 0; i < pollo.cantidad; i++) {
      pollo.x[i] = aleatorio(0, 420)
      pollo.y[i] = aleatorio(0, 420)
      lienzo.drawImage(pollo.imagen, pollo.x[i], pollo.y[i])
    }

    console.log(
      'vacas= ' +
        vaca.cantidad +
        ' | cerdos= ' +
        cerdo.cantidad +
        ' | pollos= ' +
        pollo.cantidad
    )

    lienzo.drawImage(scarecrow.imagen, scarecrow.x, scarecrow.y)
    //console.log('scarecrow.x=' + scarecrow.x + ' scarecrow.y=' + scarecrow.y)
  }
}

function redibujar() {
  if (
    fondo.cargaOK &&
    vaca.cargaOK &&
    cerdo.cargaOK &&
    pollo.cargaOK &&
    scarecrow.cargaOK
  ) {
    lienzo.drawImage(fondo.imagen, 0, 0)

    for (let i = 0; i < vaca.cantidad; i++) {
      lienzo.drawImage(vaca.imagen, vaca.x[i], vaca.y[i])
    }

    for (let i = 0; i < cerdo.cantidad; i++) {
      lienzo.drawImage(cerdo.imagen, cerdo.x[i], cerdo.y[i])
    }

    for (let i = 0; i < pollo.cantidad; i++) {
      lienzo.drawImage(pollo.imagen, pollo.x[i], pollo.y[i])
    }

    console.log(
      'vacas= ' +
        vaca.cantidad +
        ' | cerdos= ' +
        cerdo.cantidad +
        ' | pollos= ' +
        pollo.cantidad
    )

    lienzo.drawImage(scarecrow.imagen, scarecrow.x, scarecrow.y)
    //console.log('scarecrow.x=' + scarecrow.x + ' scarecrow.y=' + scarecrow.y)
  }
}

let movimiento = 10
let teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
}

document.addEventListener('keydown', moverScarecrow)

function moverScarecrow(evento) {
  //console.log('Tecla oprimida =' + evento.keyCode + ' ' + evento.key)

  switch (evento.keyCode) {
    case teclas.LEFT:
      scarecrow.x = scarecrow.x - movimiento
      redibujar()
      break
    case teclas.RIGHT:
      scarecrow.x = scarecrow.x + movimiento
      redibujar()
      break
    case teclas.UP:
      scarecrow.y = scarecrow.y - movimiento
      redibujar()
      break
    case teclas.DOWN:
      scarecrow.y = scarecrow.y + movimiento
      redibujar()
      break
    default:
      console.log('otra tecla')
      break
  }
}

// Primer Opcion dibujando uno por uno, pero con posibles problemas de
// orden de dibujo (capas), esposible que el fondo quede encima de todo
/*
let cerdo = new Image()
cerdo.src = 'images/cerdo.png'
cerdo.addEventListener('load', cargarCerdos)

let pollo = new Image()
pollo.src = 'images/pollo.png'
pollo.addEventListener('load', cargarPollos)

function cargarCerdos() {
  let cantidad = aleatorio(1, 4)
  console.log('# de cerdos = ' + cantidad)

  for (let i = 0; i < cantidad; i++) {
    lienzo.drawImage(cerdo, aleatorio(0, 420), aleatorio(0, 420))
  }
}
function cargarPollos() {
  let cantidad = aleatorio(1, 4)
  console.log('# de pollos = ' + cantidad)

  for (let i = 0; i < cantidad; i++) {
    lienzo.drawImage(pollo, aleatorio(0, 420), aleatorio(0, 420))
  }
}
*/

// Random Numbers - Images position
function aleatorio(min, maxi) {
  let resultado
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
  //console.log(resultado)
  return resultado
}

// Test Random Number
/*let z
for (let i = 0; i < 10; i++) {
    z = aleatorio(1, 20)
    console.log((i+1) + ' = ' + z)
}*/
