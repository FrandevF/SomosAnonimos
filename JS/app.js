(function () {
  const listElements = document.querySelectorAll(".menu__item--show");
  const list = document.querySelector(".menu__links");
  const menu = document.querySelector(".menu__hamburguer");

  const addClick = () => {
    listElements.forEach((element) => {
      element.addEventListener("click", () => {
        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle("menu__item--active");

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }

        subMenu.style.height = `${height}px`;
      });
    });
  };
  const deleteStyleHeight = () => {
    listElements.forEach((element) => {
      if (element.children[1].getAttribute("style")) {
        element.children[1].removeAttribute("style");
        element.classList.remove("menu__item--active");
      }
    });
  };

  //   addClick();

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      deleteStyleHeight();
      if (list.classList.contains("menu__links--show")) {
        list.classList.remove("menu__links--show");
      }
    } else {
      addClick();
    }
  });

  if (window.innerWidth <= 800) {
    addClick();
  }

  menu.addEventListener("click", () => {
    list.classList.toggle("menu__links--show");
  });
})();

const respuesta = document.getElementById("respuesta");
const pista = document.querySelector(".pista-unlocked");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let res = respuesta.value;
  let bien = "Correcta";
  let mal = "Incorrecta";
  if (res === "opcion 2") {
    document.querySelector(
      ".resultado"
    ).innerHTML = `<p class="correcto">Respuesta: ${bien}</p>`;
    pista.innerHTML = `<h2 class="pista-unlocked pista-h2">Pista desbloqueada</h2>
    <p class="pista">Pista: 1</p>
    <p class="pista-1">Sí, es ese lugar, acá te dejo una foto para que te ubiques bien, allí vas a poder encontrar un código, el cual deberas colocar más abajo.</p><br> <div class="imagenes-correctas"><img src="assets/muerto.webp" alt="pista1" class="pista-img"><img src="assets/muerto1.webp" alt="pista1" class="pista-img"><img src="assets/muerto2.webp" alt="pista1" class="pista-img"></div>`;
  } else {
    document.querySelector(
      ".resultado"
    ).innerHTML = `<p class="incorrecto">Respuesta: ${mal}</p>`;
    pista.innerHTML = `<h2 class="pista-unlocked">Volvé a intentarlo, si lo haces bien desbloqueas una pista</h2>`;
  }
});
const respuesta2 = document.getElementById("code");
const code = document.getElementById("code");
const codeBtn = document.querySelector(".codeBtn");
codeBtn.addEventListener("click", () => {
  let res = respuesta2.value;
  let bien = "Correcto";
  let mal = "Incorrecto";
  if (res === "opcion 2") {
    document.querySelector(
      ".codeRes"
    ).innerHTML = `<p class="correcto">Código: ${bien}</p>`;
  } else {
    document.querySelector(
      ".codeRes"
    ).innerHTML = `<p class="incorrecto">Código: ${mal}</p>`;
  }
});
