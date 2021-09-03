

const fnClase = () => {
    const dateJS = new Date();
    const añoActual = dateJS.getFullYear();
    
    let nombre = prompt('Ingresa tu nombre: ');
    let edad =   prompt('Ingresa tu edad: '); 
    
    console.log(`Hola ${nombre} dentro de 10 años vas a tener ${(parseInt(edad))+10}`);
    console.log(`Hola ${nombre} naciste en el año ${añoActual-(parseInt(edad))}`)};

   
const fnClaseDos = () => {
   
    let edad = prompt('Pagina para mayores de 18\n Ingrese su edad ');
    
    if ( parseInt(edad) >= 18)
    {
        let sexo = prompt( 'Indique su sexo con una Letra' );
            if ( sexo.toLocaleLowerCase()=='f' ) {
                alert('Bienvenida !!!');
                     }
                else if ( sexo.toLocaleLowerCase()=='m' )
                {
                    alert('Bienvenido !!!');
                         }
                 else 
                {
                    alert('Hola !!!');
                         }
    }
    else{
        alert('Menor de 18, cierre el sitio');
    }

}
