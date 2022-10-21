let d = document.getElementById('map-area')
let lienzo = d.getContext('2d')
let mapa = '/images/tile.png'

var fondo = new Image()
fondo.src = mapa
fondo.addEventListener('load', dibujar)

function dibujar() {
  lienzo.drawImage(fondo, 0, 0)
}

let vaca = new Image()
vaca.src = 'images/vaca.png'
vaca.addEventListener('load', dibujarVacas)

let cerdo = new Image()
cerdo.src = 'images/cerdo.png'
cerdo.addEventListener('load', dibujarCerdos)

let pollo = new Image()
pollo.src = 'images/pollo.png'
pollo.addEventListener('load', dibujarPollos)

function dibujarVacas() {
  let cantidad = aleatorio(1, 4)
  console.log('# de vacas = ' + cantidad)

  for (let i = 0; i < cantidad; i++) {
    lienzo.drawImage(vaca, aleatorio(0, 420), aleatorio(0, 420))
  }
}
function dibujarCerdos() {
  let cantidad = aleatorio(1, 4)
  console.log('# de cerdos = ' + cantidad)

  for (let i = 0; i < cantidad; i++) {
    lienzo.drawImage(cerdo, aleatorio(0, 420), aleatorio(0, 420))
  }
}
function dibujarPollos() {
  let cantidad = aleatorio(1, 4)
  console.log('# de pollos = ' + cantidad)

  for (let i = 0; i < cantidad; i++) {
    lienzo.drawImage(pollo, aleatorio(0, 420), aleatorio(0, 420))
  }
}

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
