const fnClaseCinco = () =>{
    setTimeout(() => {
        

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
    
    }, 1500);
    window.location.href='#preCode4Comp';



}