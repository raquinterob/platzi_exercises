let numLineas = document.getElementById('numLineas')
let btnLineas = document.getElementById('btnLineas')
btnLineas.addEventListener('click', dibujoPorClick)

let d2 = document.getElementById('dibujito2')
let lienzo2 = d2.getContext('2d')
let lienzoAncho = d2.width
let colorLineas2 = '#000'

function dibujoPorClick() {
  let lineas2 = parseInt(numLineas.value)
  let l2 = 0
  let yi2, xf2

  dibujarLinea2(colorLineas2, 1, 1, 1, 400)
  dibujarLinea2(colorLineas2, 1, 399, 399, 399)

  while (l2 < lineas2) {
    yi2 = (lienzoAncho / lineas2) * l2
    xf2 = (lienzoAncho / lineas2) * (l2 + 1)
    dibujarLinea2(colorLineas2, 0, yi2, xf2, 400)
    l2 += 1
  }

  function dibujarLinea2(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo2.beginPath()
    lienzo2.strokeStyle = color
    lienzo2.moveTo(xinicial, yinicial)
    lienzo2.lineTo(xfinal, yfinal)
    lienzo2.stroke()
    lienzo2.closePath()
  }

  //alert("No me toques ahí");
  console.log(lienzoAncho)
}
