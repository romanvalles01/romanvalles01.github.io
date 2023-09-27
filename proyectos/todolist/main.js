let bonfire = document.getElementById("bonfire");
let agregarContainer = document.getElementById("agregarcontainer");
let btnAdd = document.getElementById("btnagregar");
let btnCancelar = document.getElementById("btnCancelar");
let btnConfirmar = document.getElementById("btnConfirmar");
let color = document.querySelector('input[name="colorsito"]:checked');
let tareas = document.getElementById("tareas");
let tareasPendientes = document.getElementsByClassName("tareasPendientes");
let btnBorrar = document.getElementById("btnBorrar");
let darkmodebtn = document.getElementById("darkmodebtn");
let menu = document.getElementById("menu");
let menuOpen = document.getElementById("menuOpen");
let imgSelect = document.getElementById("imgSelect");
let gifBack = document.getElementById("gifBack");

//Darkmode
let section = document.getElementById("section");
let imgBtnAdd = document.getElementById("imgBtnAdd");
let titleBonfire = document.getElementById("titleBonfire");

//Darkmode button
darkmodebtn.addEventListener("click", () => {
  section.classList.toggle("darkBack");
  imgBtnAdd.classList.toggle("darkBtn1");
  tareas.classList.toggle("darkBack");
  titleBonfire.classList.toggle("darkTxt");
});

//Inputs
let tareaInput = document.getElementById("tareaInput");
let select = document.getElementById("select");
let descripcionTxt = document.getElementById("descripcionTxt");
let cantidadDeTareas = 0;

//Accion boton agregar tarea
btnAdd.addEventListener("click", () => {
  if (cantidadDeTareas <= 0) {
    bonfire.classList.toggle("hidden");
    agregarContainer.classList.toggle("active");
    btnAdd.classList.toggle("hidden");
  }

  if (cantidadDeTareas >= 1) {
    bonfire.classList.add("hidden");
    agregarContainer.classList.toggle("active");
    tareas.style.display = "none";
    btnAdd.classList.toggle("hidden");
  }
});

//Accion cancelar
btnCancelar.addEventListener("click", () => {
  if (cantidadDeTareas == 0) {
    bonfire.classList.toggle("hidden");
    agregarContainer.classList.toggle("active");
    btnAdd.classList.remove("hidden");
  }
  if (cantidadDeTareas >= 1) {
    agregarContainer.classList.add("hidden");
    agregarContainer.classList.remove("active");
    tareas.style.display = "flex";
    btnAdd.classList.toggle("hidden");
  }
});

//Agregar tarea confirmada
let idTarea = 0;

btnConfirmar.addEventListener("click", () => {
  let nombreTarea = tareaInput.value;
  let descripcion = descripcionTxt.value;
  let tipoDeTarea = select.value;
  let color = document.querySelector('input[name="colorsito"]:checked')
    .classList[1];
  idTarea++;
  if (nombreTarea != "" && descripcion != "") {
    switch (tipoDeTarea) {
      case "trabajo":
        imgTipo = "./images/tipo/trabajo.svg";
        break;
      case "personal":
        imgTipo = "./images/tipo/personal.svg";
        break;
      case "domestica":
        imgTipo = "./images/tipo/casa.svg";
        break;
      case "Entretenimiento":
        imgTipo = "./images/tipo/gaming.svg";
    }

    switch (color) {
      case "purpura":
        colorFondo = "purpura";
        break;
      case "rojo":
        colorFondo = "rojo";
        break;
      case "verde":
        colorFondo = "verde";
        break;
      case "amarillo":
        colorFondo = "amarillo";
    }

    cantidadDeTareas++;
    agregarContainer.classList.add("hidden");
    agregarContainer.classList.remove("active");
    tareas.style.display = "flex";
    btnAdd.classList.toggle("hidden");

    let tareaPendiente = `<div id="idTarea${idTarea}" class="tareaspendientes">
  <div class="colortarea ${colorFondo}">
    <img src="${imgTipo}" alt="" />
  </div>
  <div class="data">
    <p id="nombretarea"><strong>${nombreTarea}</strong></p>
    <p id="descripciontarea">${descripcion}</p>
  </div>
  <div class="botonestarea">
    <input type="checkbox" name="" id="completada" />
    <button id="btnBorrar" class="borrada">
      <img class="remover" src="./images/borrar.svg" alt="" />
    </button>
  </div>
</div>`;
    tareas.innerHTML += tareaPendiente;

    tareaInput.value = "";
    descripcionTxt.value = "";
    select.value = "";

    console.log(cantidadDeTareas);
  } else {
    alert("falta data jej");
  }
});

//Remover Tareas
document.addEventListener("click", (e) => {
  if (e.target.classList == "remover") {
    e.target.parentNode.parentNode.parentNode.remove();
    cantidadDeTareas--;

    if (cantidadDeTareas == 0) {
      bonfire.classList.remove("hidden");
      tareas.style.display = "none";
    }
  }
});

//Menu Gif
menu.addEventListener("click", () => {
  menuOpen.classList.toggle("active");
});

//Seleccionar Gif
document.addEventListener("click", (e) => {
  if (e.target.classList == "imgSelect scottP") {
    gifBack.src = "./images/scottP.gif";
  }
  if (e.target.classList == "imgSelect solaire") {
    gifBack.src = "./images/solaire.gif";
  }
  if (e.target.classList == "imgSelect bonfire") {
    gifBack.src = "./images/bonfire.gif";
  }
  if (e.target.classList == "imgSelect blackmage") {
    gifBack.src = "./images/blackMage.gif";
  }
  if (e.target.classList == "imgSelect miku") {
    gifBack.src = "./images/miku.gif";
  }
  if (e.target.classList == "imgSelect miki") {
    gifBack.src = "./images/miki.gif";
  }
});

let desdeStorage = localStorage.getItem("tareasGuardadas");
if (desdeStorage) {
  tareas.innerHTML += desdeStorage;
  bonfire.style.display = "none";
  tareas.style.display = "flex";
}
