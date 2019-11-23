let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");

dibujarLinea("pink",10,300,220,10);
dibujarLinea("yellow",310,10,10,220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
