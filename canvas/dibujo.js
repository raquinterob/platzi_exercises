let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");

dibujarLinea("red",10,300,220,10);
dibujarLinea("gray",310,10,10,220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

let d2 = document.getElementById("dibujito2");
let lienzo2 = d2.getContext("2d");
let colorLineas2 = "#000";
let lineas2 = 40;
let l2 = 0;
let yi2, xf2;


dibujarLinea2(colorLineas2,1,1,1,400);
dibujarLinea2(colorLineas2,1,399,399,399);

while(l2 < lineas2) {
    yi2 = 10 * l2;
    xf2 = 10 * (l2 + 1); 
    dibujarLinea2(colorLineas2,0,yi2,xf2,400);
    l2 += 1;
}

function dibujarLinea2(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo2.beginPath();
    lienzo2.strokeStyle = color;
    lienzo2.moveTo(xinicial,yinicial);
    lienzo2.lineTo(xfinal,yfinal);
    lienzo2.stroke();
    lienzo2.closePath();
}


let d3 = document.getElementById("dibujito3");
let lienzo3 = d3.getContext("2d");
let h3 = 270;
let colorLineas3 = "hsl("+h3+",100%,50%)";
let lineas3 = 40;
let yi3, xf3;

dibujarLinea3(colorLineas3,1,1,1,399);
dibujarLinea3(colorLineas3,1,399,399,399);
dibujarLinea3(colorLineas3,399,399,399,1);
dibujarLinea3(colorLineas3,399,1,1,1);

for(l3 = 0; l3 < lineas3; l3++) {
    h3 += 9;
    colorLineas3 = "hsl("+h3+",100%,50%)";

    yi3 = 10 * l3;
    xf3 = 10 * (l3 + 1);
    dibujarLinea3(colorLineas3,1,yi3,xf3,399);
    dibujarLinea3(colorLineas3,1,(399 - yi3),xf3,1);
    dibujarLinea3(colorLineas3,xf3,1,399,yi3);
    dibujarLinea3(colorLineas3,xf3,399,399,(399 - yi3));
}

function dibujarLinea3(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo3.beginPath();
    lienzo3.strokeStyle = color;
    lienzo3.moveTo(xinicial,yinicial);
    lienzo3.lineTo(xfinal,yfinal);
    lienzo3.stroke();
    lienzo3.closePath();
}
