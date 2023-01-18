const imagenes = []
imagenes['Cauchin'] = '//resources.rqdigital.co/img/granja/vaca.png'
imagenes['Pokacho'] = '//resources.rqdigital.co/img/granja/pollo.png'
imagenes['Tocinauro'] = '//resources.rqdigital.co/img/granja/cerdo.png'

/*tocinauro.mostrar()
pokacho.mostrar()
cauchin.mostrar()*/

let coleccion = []
coleccion.push(new Pakiman('Cauchin', 100, 30, 'Tierra'))
coleccion.push(new Pakiman('Pokacho', 80, 50, 'Aire'))
coleccion.push(new Pakiman('Tocinauro', 120, 40, 'Magia'))

console.log(coleccion)

for (let i of coleccion) {
  //in itera el indice - of itera obejtos
  i.mostrar()
}
