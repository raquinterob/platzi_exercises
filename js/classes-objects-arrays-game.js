const imagenes = []
imagenes['Cauchin'] = '//resources.rqdigital.co/img/granja/vaca.png'
imagenes['Pokacho'] = '//resources.rqdigital.co/img/granja/pollo.png'
imagenes['Tocinauro'] = '//resources.rqdigital.co/img/granja/cerdo.png'

class Pakiman {
  constructor(n, v, a, t) {
    this.imagen = imagenes[n]
    this.nombre = n
    this.vida = v
    this.ataque = a
    this.tipo = t
  }
  hablar() {
    alert(this.nombre)
  }
}

let cauchin = new Pakiman('Cauchin', 100, 30, 'Tierra')
let pokacho = new Pakiman('Pokacho', 80, 50, 'Aire')
let tocinauro = new Pakiman('Tocinauro', 120, 40, 'Magia')

console.log(cauchin, pokacho, tocinauro, imagenes)
