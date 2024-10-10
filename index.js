let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};

reset.addEventListener(
  "click",
  (resetTime = () => {
    pauseTimer();
    switch (active) {
      case "long":
        minCount = 14;
        break;
      case "short":
        minCount = 4;
        break;
      default:
        minCount = 24;
        break;
    }
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  })
);

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-focus");
  });
};

focusButton.addEventListener("click", () => {
  removeFocus();
  focusButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 24;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});

shortBreakButton.addEventListener("click", () => {
  active = "short";
  removeFocus();
  shortBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 4;
  count = 59;
  time.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener("click", () => {
  active = "long";
  removeFocus();
  longBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 14;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});

pause.addEventListener(
  "click",
  (pauseTimer = () => {
    paused = true;
    clearInterval(set);
    startBtn.classList.remove("hide");
    pause.classList.remove("show");
    reset.classList.remove("show");
  })
);

startBtn.addEventListener("click", () => {
  reset.classList.add("show");
  pause.classList.add("show");
  startBtn.classList.add("hide");
  startBtn.classList.remove("show");
  if (paused) {
    paused = false;
    time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
    set = setInterval(() => {
      count--;
      time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(set);
        }
      }
    }, 1000);
  }
});

// const listadoUsuarios = [
//   { usuario: "bryan", correo: "bryanrt" },
//   { usuario: "bryan", correo: "bryanrt" },
//   { usuario: "bryan", correo: "bryanrt" },
//   { usuario: "bryan", correo: "bryanrt" },
//   { usuario: "bryan", correo: "bryanrt" },
// ];

// let output = "";

// for (let i = 0; i < listadoUsuarios.length; i++) {
//   output = output + `<li>${listadoUsuarios[i].usuario}</li>`;
// }

// document.getElementById("lista").innerHTML = output;
// document.getElementById("lista").style.color = "white";

// let element;
// fetch("https://jsonplaceholder.typicode.com/users").then((Response) => {
//   console.log(
//     Response.json().then((data) => {
//       for (let i = 0; i < data.length; i++) {
//         element += `<li>${data[i].id} - ${data[i].name}</li>`;
//       }
//       document.getElementById("users").innerHTML = element;
//     })
//   );
// });

// programacion orientada a objetos

// ("use strict");

// function Persona(edad, altura, peso) {
//   this.edad = edad;
//   this.altura = altura;
//   this.peso = peso;

//   this.caminar = () => {
//     console.log("Esta persona camina");
//   };
//   this.sentarse = () => {
//     console.log("Esta persona esta sentada");
//   };
// }

// var Manuel = new Persona(37, 2.0, 87);
// var Lucia = new Persona(37, 2.0, 87);

// console.log(Lucia.sentarse());
// console.log(Lucia.caminar());



