let id = 1;
const contenedor = document.querySelector("div");
const div = document.createElement("div");
const formulario = document.createElement("form");
const input = document.createElement("input");
input.type = "text"
input.placeholder = `Ingrese tarea`;
const boton = document.createElement("button");
boton.textContent = "Guardar";
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
const docFrag = document.createDocumentFragment();
const array = [];

contenedor.appendChild(div);
div.appendChild(formulario);
formulario.appendChild(input);
formulario.appendChild(boton);
formulario.appendChild(botonLimpiar)
contenedor.appendChild(div2);
div2.appendChild(h1);

function vaciarArray (array) {
    array.splice(0,array.length);
}

const agregarAlArray = (valor) => {
    array.push(valor)
}

const validarTarea = (textoInput) => {
    let existe = array.some((e) => e == textoInput);
    if (textoInput == ""|| textoInput == " "){
        div.appendChild(label);
        label.textContent = "El campo no puede ser vacío";
    } else if(!existe){
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
    !document.querySelector("#listaDesordenada") && div2.appendChild(ul);
    ul.appendChild(lista);
    lista.textContent = texto;
}

boton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValor = input.value;
    validarTarea(inputValor);
    input.value = "";
    contenedor.appendChild(div3);
    div3.appendChild(botonCrearObjeto);
});

botonLimpiar.addEventListener("click", (e)=> {
    e.preventDefault();
    vaciarArray(array);
    ul.innerHTML = "";
    div3.remove(botonCrearObjeto);
})

botonCrearObjeto.addEventListener("click", (e) => {
    e.preventDefault();
    const tareas = new Tareas(array,id);
    id++;
    objetoString = JSON.stringify(tareas.lista);
    console.log(tareas.lista);
    sessionStorage.setItem(tareas.id, objetoString)
    vaciarArray(array);
    div2.removeChild(ul);
    ul.innerHTML = "";
    div3.removeChild(botonCrearObjeto);
    nuevaTarjeta(tareas);
})

function nuevaTarjeta (objeto){
    let producto = JSON.parse(sessionStorage.getItem(objeto.id));
    console.log(objeto.lista, objeto.id);
    for (let j = 0; j<= objeto.array.length; j++) {
        let li = document.createElement("li");
        li.textContent = producto[j];
        docFrag.appendChild(li);
    }
    nueTar = `
    <div id = ${id}>
        <ul>
        ${docFrag}
        </ul>
    </div>
    `
    console.log(nueTar);
}

class Tareas {
    constructor(lista,id) {
        this.lista = lista;
        this.id = id;
    }
}
