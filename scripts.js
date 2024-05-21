"use strict"

// Clase 03
/*  Ejercicio_1

let edad = parseInt(prompt("Ingrese su edad"));
if (isNaN(edad) || edad <= 0) {
    document.write("Debe ser un numero y ser mayor a 0");
} else if (edad > 18) {
    document.write("Es mayor de edad");
} else {
    document.write("Es menor de edad")
}

    Ejercicio_2
let numero = parseInt(prompt("Ingrese un numero"));

if (isNaN(numero) || numero == 0) {
    document.write("Debe ser un numero y no puede ser 0");
}else if (numero < 0) {
    document.write("el numero es negativo <br>");
    if ( numero % 2 == 0) {
        document.write ("El numero es par");
    } else {
        document.write("El numero es impar");
    }
}else {
    document.write("El nuero es positivo <br>");
    if ( numero % 2 == 0) {
        document.write("El numero es par");
    } else {
        document.write("El numero es impar");
    }
}

    Ejercicio_3
let numero1 = parseInt(prompt("Ingresar primer numero"));
let numero2 = parseInt(prompt("Ingresar segundo numero"));

if (isNaN(numero1) || isNaN(numero2)) {
    document.write("Debe ser un numero ");
}else if (numero1 == numero2) {
    document.write(`Los numeros ${numero1} y ${numero2} son iguales`);
    } else if (numero1 < numero2) {
        document.write(`el numero ${numero1} es menor que el numero ${numero2}`);
    } else {
        document.write(`el numero ${numero2} es menor que el numero ${numero1}`);
    }

    Ejercicio_4
for(let i = 1; i <= 10; i++) {
    document.write(i+"<br>");
}

    Ejercicio_5
let numero = parseInt(prompt("Ingresar un numero mayor a 0"));

if (isNaN(numero) || numero < 1) {
    document.write("Debe ser un numero y ser mayor a 0");
}else {
    let i = 1;
    while (i <= numero) {
        document.write(i+"<br>");
        i++;
    }
}

    Ejercicio_6
let i = 11;
do {
    i--;
    document.write(i+"<br>");
    
} while (i > 1);

    Ejercicio_7
TEMP_MAX = 40;
let numero = parseInt(prompt(`Ingresar un numero menor a ${TEMP_MAX}`));

if (numero < TEMP_MAX) {
    document.write("La temperatura no supera la temperatura maxima")
} else {
    document.write("La temperatura supera la temperatura maxima")
}

    Ejercicio_8
let edad = parseInt(prompt("Ingrese su edad"));
if (isNaN(edad) || edad < 1) {
    document.write("Debe ser un numero y ser mayor a 0");
}else if (edad < 13) {
    document.write("Es un niño");
}else if (edad >= 13 && edad <= 19) {
    document.write("Es un adolecente");
}else {
    document.write("Es un adulto");
}

    Ejercicio_9
for(let i = 1; i <=20; i++){
    if(i % 2 == 0){
        document.write(i+"<br>");
    }
}

    Ejercicio_10
let numero = parseInt(prompt("Ingrese su edad"));
if (isNaN(numero) || numero < 1) {
    document.write("Debe ser un numero y ser mayor a 0");
} else {
    while (numero >= 1) {
        document.write(numero+"<br>");
        numero--;
    }
}

    Ejercicio_11
let numero = 5;
do {
    resultado = numero * 5;
    document.write("5 X " + numero +" = "+ resultado +"<br>");
    numero++;
}while(numero <= 50)

    Ejercicio_12
let numero1 = 50;
let numero2 = 60;

if(numero1 < numero2) {
    document.write(numero1 +" es menor que "+ numero2);
} else {
    document.write(numero1 +" es mayor que "+ numero2)
}

    Ejercicio_13
let numero1 = parseInt(prompt("Ingrese el 1 numero"));
let numero2 = parseInt(prompt("Ingrese el 2 numero"));
let numero3 = parseInt(prompt("Ingrese el 3  numero"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    document.write("Debe ser un numero");
} else if(numero1 < numero2) {
    if(numero2 < numero3){
        document.write(numero3 +" es el mayor");
    } else {
        document.write(numero2 +" es el mayor");
    }
} else if(numero1 < numero3){
    document.write(numero3 +" es el mayor");
}else {
    document.write(numero1 +" es el mayor");
}

    Ejercicio_14
for(let i = 0; i <= 100; i++) {
    if(i %3 == 0){
        document.write(i+"<br>");
    }
}

    Ejercicio_15
let numero = parseInt(prompt("Ingrese un numero"));
if (isNaN(numero) || numero == 0) {
    document.write("Debe ser un numero y no puede ser 0");
} else {
    let  i = 1;
    while (i <= numero *2 ) {
        document.write(i+"<br>");
        i++
    }
}

    Ejercicio_16
let i = 1;
do {
    if(i %2 != 0){
        document.write(i+"<br>");
    }
    i++;
} while (i <= 25)

    Ejercicio_17
let dia = prompt("Ingrese un dia de la semana");
switch (dia.toUpperCase()){
    case "LUNES":
        document.write(dia +" Es dia laboral");
        break;
    case "MARTES":
        document.write(dia +" Es dia laboral");
        break;
    case "MIERCOLES":
        document.write(dia +" Es dia laboral");
        break;
    case "JUEVES":
        document.write(dia +" Es dia laboral");
        break;
    case "VIERNES":
        document.write(dia +" Es dia laboral");
        break;
    case "SABADO":
        document.write(dia +" Es dia Descanso");
        break;
    case "DOMINGO":
        document.write(dia +" Es dia Descanso");
        break;
    default:
        document.write("Debe ingresar un dia valido");
        break;
}

    Ejercicio_18
let dia = parseInt(prompt("Ingrese un numero de 1 a 7 "));
if (isNaN(dia)) {
    document.write("Debe ser un numero");
} else {
    switch (dia){
        case 1:
            document.write(dia +" Es dia Domingo");
            break;
        case 2:
            document.write(dia +" Es dia Lunes");
            break;
        case 3:
            document.write(dia +" Es dia Martes");
            break;asdf
        case 4:
            document.write(dia +" Es dia Miercoles");
            break;
        case 5:
            document.write(dia +" Es dia Jueves");
            break;
        case 6:
            document.write(dia +" Es dia Viernes");
            break;
        case 7:
            document.write(dia +" Es dia Sabado");
            break;
        default:
            document.write("Debe ingresar un dia valido, rango de 1 a 7");
            break;
    }
}

    Ejercicio_19
let mes = prompt("Ingrese un mes");
switch (mes.toUpperCase()){
    case "ENERO":
        document.write(dia +" tiene 31 días");
        break;
    case "FEBRERO":
        document.write(dia +" tiene 29 días");
        break;
    case "MARZO":
        document.write(dia +" tiene 31 días");
        break;
    case "ABRIL":
        document.write(dia +" tiene 30 días");
        break;
    case "MAYO":
        document.write(dia +" tiene 31 días");
        break;
    case "JUNIO":
        document.write(dia +" tiene 30 días");
        break;
    case "JULIO":
        document.write(dia +" tiene 31 días");
        break;
    case "AGOSTO":
        document.write(dia +" tiene 31 días");
        break;
    case "SEPTIEMBRE":
        document.write(dia +" tiene 30 días");
        break;
    case "OCTUBRE":
        document.write(dia +" tiene 31 días");
        break;
    case "NOVIEMBRE":
        document.write(dia +" tiene 30 días");
        break;
    case "DICIEMBRE":
        document.write(dia +" tiene 31 días");
        break;
    default:
        document.write("Debe ingresar un mes valido");
        break;
}

    Ejercicio_20
let mes = parseInt(prompt("Ingrese un numero de 1 a 12 "));
if (isNaN(mes)) {
    document.write("Debe ser un numero");
} else {
    switch (mes){
        case 1:
            document.write(mes +" es ENERO");
            break;
        case 2:
            document.write(mes +" es FEBRERO");
            break;
        case 3:
            document.write(mes +" es MARZO");
            break;
        case 4:
            document.write(mes +" es ABRIL");
            break;
        case 5:
            document.write(mes +" es MAYO");
            break;
        case 6:
            document.write(mes +" es JUNIO");
            break;
        case 7:
            document.write(mes +" es JULIO");
            break;
        case 8:
            document.write(mes +" es AGOSTO");
            break;
        case 9:
            document.write(mes +" es SEPTIEMBRE");
            break;
        case 10:
            document.write(mes +" es OCTUBRE");
            break;
        case 11:
            document.write(mes +" es NOVIEMBRE");
            break;
        case 12:
            document.write(mes +" es DICIEMBRE");
            break;
        default:
            document.write("Debe ingresar un numero valido entre el rango 1 a 12");
            break;
    }
}


    Clase04

    Ejercicio_01
let mensaje = "aprendiendo a programar";

    Ejercicio_02
function saludar (mensaje) {
    console.log(mensaje);
}
    
    Ejercicio_03
saludar(mensaje);

    Ejercicio_04
function sumar (n1,n2) {
    return n1 + n2;
}

    Ejercicio_05
console.log(sumar(5,8));

    Ejercicio_06
function multiplicar (n1, n2, n3) {
    return n1 + n2;
}

    Ejercicio_07
console.log(multiplicar(2,2,3));

    Ejercicio_08
const cuadrado = function (n1) {
    return n1 **2;
}

    Ejercicio_09
console.log(cuadrado(5));

    Ejercicio_10
const esPar = (n1)=> {
    if (n1 %2 == 0) {
        console.log(n1 +" Es un numero par");
    } else {
        console.log(n1 +" Es un numero impar");
    }
}

    Ejercicio_11
esPar(10);

    Ejercicio_12
const generica = ()=> {
    let contador = 5;
}

    Ejercicio_13
console.log(contador);

    Ejercicio_14
const saludarNombre = (nombre)=> {
    console.log("Hola "+ nombre + " como te encuentras");
}

    Ejercicio_15
saludarNombre("johan");

    Ejercicio_16
const calcularAreaRectangulo = (base, altura) => { 
    return base * altura;
}

    Ejercicio_17
console.log(calcularAreaRectangulo(10,5));

    Ejercicio_18
const numeroMayor = (n1, n2) => {
    if (n1 > n2 ){
        return n1;
    }else {
        return n2;
    }
}

    Ejercicio_19
console.log(numeroMayor(10, 15) + " Es el numero mayor" );

    Ejercicio_20
let doble = (n)=> {
    return n += n;
}

    Ejercicio_21
console.log(doble(10));

    Ejercicio_22
const areaTriangulo = (base, altura)=>{
    return (base * altura) / 2;
}

    Ejercicio_23
console.log(areaTriangulo(5,10));

    Ejercicio_24
const perimetroCuadrado  = (lado)=> {
    return lado + lado + lado + lado
}

    Ejercicio_25
console.log(perimetroCuadrado(10));

    Ejercicio_26
const pi = 3.1416;
const areaCirculo  = (radio)=> {
    return pi*radio*radio
}

    Ejercicio_27
console.log(areaCirculo(10));

*/
let cambioMoneda = ()=>{
    let i = 0;
    let moneda = parseFloat(prompt("Ingrese monto a convertir:"));
    while (isNaN(moneda)) {
        alert("Debe ingresar un numero");  
        moneda = parseFloat(prompt("Ingrese monto a convertir:"));
    }
    while (moneda <= i){
        alert("monto no puede ser menor a 0 ni igual a 0")
        moneda = parseFloat(prompt("Ingrese monto a convertir:"));
    }
    let tipoMoneda = parseInt(prompt("Indique el tipo de moneda: 1.USD   2.EUR   3.COP "));
    let resultado;
    
    switch (tipoMoneda) {
        case 1: 
            resultado = moneda * 0.0011;
            console.log(resultado);
            break;
        case 2: 
            resultado = moneda * 0.0010;
            console.log(resultado);
            break;
        case 3:
            resultado = moneda * 4.32;
            console.log(resultado);
            break;
        default: 
            while (isNaN(tipoMoneda)) {
                alert("Debe ingresar un tipo de moneda ");  
                tipoMoneda = parseInt(prompt("Indique el tipo de moneda: 1.USD   2.EUR   3.COP"));
            }
            alert ("A excedido el numero de intentos, por favor recargue la página para vovler a intentarlo")
            break;
    }
    
}

let saludo = () => {
    let nombre = prompt("Ingrese su nombre: ");
    alert("hola " + nombre);
}

let programaMoneda = parseInt(prompt("Ingrese '0' si desea realizar un cambio de moneda o cualquier tipo de dato para saludarte"));

if(programaMoneda === 0){
    cambioMoneda();
}else {
    saludo()
}