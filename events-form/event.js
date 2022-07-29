let calcularEdad = function () {
  edad = actual - parseInt(nacimiento.value)
  respuesta.innerText = `Naciste en ${edad}`
  //return(edad)
}

let actual = 2022
//let nacimiento = prompt('¿En que año naciste?')
let nacimiento = document.getElementById('nacimiento')
let btnEnviar = document.getElementById('btnEnviar')
btnEnviar.addEventListener('click', calcularEdad)

let respuesta = document.getElementById('respuesta')

calcularEdad()
