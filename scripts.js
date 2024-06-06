let nombre;
function nuevaTarea (){
    nombre = prompt("por favor ingresa tu nombre").toUpperCase();
    alert(`Se a creado tu perfil para agregar tareas: ${nombre}`);
}

nuevaTarea();

const contenedor = document.querySelector("div");
const div = document.createElement("div");
const formulario = document.createElement("form");
const input = document.createElement("input");
input.type = "text"
input.placeholder = `Ingrese tarea ${nombre}`;
const boton = document.createElement("button");
boton.textContent = "Click";
const botonLimpiar = document.createElement("button");
botonLimpiar.textContent = "Borrar"
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const ul = document.createElement("ul");
ul.id = "listaDesordenada"
const selUl = document.querySelector("#listaDesordenada")
const h1 = document.createElement("h1");
h1.textContent = "Tareas";
const label  =  document.createElement("label");
label.style.color = "red";
const botonCrearObjeto = document.createElement("button");
botonCrearObjeto.id = "botonGuardar"
botonCrearObjeto.textContent = "Crear lista";
const array = [];

contenedor.appendChild(div);
div.appendChild(formulario);
formulario.appendChild(input);
formulario.appendChild(boton);
formulario.appendChild(botonLimpiar)
contenedor.appendChild(div2);
div2.appendChild(h1);

boton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValor = input.value;
    validarTarea(inputValor);
    input.value = "";
    if(!document.querySelector("#botonGuardar")) {
        contenedor.appendChild(div3);
        div3.appendChild(botonCrearObjeto);
    }
    
})

botonLimpiar.addEventListener("click", (e)=> {
    e.preventDefault();
    array.splice(0,array.length)
    console.log(array);
    div2.removeChild(ul);
})

const agregarAlArray = (valor) => {
    array.push(valor)
}

const validarTarea = (textoInput) => {
        console.log(array)
        let existe = array.some((e) => e == textoInput);
        if(!existe){
            agregarTarea(textoInput);
            agregarAlArray(textoInput);
            label.textContent = "";
        }else {
            div.appendChild(label);
            label.textContent = "La tarea ingresada ya existe";
        }
}

const agregarTarea = (texto) => {
    let lista = document.createElement("LI");
    div2.appendChild(ul);
    ul.appendChild(lista);
    lista.textContent = texto;
}

botonCrearObjeto.addEventListener("click", (e) => {
    e.preventDefault();
    const tareas = new Tareas(array, nombre);
    console.log(`Se creo el objeto ${tareas.nombre} con la siguiente información: ${tareas.lista}`);
    array.splice(0,array.length);
    div2.removeChild(ul);
    div3.removeChild(botonCrearObjeto);
    if (!document.querySelector("#listaDesordenada")) {
        setTimeout (() => {
            nuevaTarea();
        }, 1000);
    }
})

class Tareas {
    constructor(lista, nombre) {
        this.lista = lista;
        this.nombre = nombre;
    }
}
