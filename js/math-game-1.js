let d = document.getElementById('map-area')
let mapa = d.getContext('2d')

function aleatorio(min, maxi) {
  let resultado
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
  return resultado
}

let z
for (let i = 0; i < 10; i++) {
    z = aleatorio(1, 20)
    console.log((i+1) + ' = ' + z)
}
