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

    Clase_05

    Ejercicio_1
const persona = {
    nombre: "johan",
    edad: "27",
    ciudad: "bogota"
}
console.log(persona.nombre);

    Ejercicio_2
persona.telefono = "3112636286";
console.log(persona.telefono);

    Ejercicio_3
const coche = {
    marca: "ford",
    modelo: "hb",
    ano: "2018"
};
console.log(coche.modelo);

    Ejercicio_4
coche.color = "negro";
console.log(coche.color);

    Ejercicio_5
function Producto (nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}
const producto1 = new Producto("shampoo", 8000, 10);

    Ejercicio_6

function Persona (nombre, edad, cidudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
}
const persona1 = new Persona("johan", 2 , "Bogota");

    Ejercicio_7
function Libro (titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
}
const libro1 = new Libro("amigo mio", "johan", 1996);

    Ejercicio_8
function Rectangulo (base, altura) {
    this.base = base;
    this.altura = altura;
    this.calcularArea = function (){
        console.log("el area es de "+ this.base * this.altura); 
    }
}
const rectangulo1 = new Rectangulo(10,5);
rectangulo1.calcularArea( );

    Ejercicio_9
function Circulo (radio) {
    this.radio = radio;
    this.calcularPerimetro = function (){
        let pi = Math.PI;
        console.log("El perimetro del circulo es de "+ parseFloat(2*pi*this.radio));
    }
}
const circulo1 = new Circulo(10);
circulo1.calcularPerimetro();

    Ejercicio_10
function Estudiante(nombre, edad, curso){
    this.curso = curso;
    this.edad = edad;
    this.nombre = nombre;
    this.presentarse = function(){
        console.log(`Nombre: ${this.nombre} edad: ${this.edad} curso: ${curso}`);
    }
}
const johan = new Estudiante("johan", 27, "programacion");
johan.presentarse();

    Ejercicio_11_y_12
const CuentaBancaria = function(saldo, titular){
    this.saldo = saldo;
    this.titular = titular;
    this.depositar = function(deposito){
        console.log(`
        saldo: ${this.saldo}
        depositado: ${deposito}
        nuevo saldo: ${this.saldo += deposito}
        `);
    }
    this.retirar = function(retiro) {
        console.log(`
        saldo: ${this.saldo}
        retirado: ${retiro}
        nuevo saldo: ${this.saldo -= retiro}
        `);
    }
}
const cuentaBancaria1 = new CuentaBancaria(10000, "johan");
cuentaBancaria1.depositar(500);
cuentaBancaria1.retirar(300);

    Ejercicio_13_y_14
const Agenda = function(){
    this.contactos = ["alfonso","elena"];
    this.agregarContacto = function(contacto){
        this.contactos.push(contacto);
    }
    this.buscarContacto = function (nombre) {
        let busqueda = false;
        for(let i in this.contactos) {
            if (this.contactos[i] == nombre){
                busqueda = true;
            }
        }
        if (busqueda == true) {
            console.log("se econtro "+ nombre)
        }else {
            console.log("No se encontro "+ nombre)
        }
    }
}
const agenda1 = new Agenda();
agenda1.agregarContacto("johan");
agenda1.agregarContacto("michael");
console.log(agenda1.contactos);
agenda1.buscarContacto("as");
agenda1.buscarContacto("johan");

    Ejercicio_15_y_16
const frutas = {
    manzana: "roja",
    naranja: "naranja",
    pera: "verde"
}
console.log("manzana" in frutas);
for (const propiedad in frutas) {
    console.log(frutas[propiedad]);
}

    Ejercicio_17
class Rectangulo {
    constructor (base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        console.log(this.base*this.altura);
    }
}
const rectangulo1 = new Rectangulo(30,10);
rectangulo1.calcularArea();

    Ejercicio_18
class Circulo {

    constructor (radio){
        this.radio = radio;
        this.pi = Math.PI;
    }

    calcularPerimetro(){
        console.log(this.pi*2*this.radio);
    }
}
const circulo1 = new Circulo(10);
circulo1.calcularPerimetro();

    Ejercicio_19
class Empleado {
    constructor (nombre, edad, cargo){
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
    }
    promocionar(nuevoCargo){
        this.cargo = nuevoCargo;
    }
}
const empleado1 = new Empleado("johan", 28, "sub gerente");
console.log(empleado1.cargo);
empleado1.promocionar("gerente general");
console.log(empleado1.cargo);

    Ejercicio_20
