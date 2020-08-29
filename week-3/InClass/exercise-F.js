let anios = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
function calcularEdad(anio) {
    return 2020 - anio;
}

let edades = anios.map(calcularEdad);

console.log(edades);