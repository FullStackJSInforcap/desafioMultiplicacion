function multiplicacion() {
    /* Pedir un número */
    let numero = parseInt(prompt('Ingrese un número: '));
    /* Valido que se encuentre entre 1 y 20 */
    if (numero >= 1 && numero <= 20) {
        /* Calcular tabla */
        tablaMultiplicar(numero);
        /* Calcular factorial */
        factorial(numero);
    } else {
        // mensaje de error
        console.log('No está entre 1 y 20');
    }
}

function tablaMultiplicar(numeroRecibido){
    for (let i = 1; i <= numeroRecibido; i++) {
        console.log(`${i} * ${numeroRecibido} = ${i * numeroRecibido}`);
    }
}

function factorial(numeroRecibido){
    for (let i = 1; i <= numeroRecibido; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial = factorial * j;
        }
        console.log(`El factorial de ${i} es ${factorial}`);
    }
}

multiplicacion();













/* if (numero > 20 || numero < 1) {
    // mensaje de error
} else {
    // cálculos en general
} */



