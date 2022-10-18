let canva = document.getElementById('area_de_dibujo')
let lienzo = canva.getContext('2d')
let canvaWidth = canva.width
let canvaHeight = canva.height
let canvaPositionLeft = canva.offsetLeft
let canvaPositionTop = canva.offsetTop
let trazoLinea = 3
let i = 0
let hueChange = 9
let colorLinea = 'hsl(' + i + ',100%,50%)'

let clickInicialX
let clickInicialY

function dibujarOnClickInicial(evento) {
  clickInicialX = evento.clientX - canvaPositionLeft
  clickInicialY = evento.clientY - canvaPositionTop
  return

}

function dibujarOnClickFinal(evento) {
  clickFinalX = evento.clientX - canvaPositionLeft
  clickFinalY = evento.clientY - canvaPositionTop

  colorLinea = 'hsl(' + i + ',100%,50%)'

  dibujarLinea(colorLinea, clickInicialX, clickInicialY, clickFinalX, clickFinalY, lienzo)
  i += hueChange
  //console.log(evento)
  //console.log(canva)
}

canva.addEventListener('mousedown', dibujarOnClickInicial)
canva.addEventListener('mouseup', dibujarOnClickFinal)

function dibujarLinea(colorLinea, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath()
  lienzo.strokeStyle = colorLinea
  lienzo.lineWidth = trazoLinea
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke()
  lienzo.closePath()
}
