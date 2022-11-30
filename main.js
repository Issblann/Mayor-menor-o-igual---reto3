const numero1 = document.querySelector("#numero-1");
const numero2 = document.querySelector("#numero-2");
const parrafo = document.querySelector("#parrafo");
const boton = document.getElementById("boton");

// let text = "";
// const valor1 = numero1.value;
// const valor2 = numero2.value;
const resultado = (valor1, valor2) => {
  if (isNaN(valor1) || isNaN(valor2)) {
    text = "Es necesario introducir dos numeros validos";
  } else if (valor1 > valor2) {
    text = ` ${valor1} es mayor que ${valor2}`;
  } else if (valor1 < valor2) {
    text = ` ${valor1} es menor que ${valor2}`;
  } else if (valor1 === valor2) {
    text = ` ${valor1} es igual a ${valor2}`;
  }

  parrafo.innerHTML = text;
};

boton.addEventListener("click", () => resultado(numero1.value, numero2.value));