class Producto {
    constructor (nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
const producto1 = new Producto("shampoo", 5000,22);

    Ejercicio_21
class Estudiante {
    constructor (nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}
const Estudiante1 = new Estudiante("johan", 28, "decimo");

    Ejercicio_22
class Libro {
    constructor (titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
}
const libro1 = new Libro("lee bien", "johan gonzalez", 1996);

    Ejercicio_23
class Agenda {
    constructor(nombre) {
        this.nombre = nombre;
    }

    buscarContacto (nombreBuscar) {
        if(this.nombre == nombreBuscar) {
            console.log("el nombre "+ nombreBuscar + " si existe");
        }else {
            console.log("el nombre "+ nombreBuscar + " no existe");
        }
    }
}
const agenda1 = new Agenda ("johan");
agenda1.buscarContacto("johan");

    Ejercicio_24_y25
class Vehiculo {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    acelerar(){
        console.log("el vehiculo se esta acelerando")
    }
    detalle() {
        console.log(`
        La marca es: ${this.marca}
        El modelo es: ${this.modelo}
        El año es: ${this.ano}
        `)
    }
}
const vehiculo1 = new Vehiculo("ford", "fiesta", 2015);
vehiculo1.detalle();
vehiculo1.acelerar();

    Ejercicio_26
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularPerimetro() {
        console.log("perimetro " + this.base*this.altura);
    }
}
const rectangulo1 = new Rectangulo(2,43);
rectangulo1.calcularPerimetro();

    Ejercicio_27_y_28
class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    calcularArea() {
        console.log("Area " + (this.lado1+this.lado2+this.lado3)/2);
    }
    calcularPerimetro() {
        console.log("Perimetro " + (this.lado1+this.lado2+this.lado3))
    }
}
const triangulo1 = new Triangulo(2,43,5);
triangulo1.calcularArea();
triangulo1.calcularPerimetro();

    Ejercicio_29_y_30
const computadora = {
    marca: "asus",
    modelo: "vivoBook",
    procesador: "core 7"
}

console.log ("procesador" in computadora);
for (let dato in computadora){
    console.log(dato +": "+computadora[dato]);
}

    Ejercicio_31
class Circulo {
    constructor(radio){
        this.radio = radio;
        this.pi = Math.PI;
    }
    calcularArea(){
        console.log("El area es de: " + this.pi*this.radio*2);
    }
}
const circulo1 = new Circulo(20);
circulo1.calcularArea();

    Ejercicio_32

class Circulo {
    constructor (lado) {
        this.lado = lado;
    }
    calcularPerimetro(){
        console.log("el perimetro es: "+ this.lado*3)
    }
}

const circulo1 = new Circulo(20);
circulo1.calcularPerimetro();

    Clase_06

    Ejercicio_01_y_02
const personas = [
    {nombre: "johan", edad: 34, ciudad: "bogota" },
    {nombre: "pedro", edad: 23, ciudad: "cali"},
    {nombre: "alfonso", edad:34, ciudad: "medellin"}
];
console.log(personas[0]);
personas.push({nombre:"nicolas", edad:5 ,ciudad: "bogota"});
console.log(personas[1].edad);

    Ejercicio_03_y_04
const autos = [
    {marca:"ford" , modelo:"fiesta" , anio: 2014},
    {marca:"mazda" , modelo:"all new" , anio: 2015}
];
console.log(autos[1].modelo);
autos.push({marca: "chevrolet", modelo:"sail", anio:2018});
console.log(autos[2].anio);

    Ejercicio_05
function producto (nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}
const productos = [];
productos.push(new producto("arroz", 2500, 50));
productos.push(new producto("papa", 600, 50));
productos.push(new producto("shampoo", 9500, 10));
console.log(productos);

    Ejercicio_06
function persona (nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
}

const personas = [];
personas.push(new persona("johan", 28, "bogota"));
personas.push(new persona("michael", 32, "bogota"));
personas.push(new persona("jeimmy", 30, "medellin"));
console.log(personas);

    Ejercicio_07
function libro (titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
}
const libros = [];
libros.push(new libro("piense y hagase rico", "anonimo", 1996));
libros.push(new libro("la disciplina marcara tu destino, ryan holiday", 2022));
libros.push(new libro("libro prueba", "anonimo", 2015));

    Clase_08 
function rectangulo (base, altura){
    this.base = base;
    this.altura = altura;
    this.calcularArea = function (){
        return base*altura;
    }
}
const rectangulos = [{
    base: 10, altura: 15
}];
const rectangulo1 =  new rectangulo(rectangulos[0].base, rectangulos[0].altura);
console.log(rectangulo1.calcularArea());

    Ejercicio_09
function circulo (radio) {
    this.radio = radio;
    this.calcularPerimetro = function(){
        let pi = Math.PI;
        return 2*pi*this.radio;
    }
}
const circulos = [];
circulos.push(new circulo(10));
circulos.push(new circulo(7));
circulos.push(new circulo(12));
console.log(circulos[1].calcularPerimetro());

    Ejercicio_10
function estudiante (nombre, edad, curso) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.presentarse = function() {
        console.log(` hola mi nombre es ${nombre} tengo ${edad} años y estoy cursando ${curso}`)
    }
}
let estudiantes = [];
estudiantes.push(new estudiante("johan", 28, "programacion"));
estudiantes.push(new estudiante("michael", 21, "logica"));
estudiantes.push(new estudiante("santi", 20, "ingles"));
for (let cont in estudiantes) {
    estudiantes[cont].presentarse();
}

