let cursos = [
{
    id: 10,
    nombre: 'scrum',
    duracion:'40 horas',
    valor:1000000
},
{
    id: 20,
    nombre: 'angular2',
    duracion:'80 horas',
    valor:1500000
},
{
    id: 30,
    nombre: 'nodeJS',
    duracion:'40 horas',
    valor:1200000
}
]

let imprimirCurso = (c) => {
    console.log('Id: ' + c.id + ', nombre: '+ c.nombre + ' con duración de ' + c.duracion + ' y un costo de $' + c.valor);
}



let imprimirCursosAux = (cursos, i, delay, callback) => {
    if (i< cursos.length) {
        setTimeout(function(){
            imprimirCurso(cursos[i]);
            callback(cursos,i+1,delay, callback);
        },delay);
        
    }

}   
let imprimirCursos = (cursos, delay) => imprimirCursosAux(cursos, 0, delay, imprimirCursosAux);


module.exports = {
    cursos,
    imprimirCursos
};

