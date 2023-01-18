class Pakiman {
  constructor(n, v, a, t) {
    this.nombre = n
    this.vida = v
    this.ataque = a
    this.tipo = t
    this.imagen = new Image()
    this.imagen.src = imagenes[this.nombre]
  }
  hablar() {
    alert(this.nombre)
  }
  mostrar() {
    document.getElementById('mapa').appendChild(this.imagen)
    document.write('<div class="pakiman-data">')
    document.write('<p><strong>' + this.nombre + '</strong><br/>')
    document.write('<i>Salud = </i>' + this.vida + '<br/>')
    document.write('<i>Ataque = </i>' + this.ataque + '<br/>')
    document.write('<i>Tipo = </i>' + this.tipo + '<hr></p>')
    document.write('</div>')
  }
}