    Ejercicio_11_y_12
function cuentaBancaria(saldo, titular){
    this.saldo = saldo;
    this.titular = titular;
    this.depositar = function(monto){
        this.saldo += monto;
    }
    this.retirar = function(monto){
        this.saldo -= monto;

    }
}
const cuentasBancarias = [];
cuentasBancarias.push(new cuentaBancaria(5000, "johan"));
cuentasBancarias.push(new cuentaBancaria(10000, "michael"));
cuentasBancarias.push(new cuentaBancaria(500, "santi"));
for(let cont in cuentasBancarias){
    cuentasBancarias[cont].depositar(10100);
}
cuentasBancarias[1].retirar(20000);
console.log(cuentasBancarias);

    Ejercicio_13_y_14
function agregarAgendas (listaAgendas) {
    agendas.push(listaAgendas);
}

function agenda (){
    this.contactos = [];
    this.agregarContactos = function(nombre, edad , tel){
        this.contactos.push({nombre: nombre, edad: edad, tel: tel});
    }
    this.bucarContacto = function (nombre){
        return this.contactos.find(contacto => contacto.nombre == nombre)||null;
    }
}
const agendas = [];
let agenda1 = new agenda();
let agenda2 = new agenda();
let agenda3 = new agenda();
agenda1.agregarContactos("johan", 35, 1123);
agenda1.agregarContactos("alfonso", 25, 2245);
agenda2.agregarContactos("santi", 5, 3694);
agenda2.agregarContactos("nicolas", 38, 3696);
agenda3.agregarContactos("jeimmy", 30, 1396);
agregarAgendas(agenda1);
agregarAgendas(agenda2);
agregarAgendas(agenda3);
let respuesta = agendas[0].bucarContacto("johan");
console.log(agendas[0]);
console.log(respuesta);

    Ejercicio_15_y_16
const frutas = {
    manzana: "roja",
    pera: "pera",
    naranja: "naranja"
}
console.log("manzana" in frutas);
const arrayFrutas = ["manzana", "pera", "naranja"];
const arrayFrutasDos= [];
console.log(arrayFrutas.includes("manzana"));
for (let n in frutas){
    arrayFrutasDos.push(n);
}
for(let m in arrayFrutasDos){
    console.log(arrayFrutasDos[m]);
}

    Ejercicio_17
class Rectangulo {
    constructor (base,altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return this.base*this.altura;
    }
}
const rectangulos = [
    new Rectangulo(5,6),
    new Rectangulo(6,5),
    new Rectangulo(10,8)
];
console.log(rectangulos[0].calcularArea());

    Ejercicio_18
class Circulo {
    constructor(radio){
        this.radio = radio;
    }
    calcularPerimetro () {
        return 2*Math.PI*this.radio;
    }
}
const circulos = [
    new Circulo(10),
    new Circulo(6),
    new Circulo(15),
];
console.log(circulos[1].calcularPerimetro());

    Ejercicio_19
class Empleado {
    constructor(nombre, edad, cargo) {
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
    }
    promocionar(nuevoCargo) {
        this.cargo = nuevoCargo;
    }
}
const empleados = [
    new Empleado( "johan", 28, "developer"),
    new Empleado( "jeimmy", 35, "independiente"),
    new Empleado( "michael", 35, "roscon")
];
empleados[0].promocionar("arquitecto");

