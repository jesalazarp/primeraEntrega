let {cursos,imprimirCursos} = require('./cursos');
const fs = require('fs');
const opciones = {
    id:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'x'
    }
}

const argv = require('yargs')
            .command('inscribir', 'inscribir estudiante a curso', opciones)
            .argv

 let inscribirACurso = (nombre, cedula, curso) => {
    texto = 'El estudiante ' + nombre + ' con cedula ' + cedula + 
    ' se ha inscrito  ' + curso.id + ' '+ curso.nombre;
fs.writeFile('archivoInscripcion.txt', texto, (err) => {
if (err) throw (err);
    console.log('se ha creado el archivo');
})  

 }

if (argv._.length == 0){
    imprimirCursos(cursos,2000);
} else {
    if (argv._[0] == 'inscribir'){
        let id = argv.i;
        let nombre = argv.n;
        let cedula = argv.x;
        let curso = cursos.find(curso => curso.id == id)
        if (curso == undefined){
            console.log('No existe curso con id '+ id);
            imprimirCursos(cursos,0);
        } else {
            inscribirACurso(nombre, cedula, curso);
        }
        
    } else {
        console.log('comando invalido');
    }
}
