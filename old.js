//EJERCICIOS ANTERIORES
const fnClaseCinco = () =>{
let totalNotasAlumno = 3
class Promedio {
    constructor(alumno, notaUno, notaDos, notaTres) {
        this.alumno = alumno;
        this.notaUno = Number(notaUno);
        this.notaDos = Number(notaDos);
        this.notaTres = Number(notaTres);

    } get nombreAlumno() {
        return this.alumno;
    }

    get obtenerPromedio() {
        return ((this.notaUno + this.notaDos + this.notaTres) / totalNotasAlumno);
    }

    obtenerCondicion() {
        let promedio = ((this.notaUno + this.notaDos + this.notaTres) / totalNotasAlumno);
        if (promedio < 4) {
            return `El alumno ${this.nombreAlumno} Recursa, su promedio fue: ${this.obtenerPromedio}`
        }
        else {
            return `El alumno ${this.nombreAlumno} Promuebe, su promedio fue ${this.obtenerPromedio}`
        }
    }
}

const alumno1 = new Promedio('Leandro', 8, 2, 5);
const alumno2 = new Promedio('Raul', 7, 3, 4);
const alumno3 = new Promedio('Bonilla', 2, 2, 5);

alert('La Condicion de los alumnos es: '
    + '\n' + alumno1.obtenerCondicion()
    + '\n' + alumno2.obtenerCondicion()
    + '\n' + alumno3.obtenerCondicion())
    
}


const fnClaseCuatroComp = () => {

    window.location.href='#preCode4Comp';

    setTimeout(() => {
        

        let presupuestoInicial  =  parseInt(prompt('Calculo de Presupuesto para Empleados\nIngrese el monto del Presupuesto Inicial'));
        let empleados = parseInt(prompt('Ingrese la cantidad de empleados'));
        let salario = parseInt(prompt('Ingrese el salario del empleado'));
        let gastoTotalEmpleados=0;
        let impuestosEmpelado=0.20;
        let balance=true;
    
            const validacionBalance = () => 
        {
            if ((presupuestoInicial-(salario*empleados))<0)
            balance=false;
            return;
        }
    
        validacionBalance()
    
        const fnGastoEmpleados = (sueldo, empleados) =>  {
            let resultado=(sueldo*empleados);
            gastoTotalEmpleados=resultado;
            return resultado;
        }
    
        const fnValidarGasto= (gastoTotalEmpleados, presupuestoInicial) =>  {
            let diferencia=0
    
            let resultado=(presupuestoInicial-gastoTotalEmpleados)
            if (resultado < 0){
                
                diferencia=(gastoTotalEmpleados-presupuestoInicial)
                  return ( 'Erronea!, El gasto de empleados excede su presupuesto por $' + diferencia +'\nNecesita un presupuesto de: $' +(presupuestoInicial+diferencia)  )
            }else{
                return ('Exitosa!, Su presupuesto alcanza. \nLuego de pagar el sueldo inicial su presupuesto restante es de $' +resultado )
            }
    
        }
    
        const fnCalculoImpuestos=(sueldo, empleados) => {
            let totalImpuestoEmpleado=(sueldo*empleados);
            totalImpuestoEmpleado=(totalImpuestoEmpleado*impuestosEmpelado);
            return totalImpuestoEmpleado ;
        }
    
    
        if (presupuestoInicial>0 && empleados>0 && salario >0)
        {
            console.log(balance + 'fin')
            if  (balance){
                 alert(
                    'Su presupuesto fue de: $' + presupuestoInicial
                    +'\nEl Gasto Total de Empleados es: $'+ fnGastoEmpleados(salario, empleados)
                    +'\nSu validacion de gasto fue: ' + fnValidarGasto(gastoTotalEmpleados, presupuestoInicial)
                    +'\nEl impuesto a pagar por empleado es de $' +  fnCalculoImpuestos(salario,empleados)
                    +'\nEl impuesto total de empleados es: $'+(fnCalculoImpuestos(salario,empleados)*empleados)
                 )
            }
            else{           
            alert(
                'Su presupuesto fue de: $' + presupuestoInicial
                +'\nEl Gasto Total de Empleados es: $'+ fnGastoEmpleados(salario, empleados)
                +'\nSu validacion de gasto fue: ' + fnValidarGasto(gastoTotalEmpleados, presupuestoInicial)
             )
               }
            
        }
        else alert('Presupuesto, Empleados o Salario no puede ser 0')


    }, 1500);

   

}


const fnClaseCuatro = () => {

    window.location.href='#preCode4';

    setTimeout(() => {
        let montoProducto = parseInt(prompt('Ingrese el monto del Producto'));

    if (montoProducto > 0 )
    {
    let cuotas = parseInt(prompt('Ingrese la cantidad de Cuotas'));
    const caculoCuotas = (monto, cuotas)  => {
        let valorCuota = parseFloat((monto/cuotas));
        return valorCuota;
    }
    
    alert('El valor de cada cuota es $' + caculoCuotas(montoProducto,cuotas));
    }
    else{
        alert('Monto debe ser > a $0 o un valor numerico');
    }
    }, 1500);

    
}







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


