let actual = 2080;
let nacimiento = prompt();

let calcularEdad = function(){
    edad = actual - nacimiento;
    //document.write(edad);
    return(edad);
};
console.log(calcularEdad()); 