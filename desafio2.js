class EcologicSchool {

    constructor(){
        this.cursos = []
    }

    static precioBaseDeGanancia = 1.15;

    getCursos(){
        return this.cursos;
    }

    agregarCurso(clase, tematica, precio){
        const nuevoCurso = {
          clase,
          tematica,
          precio: `${precio * EcologicSchool.precioBaseDeGanancia}`, //template string
          capacidad: 50,
          fecha: new Date(),
          participantes: [],
          id: this.getCursos().length + 1
        }


        this.cursos.push(curso);
        return this.cursos;
    }

    traerCurso(id_curso){
        let curso = this.cursos.find(curso => curso.id === id_curso)

        if(curso){
            return curso;
        }else{
            return null
        }
    }

    estaRegistrado(id_curso, id_usuario){
        let curso = this.traerCurso(id_curso);
        if(curso == null){
            return 'El curso no existe';
        }
        let registro = curso.participantes.find(idParticipante => idParticipante === id_usuario)        
        if(registro == null){
            return true
        }else{
            return false
        }

    }

    agregarUsuario(id_curso, id_usuario){
        let curso = this.traerCurso(id_curso);
        if(curso == null){
            return 'El curso no existe';
        }
        if(this.estaRegistrado(id_curso,id_usuario)){
            curso.participantes.push(id_usuario)
            return curso;
        }else{
            return 'La persona ya está registrada'
        }
    }

    ponerCursoEnGira(id_curso, nLocalidad, nFecha){
        let curso = this.traerCurso(id_curso);
        let contCursos = (this.getCursos()).length;

        if(!curso){
            return 'El curso no existe';
        }
        let nuevoCurso = {...curso};
        nuevoCurso.tematica = nLocalidad;
        nuevoCurso.fecha = nFecha;
        nuevoCurso.id = ++contCursos;
        nuevoCurso.participantes = []
        this.cursos.push(nuevoCurso)
        return this.cursos
    }
}

const ecologicSchool = new EcologicSchool();

ecologicSchool.agregarCurso('Energia Solar', 'energia', 100);
let cursos = ecologicSchool.agregarCurso('Alimentacion Organica', 'alimentacion', 150);

console.log(ecologicSchool.traerCurso(1))

console.log(cursos);

console.log(ecologicSchool.agregarUsuario(1,1))
console.log(ecologicSchool.agregarUsuario(1,1))
console.log(ecologicSchool.agregarUsuario(2,1))
console.log(ecologicSchool.agregarUsuario(1,2))
