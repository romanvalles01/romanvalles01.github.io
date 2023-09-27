const display = document.getElementById("display");
const buttons = [
  ".",
  0,
  "=",
  "+",
  1,
  2,
  3,
  "-",
  4,
  5,
  6,
  "*",
  7,
  8,
  9,
  "/",

  "C",
  "←",
];
let res = "";

const botonera = document.getElementById("botonera");
buttons.forEach((boton) => {
  let modelo = `<button value="${boton}" class="boton">${boton}</button>`;
  botonera.innerHTML += modelo;
  const botones = document.querySelectorAll(".boton");
  botones.forEach((botonP) => {
    botonP.addEventListener("click", () => {
      if (botonP.value != "=" && botonP.value != "←" && botonP.value != "C") {
        display.value += botonP.value;
        res = display.value;
      }
      if (botonP.value == "C") display.value = "";
      if (botonP.value == "←") {
        res = display.value;
        res = res.slice(0, res.length - 1);
        display.value = res;
      }
      if (botonP.value == "=") display.value = eval(display.value);
    });
  });
});
