//variables
//let nombre = "coderhouse";
//console.log(nombre);
//let numDeAlumnos = 181;
///console.log(numDeAlumnos);
//let enCurso= true;
//console.log(enCurso);
//tipos de datos
//numeros
//strings cadena de caracteres
//booleanos
/*function evaluacConsulta(confirmacion) {
    let continuar = prompt(`Quiere Hacer otra consulta de ranking?`);
    confirmacion=continuar;
    return confirmacion;
}*/
/*let decision = prompt(`Quiere Chequear su ventana de canje?`)
if (decision === "si") {
    chequeoVentana();
} else {
    alert('Adios!')
}*/
function chequeoVentana(ventana) {
    let puntos = Number(prompt(`¿Que rango de puntos te encontras?:
    1. 0 a 999
    2. 999 a 1200
    3. 1200 a 1555`));
    switch (puntos) {
        case 1:
            alert(`Tu día de canje es el lunes`)
            break;
        case 2:
            alert(`Tu día de canje es el martes`)
            break;
            case 3:    
            alert(`Tu día de canje es el lunes`)
            break;
        default:
            alert(`ingrese correctamente su rango`)
            break;
        }
    ventana=puntos;
    return alert(`Te encuentras en el rango de puntos:`+ ventana +' '+ `sigue sumando para tener mejor posicionamiento` )   
}
let socio = prompt(`¿Sos socio del club y queres saber tu ranking?`);
while (socio === "si") {
    chequeoVentana();
    socio = prompt("Quieres consultar de nuevo?");
}
alert(`adios!`)