    Ejercicio_20
class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
const productos = [];
productos.push(new Producto("shampoo", 500, 12));
console.log(productos);

    Ejercicio_21
class Estudiante {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}
const estudiantes = [];
estudiantes.push(new Estudiante("johan", 27, "ingenieria"));
estudiantes.push(new Estudiante("jeimmy", 30, "matematicas"));

    Ejercicio_22
class Libro {
    constructor(titulo, autor, anio){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }
}
const libros = [];
libros.push(new Libro("llamado al coraje" , "Ryan Holiday", 2022));
libros.push(new Libro("la diciplina marcara tu destino" , "Ryan Holiday", 2020));

    Ejercicio_23_y_24
const productos = [
    {nombre: "shampoo", precio: 800, cantidad: 20}
]
productos.push({nombre: "acondicionador", precio: 700, cantidad: 15})
console.log(productos[1].precio);

    Ejercicio_25_y_26
const empleados = [
    {nombre: "johan", edad: 27, cargo: "automatizador"},
    {nombre: "michael", edad: 33, cargo: "diseñador"},
    {nombre: "jeimmy", edad: 30, cargo: "empaque"},
]
console.log(empleados[2].cargo)
empleados.push({nombre: "alfonso", edad: 58, cargo: "confeccion"},)

    Ejercicio_27
function cuentaBancaria (saldo, titular){
    this.saldo = saldo;
    this.titular = titular;
}
const cuentasBancarias = [
    new cuentaBancaria(50000, "johan"),
    new cuentaBancaria(60000, "jeimmy"),
    new cuentaBancaria(150000, "santi"),
]
cuentasBancarias.push(new cuentaBancaria(10000, "alfonso"));
cuentasBancarias.push(new cuentaBancaria(1000, "elena"));
cuentasBancarias.push(new cuentaBancaria(50, "michael"));
console.log(cuentasBancarias);

