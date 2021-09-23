hljs.highlightAll();


const fnClaseSeis = () =>{
    setTimeout(() => {

        let alumnos = [];
        let condicion = [];
        let totalNotasAlumno = 3;
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
        const alumno3 = new Promedio('Bonilla', 3, 8, 5);
        const alumno4 = new Promedio('Maximiliano', 4, 3, 5);
        const alumno5 = new Promedio('Estoncio', 5, 1, 5);
        const alumno6 = new Promedio('Presco', 1, 1, 1);
        const alumno7 = new Promedio('Pronto', 1, 3, 2);
        /*
        alert('La Condicion de los alumnos es: '
            + '\n' + alumno1.obtenerCondicion()
            + '\n' + alumno2.obtenerCondicion()
            + '\n' + alumno3.obtenerCondicion())
        */

        /// Comienza la parte de Arrays.

        alumnos.push(alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7);

        let nombresAlumnos = alumnos.map(data => data.alumno);
        let nombresCsv = nombresAlumnos.join(', ');

        for (const Promedio of alumnos) {
            let alumnoConPromedio =
            {
                Alumno: Promedio.nombreAlumno,
                Promedio: Promedio.obtenerPromedio
            }
            condicion.push(alumnoConPromedio)
        }

        let alumnosAprobados = condicion.filter(x => x.Promedio >= 4);
        let nombresAlumnosAprobados = alumnosAprobados.map(x => x.Alumno);
        
        


        console.log(`Los Alumnos son: ${nombresCsv}`);
        console.log(...condicion);

        console.log(`La cantidad de aprobados es: ${alumnosAprobados.length} sobre un total de ${alumnos.length}`);
        console.log(`Los alumnos aprobados son ${nombresAlumnosAprobados}`);

        ///////Comienza la parte de Ordenar Arrays//////////
        console.log('');
        console.log('Ej. Complementario. Arrays Ordenados');
        console.log('');

        console.log('Lista de Alumnos ordenada alfabeticamente = ' + nombresAlumnosAprobados.sort());
        
        let orderNotasDesc = condicion.sort((a,b)=>{

            return (b.Promedio-a.Promedio);
        })
        
        console.log('Lista ordenada por promedios de mayor a menor');
        console.log(orderNotasDesc);
        

        
       


    }, 1500);





    window.location.href = '#preCode';




}
