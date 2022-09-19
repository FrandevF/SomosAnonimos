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
const morePistas = document.querySelector(".morePistas");
codeBtn.addEventListener("click", () => {
  let res = respuesta2.value;
  let bien = "Correcto";
  let mal = "Incorrecto";
  if (res === "8BUkv9") {
    document.querySelector(
      ".codeRes"
    ).innerHTML = `<p class="correcto2">Código: ${bien}, A continuación sigue la historia...</p><br><br><br>
    <div class="morePistas">
        <p>Ya pasaron varios días. Por lo que nos dijo Julian, y por la evidente desaparición del vendedor de la cantina, parece que sí, el muerto era Raúl. <br>
        Todavía intentamos no decirle a nadie sobre esto directamente, hasta podriamos ser sospechosos nosotros si lo decimos, queremos evitar eso. <br><br>
        Por medios anónimos contamos a la policía, al parecer solo sacaron el cuerpo, y no dijeron más nada, no sabemos por qué, pero preferimos no preguntar.
        Nuestra principal pregunta es, cómo metieron un cuerpo ahí? Imposible que nadie haya visto nada... Por lo que sabemos hasta ahora, la escuela cierra a las 9pm, a partir de las 7 se empiezan a ir casi todos, por lo que el horario entre las 7pm y 9pm sería perfecto para... matar a alguien y esconder su cuerpo.<br><br>
        El lunes a la tarde nos juntamos los 5 para pensar posibles sospechosos, no llegamos a mucho, realmente no habia mucho para analizar. En la escena encontramos solo huellas de barro, de alguna zapatilla bastante grande, el Martes anterior había llovido por lo que puede ser que el asesinato haya sido ese día.<br>
        En la cantina siempre atendían 2, el muerto, y su compañera, no creemos que pueda haber sido ella, parecían cercanos. Tambien recordamos una pelea del Raul con un chico de 6MB, parece que el chico (Fabri) le habia querido robar una barrita de cereal, desde ahí siempre que se cruzaban había un ambiente incómodo, por lo que es nuestro primer sospechoso, aunque sería bastante raro que un chico de 19 años mate a un cantinero en la escuela. <br>
        Otra cosa que nos dimos cuenta, es que desde que empezamos a publicar esto, el profe Matías (el de física) actuaba un poco raro, en las clases estaba como medio distraído, a veces se quedaba mirando a los alumnos muy serio, como si quisiera sospechar de alguno. <br><br>
        Estabamos por volver cada uno a su casa, pero una compañera de nuestro curso mandó un mensaje pidiendo lo que dieron los ultimos días en clase, ella no tenía ni una falta en todo el año, y ahora terminando el ultimo trimestre empezó a faltar esta última semana, nos pareció raro. Una de las cosas que nos llevó a sospechar de ella, era su actitud, antes de empezar a faltar, andaba como muy enojada, o estresada, preocupada, no sabemos pero estaba rara. Uno de nosotros recordó tambien que ese día, refiriendome al martes anterior, el posible día del asesinato, la compañera que estaba faltando salió de la escuela más tarde, siempre salimos casi todos juntos, pero ella había dicho que tenia que hacer una cosa, que salía en un rato, y bueno en ese momento no pensabamos que podría ser por esa razón, pero son solo nuestras sospechas, quizas no es nadie de la escuela.
        </p>
        <div id="susCards">
          <div class="card card__1">
            <div class="card__flex">
              <img c src="assets/6MB'1.png" alt="">
                <div class="card__texts">
                  <p class="card__p">&mdash;Chico de 6MB&mdash;</p>
                  <div class="span-div">
                  <span class="card__span card__span-red">&mdash;SOSPECHOSO</span>
                  </div>
                </div>
            </div>
          </div>
          <div class="card card__2">
            <div class="card__flex">
              <img src="assets/compañera.png" alt="">
                <div class="card__texts">
                  <p class="card__p">&mdash;Compañera del curso&mdash;</p>
                  <div class="span-div">
                  <span class="card__span card__span-red">&mdash;SOSPECHOSO</span>
                  </div>
                </div>
            </div>
          </div>
          <div class="card card__3">
            <div class="card__flex">
              <img class="profe" src="assets/fisicaTeacher.png" alt="">
                <div class="card__texts">
                  <p class="card__p">&mdash;Profesor de física&mdash;</p>
                  <div class="span-div">
                  <span class="card__span card__span-red">&mdash;SOSPECHOSO</span>
                  </div>
                </div>
            </div>
          </div>
          <div class="card card__4">
            <div class="card__flex">
              <img src="assets/cantinera.png" alt="">
                <div class="card__texts">
                  <p class="card__p">&mdash;Compañera del cantinero&mdash;</p>
                  <div class="span-div">
                  <span class="card__span card__span-green">&mdash;DESCARTADA</span>
                  </div>
                </div>
            </div>
          </div>
          
        </div>
        
      </div>
    
    `;
  } else {
    document.querySelector(
      ".codeRes"
    ).innerHTML = `<p class="incorrecto">Código: ${mal}</p>`;
  }
});
