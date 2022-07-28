var d = document.getElementById('dibujo');

var lienzo = d.getContext("2d");

function makeLine(color, xi, yi, xf, yf)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo(xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}


for(var i = 0; i < 30; i=i+1)
{
	makeLine("white", 300, i*10, 300-(i*10), 300);
	console.log("i vale : " + i);
}

/*
makeLine("white", 300, 0, 200, 300);
	makeLine("white", 300, 10, 190, 300);
	makeLine("white", 300, 20, 180, 300);
	*/

var f = 0;

while (f< 30)
{
	makeLine("darkred", 300-(f*10), 0, 0, f*10);

	f=f+1;

	console.log("valor de f es: " + f);
}

/*
makeLine("darkred", 300, 0, 0, 0);
makeLine("darkred", 290, 0, 0, 10);
makeLine("darkred", 280, 0, 0, 20);
makeLine("darkred", 270, 0, 0, 30);
makeLine("darkred", 260, 0, 0, 40);
*/

makeLine("darkgreen", 300, 0, 0, 300);
makeLine("darkgreen", 0, 0, 300, 300);
makeLine("darkgreen", 150, 0, 150, 300);
makeLine("darkgreen", 0, 150, 300, 150);

var j = 0;

while(j < 30)
{
	makeLine("orange", 140, j*10, 140-(j*10), 300);

	j++;

	console.log("j es: " + j);
}

/*
makeLine("orange", 150, 0, 150, 300);
makeLine("orange", 150, 0, 140, 300);
makeLine("orange", 150, 0, 130, 300);
makeLine("orange", 150, 0, 120, 300);

*/



for(var w = 0; w < 30; w=w+1)
{
	makeLine("yellow", 160, w*10, 160+(w*10), 300);

	console.log(w);
}



/*
makeLine("purple", 160, 0, 300, 300);
makeLine("purple", 160, 10, 290, 300);
makeLine("purple", 160, 20, 280, 300);
makeLine("purple", 160, 30, 270, 300);

*/