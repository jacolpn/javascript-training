const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("#form-login");
const sectionLogin = document.querySelector("#section-login");

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
      sectionLogin.parentNode.removeChild(sectionLogin);
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
  const size = Math.floor(random(10, 100));
  const position = random(1, 70);
  const radius = random(20, 0.1);
  const duration = random(24, 12);
  
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `+${size}px`;
  li.style.borderRadius = `${radius}px`;
  li.style.left = `${position}%`;
  
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
  ulSquares.appendChild(li);
}
