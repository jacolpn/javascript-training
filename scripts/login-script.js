const btnLogin = document.querySelector(".btn-login");
const sectionTabs = document.querySelector("#section-tabs");
const sectionLogin = document.querySelector("#section-login");
const sectionLoading = document.querySelector("#loading-effect");
const closeLogin = document.querySelector("#close-login");
const wrapperLogin = document.querySelector("#wrapper-login");

closeLogin.addEventListener("click", event => {
  sectionLogin.classList.add("form-close-login");
  
  const formHidden = document.querySelector(".form-close-login");
  if (formHidden) {
    formHidden.addEventListener("animationend", event => {
      sectionLogin.parentNode.removeChild(sectionLogin);
      sectionTabs.style.display = "flex";
    })
  }

  sectionLogin.addEventListener("animationstart", event => {
    if(event.animationName == "close-login") {
      document.querySelector("body").style.overflow = "hidden";
    }
  });
  
  sectionLogin.addEventListener("animationend", event => {
    if(event.animationName == "close-login")
      sectionLogin.style.display = "none";
      // document.querySelector("body").style.overflow = "none";
  });
});
/* Inserir uma classe em um componente */
btnLogin.addEventListener("click", event => {
  event.preventDefault();
  
  const fields = [...document.querySelectorAll(".input-block-login input")]
  fields.forEach(field => {
    if (field.value == "")
    wrapperLogin.classList.add("validate-error-login")
  });

  const formError = document.querySelector(".validate-error-login");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName == "nono-login") {
        formError.classList.remove("validate-error-login");
      }
    });
  } else {
    sectionLogin.classList.add("form-hide-login");
  }

  const formHidden = document.querySelector(".form-hide-login");
  if (formHidden) {
    formHidden.addEventListener("animationend", event => {
      sectionLogin.parentNode.removeChild(sectionLogin);
      sectionLoading.style.display = "flex";
      // sectionTabs.style.display = "flex";
    })
  }
});

sectionLogin.addEventListener("animationstart", event => {
  if(event.animationName == "down-login") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

sectionLogin.addEventListener("animationend", event => {
  if(event.animationName == "down-login")
    sectionLogin.style.display = "none";
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
  li.style.animationTimingFunction = `
    cubic-bezier(${Math.random()},
    ${Math.random()},
    ${Math.random()},
    ${Math.random()})
  `;
  ulSquares.appendChild(li);
}
