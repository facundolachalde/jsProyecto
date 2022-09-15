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
/*function chequeoVentana(ventana) {
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
alert(`adios!`)*/
const productos = [
    {nombre: "Prenda Ruge Original Titular", precio: 6500, id:"1"},
    {nombre: "Prenda Ruge Original Suplente", precio: 6500, id:"2"},
    {nombre: "Prenda Ruge Original Alternativa", precio: 6500, id:"3" },
    {nombre: "Prenda Ruge Original Gorra", precio: 500, id:"4" },
    {nombre: "Prenda Ruge Original Short", precio: 2500, id:"5"},
];
let carrito = []
let seleccion = prompt("Bienvenido al store oficial de estudiantes de la plata, ¿Desea comprar algo?")
while(seleccion != "si" && seleccion != "no"){
    alert("Su respuesta es invalida, por favor, responda con si o con no")
    seleccion = prompt("¿Usted desea comprar algo?")
}
if(seleccion == "si"){
    alert("Bienvenido, Este es nuestro stock actual")
    let StockTotal = productos.map((productos) => productos.nombre + " " + productos.precio + "$");
    alert(StockTotal.join(" - "))
} else if (seleccion == "no"){
    alert("Hasta la proxima!")
}
while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0
    
    if(producto === "Prenda Ruge Original Titular" || producto === "Prenda Ruge Original Suplente" || producto === "Prenda Ruge Original Alternativa" || producto === "Prenda Ruge Original Gorra" || producto === "Prenda Ruge Original Short"){
        switch (producto){
            case "Prenda Ruge Original Titular":
                precio = 6500;
                break;
            case "Prenda Ruge Original Suplente":
                precio = 6500;
                break;
            case "Prenda Ruge Original Alternativa":
                precio = 6500;
                break;
            case "Prenda Ruge Original Gorra":
                precio = 500;
                break;
            case "Prenda Ruge Original Short":
                precio = 2500;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("ingrese la cantidad de unidades"))
    
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("no hay stock disponible del producto")
    }
    seleccion = prompt("Desea Agregar Algo Mas?")
    while(seleccion == "no"){
        alert("Gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            console.log( `producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`el total a pagar es ${total}`)