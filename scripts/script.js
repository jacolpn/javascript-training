const btnLogin = document.querySelector(".btn-login");
const btnFirstQuestion = document.querySelector(".btn-first-question")
const form = document.querySelector("#form-login");
const formQuestion = document.querySelector("#first-question");
const formCongratulations = document.querySelector("#congratulations");

/* Inserir uma classe em um componente */
btnLogin.addEventListener("click", event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")]
  fields.forEach(field => {
    if (field.value == "")
    form.classList.add("validate-error")
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName == "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }

  const formHidden = document.querySelector(".form-hide");
  if (formHidden) {
    formHidden.addEventListener("animationend", event => {
      form.style.display = "none";
      formQuestion.classList.add("form-up-question");
    })
  }
});

btnFirstQuestion.addEventListener("click", event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block-2 input")]
  fields.forEach(field => {
    if (field.value == "")
    formQuestion.classList.add("validate-error")
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName == "nono") {
        formError.classList.remove("validate-error");
        formQuestion.classList.remove("form-up-question");
        formQuestion.style.visibility = "visible";
      }
    });
  } else {
    formQuestion.classList.remove("form-up-question");
    formQuestion.style.visibility = "visible";
    formQuestion.classList.add("form-hiden");
  }

  const formHidden = document.querySelector(".form-hiden");
  if (formHidden) {
    formHidden.addEventListener("animationend", event => {
      formQuestion.style.display = "none";
      formCongratulations.classList.add("form-up-question");
    })
  }
});

form.addEventListener("animationstart", event => {
  if(event.animationName == "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", event => {
  if(event.animationName == "down")
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
});
  
  /* background squares */
  const ulSquares = document.querySelector("ul.squares");
  for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");
  const random = (min, max) => Math.random() * (max - min) + min;
  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);
  
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  ulSquares.appendChild(li);
}