    Ejercicio_28
function vehiculo (marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
const vehiculos = [];
vehiculos.push(new vehiculo("ford", "fiesta", 2015))
vehiculos.push(new vehiculo("mazda", "alegro", 2019))
vehiculos.push(new vehiculo("chevrolet", "sail", 2020))
console.log(vehiculos);

    Ejercicio_29
function pelicula (titulo, director, anio) {
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
}
const vehiculos = [];
vehiculos.push(new pelicula("amor", "chaplin", 2015))
vehiculos.push(new pelicula("odio", "gonzalez", 2019))
vehiculos.push(new pelicula("drama", "perdido", 2020))
console.log(vehiculos);


    Ejercicio_30
function triangulo (lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
    this.calcularPerimetro = function() {
        return lado1+lado2+lado3;
    }
}
const triangulos = [];
triangulos.push(new triangulo(5,6,7));
console.log(triangulos[0].calcularPerimetro())

    Ejercicio_31
function alumno (nombre, nota1, nota2){
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.calcularPromedio = function() {
        return (nota1+nota2)/2;
    }
}
const alumnos = [];
alumnos.push(new alumno ("johan", 5, 4.6));
alumnos.push(new alumno ("johan", 3, 4.1));
alumnos.push(new alumno ("johan", 4, 3.6));
alumnos.push(new alumno ("johan", 4.8, 2.6));
console.log(alumnos);
console.log(alumnos[0].calcularPromedio())

    Ejercicio_32
function mascota(nombre, edad, tipo){
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
    this.esMayorEdad = function() {
        if(this.edad >= 5){
            return true;
        }else {
            return false;
        }
    }
}
const mascotas = [];
mascotas.push(new mascota("goro", 5, "perro"));
mascotas.push(new mascota("lucian", 2, "perro"));
mascotas.push(new mascota("miau", 10, "gato"));
console.log(mascotas[1].esMayorEdad());

    Ejercicio_33_y_34
function playlist (){
    this.canciones = [];
    this.agregarCancion = function(cancion){
        this.canciones.push(cancion);
    }
    this.eliminarCancion = function(titulo){
        let op = this.canciones.indexOf(titulo);
        if ( op != -1) {
            this.canciones.splice(op,1);
        }
    }
}
const playlists = [];
const playlist1 = new playlist();
playlist1.agregarCancion("si me voy que");
playlist1.agregarCancion("ultimo vaso");
playlist1.agregarCancion("camino al cielo");
console.log(playlist1.canciones);
playlist1.eliminarCancion("ultimo vaso")
console.log(playlist1.canciones);

    Ejercicio_35    
function compra (){
    this.productos = [];
    this.calcularTotal = function (){
        for(let a of this.productos){
            let result =+ a.precio;
            return result;
        }
    }
}
const compras = [];
const compra1 = new compra();
compra1.productos.push(
    {producto: "shampo", precio: 50},
    {producto: "papas", precio: 70},
    {producto: "carne", precio: 100});
compras.push(compra1);
console.log(compras[0].calcularTotal());
console.log(compras)
console.log(compra1);

    Ejercicio_38
class Cuadrado {
    constructor (lado){
        this.lado = lado;
    }
    calcularArea(){
        return this.lado * this.lado;
    }
}
const cuadrados = [];
cuadrados.push(new Cuadrado(50));
console.log(cuadrados[0].calcularArea());

    Ejercicio_39
class Cancion {
    constructor (titulo, artista){
        this.titulo = titulo;
        this.artista = artista;
    }
    reproducir(){
        console.log ("la cancion "+ this.titulo +" se esta reproduciendo")
    }
}
const canciones = [];
canciones.push(new Cancion("efecto vocales", "nach"));
canciones.push(new Cancion("mama's boy", "nach"));
console.log(canciones[0].reproducir());

    Ejercicio_40
class Compra {
    constructor (productos){
        this.productos = productos;
    }
    calcularTotal(){
        let res = 0;
        for (let i of this.productos){
            res += i.precio;
        }
        return res;
    }
}
const compras = [
    new Compra([{producto: "shampoo", precio: 5000},{producto: "jabon", precio: 1200},{producto: "dulce", precio: 200}]),
    new Compra([{producto: "shampoo", precio: 100},{producto: "jabon", precio: 200},{producto: "dulce", precio: 300}])
]
console.log(compras[0].calcularTotal());

    Ejercicio_41
class TiendaOnline {
    constructor (productos, clientes) {
        this.productos = productos;
        this.clientes = clientes;
    }
    agregarProducto(producto){
        this.productos.push(producto);
    }
    agregarCliente(cliente){
        this.clientes.push(cliente)
    }
    ventaProducto(nomProducto, cant, nomCliente){
        for (let va in this.productos){
            if (this.productos[va].nombre == nomProducto) {
                this.productos[va].cantidad -= cant;
                this.enviarCorreo(nomCliente);
            }        
        }
        
            
        
    }
    enviarCorreo(nomCliente){
        let correo = this.clientes.find(p => p.nombre == nomCliente);
        console.log("se a enviado un correo de confirmacion a: "+ correo.email);
    }
}
const tienda1 = new TiendaOnline([
    {nombre: "shampoo", precio: 900, cantidad: 80},
    {nombre: "papel", precio: 2500, cantidad: 12},
    {nombre: "manzana", precio: 1600, cantidad: 10}
],[
    {nombre: "johan gonzalez", email: "johan9629@hotmail.com", direccion: "trv 13i # 46-55 sur"},
    {nombre: "micahel gonzalez", email: "michael@hotmail.com", direccion: "trv 16g # 46-55 sur"},
    {nombre: "jeimmy ramirez", email: "jeimmy9220@hotmail.com", direccion: "trv 26i # 46-72 norte"}
])
console.log(tienda1);
console.log(tienda1);
tienda1.ventaProducto("shampoo", 1, "micahel gonzalez");


    CLASE_07

    Ejercicio_01
const numero = [1,2,3,4,5,6,7,8,9];
numero.forEach(element=>console.log(element));

    Ejercicio_02
const num = [6,9,23,894,2,4,304,93,48,1];
let n = num.find(element => element > 50);
console.log(n);

    Ejercicio_03
const num = [6,9,23,894,2,4,304,93,48,1];
let n = num.filter(element => element%2 == 0);

    Ejercicio_04
const cont = ["johan", "hola", "paranguatimiricuaro", "perro", "santi"];
let n = cont.some(element => element.length > 10);

    Ejercicio_05
const numeros = [2,5,8,12,56,23];
let n = numeros.map( element => element * 2);

    Ejercicio_06
const numeros = [2,5,18,1,5,2];
const iniValue = 0;
let n = numeros.reduce( (element,current) => element + current, iniValue);

    Ejercicio_07
const cont = ["johan", "andrea","hola", "paranguatimiricuaro", "perro", "santi"];
let n = cont.sort();

    Ejercicio_08
    class Alumno {
    constructor(nombre, edad, notas) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }
    promedio() {
        let suma = this.notas.reduce((cont, elem)=> cont + elem, 0);
        return suma / this.notas.length
    }
}
const alumno1 = new Alumno("johan", 28, [3.8, 4.1, 5, 4.8]);
const alumno2 = new Alumno("michael", 28, [3.6, 4.3, 4.3, 4.8]);
const alumno3 = new Alumno("michael", 28, [2.6, 1.3, 4.3, 4.8]);
const alumnos = [];
alumnos.push(alumno1);
alumnos.push(alumno2);
alumnos.push(alumno3);
console.log(alumnos);
alumnos.forEach( alumno => {
    console.log(` El promedio de notas de ${alumno.nombre} es ${alumno.promedio()}`);
});
const mejorPromedio = alumnos.reduce((acumulado, actual) => {
    return (actual.promedio() > acumulado.promedio()) ? actual : acumulado;
})
console.log(`el alumno con el mejor promedio es ${mejorPromedio.nombre} con un promedio de ${mejorPromedio.promedio()} `);

