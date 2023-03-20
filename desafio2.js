constructor(){
    this.courses = []
}

static baseProfitPrice = 1.15;

getCourses(){
    return this.courses;
}

addCourse(course, topic, price){
    const newCourse = {
      course,
      topic,
      price: `${price * EcologicSchool.baseProfitPrice}`, //template string
      capacity: 50,
      date: new Date(),
      participants: [],
      id: this.getCourses().length + 1
    }

    this.courses.push(newCourse);
    return this.courses;
}

getCourse(id_course){
    let course = this.courses.find(course => course.id === id_course)

    if(course){
        return course;
    }else{
        return null
    }
}

isRegistered(id_course, id_user){
    let course = this.getCourse(id_course);
    if(course == null){
        return 'The course does not exist';
    }
    let registration = course.participants.find(idParticipant => idParticipant === id_user)        
    if(registration == null){
        return true
    }else{
        return false
    }

}

addUser(id_course, id_user){
    let course = this.getCourse(id_course);
    if(course == null){
        return 'The course does not exist';
    }
    if(this.isRegistered(id_course,id_user)){
        course.participants.push(id_user)
        return course;
    }else{
        return 'The person is already registered'
    }
}

putCourseOnTour(id_course, nLocation, nDate){
    let course = this.getCourse(id_course);
    let courseCount = (this.getCourses()).length;

    if(!course){
        return 'The course does not exist';
    }
    let newCourse = {...course};
    newCourse.topic = nLocation;
    newCourse.date = nDate;
    newCourse.id = ++courseCount;
    newCourse.participants = []
    this.courses.push(newCourse)
    return this.courses
}

Spanish_Course_Organizer


tristanlgb@yahoo.com
please translate all the words in spanish into english in this code

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

class EcologicSchool {

kotlin
Copy code
constructor(){
    this.courses = []
}

static baseProfitPrice = 1.15;

getCourses(){
    return this.courses;
}

addCourse(course, topic, price){
    const newCourse = {
      course,
      topic,
      price: `${price * EcologicSchool.baseProfitPrice}`, //template string
      capacity: 50,
      date: new Date(),
      participants: [],
      id: this.getCourses().length + 1
    }

    this.courses.push(newCourse);
    return this.courses;
}

getCourse(id_course){
    let course = this.courses.find(course => course.id === id_course)

    if(course){
        return course;
    }else{
        return null
    }
}

isRegistered(id_course, id_user){
    let course = this.getCourse(id_course);
    if(course == null){
        return 'The course does not exist';
    }
    let registration = course.participants.find(idParticipant => idParticipant === id_user)        
    if(registration == null){
        return true
    }else{
        return false
    }

}

addUser(id_course, id_user){
    let course = this.getCourse(id_course);
    if(course == null){
        return 'The course does not exist';
    }
    if(this.isRegistered(id_course,id_user)){
        course.participants.push(id_user)
        return course;
    }else{
        return 'The person is already registered'
    }
}

putCourseOnTour(id_course, nLocation, nDate){
    let course = this.getCourse(id_course);
    let courseCount = (this.getCourses()).length;

    if(!course){
        return 'The course does not exist';
    }
    let newCourse = {...course};
    newCourse.topic = nLocation;
    newCourse.date = nDate;
    newCourse.id = ++courseCount;
    newCourse.participants = []
    this.courses.push(newCourse)
    return this.courses
}


const ecologicSchool = new EcologicSchool();

ecologicSchool.addCourse('Solar Energy', 'energy', 100);
let courses = ecologicSchool.addCourse('Organic Food', 'food', 150);

console.log(ecologicSchool.getCourse(1))

console.log(courses);

console.log(ecologicSchool.addUser(1,1))
console.log(ecologicSchool.addUser(1,1))
console.log(ecologicSchool.addUser(2,1))
console.log(ecologicSchool.addUser(1,2))