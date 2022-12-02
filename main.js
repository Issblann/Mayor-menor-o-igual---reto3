// 30 ejercicios para practicar

//Programa algo que pida dos numeros y que nos diga cual es mayor, menor o igual,
// los numeros tienen que ser enteros y positivos
// si esta vacio mandar un mensaje para insertar alguno

const numero1 = document.querySelector("#numero-1");
const numero2 = document.querySelector("#numero-2");
const parrafo = document.querySelector("#parrafo");
const botonCalcular = document.getElementById("boton");
const botonReiniciar = document.getElementById("boton2");
const form = document.querySelector("#form");
const resultado = () => {
  const valor1 = numero1.value;
  const valor2 = numero2.value;
  let valid = false;

  if (estaVacio(valor1 && valor2)) {
    text = `Ingresa algun valor`;
  } else if (isNaN(valor1) || isNaN(valor2)) {
    text = "Es necesario introducir dos numeros validos";
  } else if (numeroNegativo(valor1 || valor2)) {
    text = `Agregue numeros positivos`;
  } else if (valor1 > valor2) {
    text = ` ${valor1} es mayor que ${valor2}`;
  } else if (valor1 < valor2) {
    text = ` ${valor1} es menor que ${valor2}`;
  } else if (valor1 === valor2) {
    text = ` ${valor1} es igual a ${valor2}`;
  }

  parrafo.innerHTML = text;
};
const inputVacio = () => (
  (numero1.value = ""),
  (numero2.value = ""),
  (parrafo.innerHTML = "Ingresa algun valor")
);

const numeroNegativo = (numero) => numero < 0;
const estaVacio = (valor) => valor === "";

botonCalcular.addEventListener("click", resultado);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

botonReiniciar.addEventListener("click", inputVacio);