    Ejercicio_09
const grados = [8, 10, 8, 50, 17];
let resultado = grados.map(e =>  e * 33.8 );

    Ejercicio_10
const array = [28, 80, 51, 30];
let n = array.filter(e => e > 50);

    Ejercicio_11
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = array.forEach(e => console.log(e * 5));

    Ejercicio_12

    Ejercicio_13
const alumnos = [
    {nombre: "johan", edad: 25},
    {nombre: "santi", edad: 5},
    {nombre: "jeimmy", edad: 35},
    {nombre: "michael", edad: 15}
]
let a = alumnos.some(e => e.edad > 18);

    Ejercicio_14
const array =  [5, 8, 0, 2, 5];
const a = array.reduce((acumulado, actual) => acumulado * actual, 1)

    Ejercicio_15
const fechas = [new Date("10/12/1996"),new Date("12/29/2010"), new Date ("10/12/2015"), new Date("10/12/1995")];
const e = fechas.sort((a, b) => a - b );

    Ejercicio_16





    Clase_08

    Ejercicio_01_y_02_y_03_y_04_y_05
const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
numeros.forEach(element => console.log(element));
numeros.pop();
numeros.unshift(0);
numeros.shift();
console.log(numeros);

    Ejercicio_06_y_07_y_08_y_09_y_10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let e = numeros.map(element => element * 2);
console.log(e);
let a = numeros.filter(element => element % 2 === 0 );
console.log(a);
let i = numeros.find(element => element > 3);
console.log(i);
let o = numeros.some(element => element >4);
console.log(o);
let u = numeros.reduce((contador, actual) => contador * actual, 1);
console.log(u); 

    Ejercicio_11_y_12
function operaciones (op) {
    if(op == "sumar") {
        return (a ,b) => a + b; 
    }else if(op == "restar") {
        return (a, b) => a - b;
    }
}
let suma = operaciones("sumar");
let resta = operaciones("restar");
console.log(suma(4,8));
console.log(resta(14,8));

    Ejercicio_13_y_14_y_15
const numeros = [1, 5, 3, 8, 6, 10];
let a = numeros.indexOf(3);
console.log(a);
let e = numeros.includes(4);
console.log(e);
let i = numeros.sort((a, b)=> a - b);
console.log(i);

    Ejercicios_16
console.log(Math.floor(Math.random() * 100));

    Ejercicio_17
console.log(Math.round(4.7));

    Ejercicio_18
console.log(Math.max(1,2,3,4,5));

    Ejercicio_19
console.log(Math.min(1,2,3,4,5));

    Ejercicio_20
console.log(Math.sqrt(16));

    Ejercicio_21
let fechaActual = Date();
console.log(fechaActual);

    Ejercicio_22
let fechaActual = new Date().getFullYear();
console.log(fechaActual);

    Ejercicio_23
let fechaActual = new Date().getMonth();
console.log(fechaActual);


    Ejercicio_24
let fechaActual = new Date().getDate();
console.log(fechaActual);

    Ejercicio_25
let fechaActual = new Date().getDay();
console.log(fechaActual);

