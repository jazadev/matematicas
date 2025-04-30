/*
* Función suma
*/
function sumar(a, b) {
    return a + b;
}

/*
* Función resta
*/
function restar(a, b) {
    return a - b;
}

/** 
 * Función multiplicar
 */
function multiplicar(a, b) {
    return a * b;
}

/**
 * Función Dividir
 * @param {F} a 
 * @param {*} b 
 * @returns 
 */
function dividir(a, b) {
    if (b === 0) throw new Error("División por cero");
    return a / b;
}