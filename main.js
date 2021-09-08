const fnClaseTres = () => {

    let fin = 3;
    let vocalIntriga = 'u';

    for (let inicio = 0; inicio < fin; inicio++) {

        if (inicio == 0) {
            alert('Adivine la Vocal\nIngrese solo una Letra');
        }

        let ingresoLetra = prompt(`Intentos Restantes ${fin - inicio}\n Ingrese una Letra`);

        ingresoLetra = ingresoLetra.toLocaleLowerCase();

        let longitud = ingresoLetra.length;

        while (longitud == 1) {

            switch (ingresoLetra) {
                case vocalIntriga: 
                    alert('Adivinaste, la vocal era: ' + vocalIntriga);
                    inicio = fin;
                    ingresoLetra = null;
                    longitud = null;
                    break;

                default:
                    ingresoLetra = null;
                    longitud = null;
                    if ((inicio == fin - 2))
                        alert('Ultimo Intento se que tu puedes!');
                    else if ((inicio == fin - 1)) {
                        alert('Ha, fallado, intenta nuevamente');
                    }
                    break;
            }

        }

    }

}










const fnClaseDos = () => {

    let edad = prompt('Pagina para mayores de 18\n Ingrese su edad ');

    if (parseInt(edad) >= 18) {
        let sexo = prompt('Indique su sexo con una Letra');
        if (sexo.toLocaleLowerCase() == 'f') {
            alert('Bienvenida !!!');
        }
        else if (sexo.toLocaleLowerCase() == 'm') {
            alert('Bienvenido !!!');
        }
        else {
            alert('Hola !!!');
        }
    }
    else {
        alert('Menor de 18, cierre el sitio');
    }
}



const fnClase = () => {
    const dateJS = new Date();
    const añoActual = dateJS.getFullYear();

    let nombre = prompt('Ingresa tu nombre: ');
    let edad = prompt('Ingresa tu edad: ');

    console.log(`Hola ${nombre} dentro de 10 años vas a tener ${(parseInt(edad)) + 10}`);
    console.log(`Hola ${nombre} naciste en el año ${añoActual - (parseInt(edad))}`)
};


//let numero = prompt('Ingrese un numero')

/*
numero = parseInt(numero)

for (let i = 0; i < numero; i++) {
    console.log('Hola')
}
*/