    Ejercicio_26

let fechas = [new Date(2022, 10, 1), new Date("December 17, 2023"), new Date (2021, 11,25), new Date(2020, 1, 25)]
fechas.sort((a, b) => a - b );

    Ejercicio_27
let valores = (array, numero) => {
    let nuevoArray = array.filter((el) => el > numero);
    console.log(nuevoArray);
}
let lista  =  [10,5,3,6,2,11,8,9]
valores(lista,9);

    Ejercicio_28
let valores = (array) => {
    let nuevoArray = array.reduce((almacena, actual) => (almacena + actual),0) / array.length;
    console.log(nuevoArray);
}
let lista  =  [10,5,3,6,2,11,8,9]
valores(lista);

    Ejercicio_29
const agregarDiasFecha = (fecha, dias) => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + dias);
    return nuevaFecha.toLocaleDateString();
}
console.log(agregarDiasFecha(new Date("2019-1-5"),5));

    Ejercicio_30
const duplicados = (array)=> array.filter((numero, index) => array.indexOf(numero) !== index);
let lista = [10, 5, 8, 3, 10, 5];
console.log(duplicados(lista));

    Ejercicio_31
const convertirFecha = (fechas) => {
    return fechas.map((e) => e.toLocaleDateString());
}
const  array = [new Date(), new Date(2020,10,19), new Date(1996,11,29), new Date(2019,0,10), new Date(2022,10,5)]
console.log(convertirFecha(array));

    Ejercicio_32
const edad = (nacimiento) => {
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || mes === 0  && hoy.getDate() - nacimiento.getDate()) {
        edad--;
    }
    return edad
};
console.log(edad(new Date(1996,11,29)));

    Ejercicio_33
const sumaArray = (array) => {
    return array.reduce((contador, actual) => contador + actual.reduce((contador1, actual1) => contador1 + actual1,0), 0);
}
const numeros = [[5,4],[3,2]];
console.log(sumaArray(numeros));

    Ejercicio_34
const mayorMenor = (array) => {
    let a = array.reduce((contador, actual) => contador > actual ? contador : actual);
    let b = array.reduce((contador, actual) => contador < actual ? contador: actual);
    return  { mayor: a, menor: b}
}
console.log(mayorMenor([5,7,2,10,4,3,6,7]));

    Ejercicio_35
const buscarPares = (array) => {
    let contador = 0;
    array.forEach(element => {
        if (element % 2 == 0) {
            contador++;
        }
    });
    return contador;
}
const numeros = [10,3,5,2,19,43,2,8,6];
console.log (buscarPares(numeros));

    Ejercicio_36
const calcularDesviacionEstandar = array => {
const media = array.reduce((sum, num) => sum + num, 0) / array.length;
const varianza = array.reduce((sum, num) => sum + Math.pow(num - media, 2), 0) / array.length;
return Math.sqrt(varianza);
};

console.log(calcularDesviacionEstandar([1, 2, 3, 4, 5]));

    Ejercicio_37
const ordenarArray = (array) => {
    console.log(array.sort());
}
ordenarArray(["primero","segundo","tercero", "cuarto"]);

    Ejercicio_38
const paresImpares = (array) => {
    const pares = array.filter((e) => e % 2 == 0);
    const impares = array.filter((element) => element % 2 !== 0)
    return {pares, impares}
}
console.log(paresImpares([1,2,3,4,5,6,7,8,9,10]));

const agruparPorParidad = numeros => numeros.reduce((obj, num) => {
    obj[num % 2 === 0 ? 'pares' : 'impares'].push(num);
    return obj;
}, { pares: [], impares: [] });
console.log(agruparPorParidad([1, 2, 3, 4, 5, 6]));

    Ejercicio_39
const eliminarDuplicados = (array)=> {
    return array.filter((numero, index) => !(array.indexOf(numero) !== index))
}
let lista = [10, 5, 8, 3, 10, 5];
console.log(eliminarDuplicados(lista));

const eliminarDuplicados = array => [...new Set(array)];
console.log(eliminarDuplicados([1, 2, 2, 3, 3, 4, 5, 5]));

    Ejercicio_40
const fechaReciente = (array) => {
    const a = array.reduce((contador,actual) => {
        return contador > actual ? contador : actual
    });
    console.log(a)
}
fechaReciente([new Date(2020,1,28), new Date(1996,10,20), new Date(2024,8,21)])




*/



