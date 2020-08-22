const btnStart = document.querySelector(".btn-start");
const closeStart = document.querySelector(".close-start");
const wrapperStart = document.querySelector(".wrapper-start");
const sectionStart = document.querySelector(".section-start");
// const sectionTabs = document.querySelector(".section-tabs");
// const sectionLoading = document.querySelector(".loading-effect");

closeStart.addEventListener("click", event => {
  sectionStart.classList.add("form-close-start");
  
  sectionStart.addEventListener("animationend", event => {
    if(event.animationName == "close-start")
      sectionStart.style.display = "none";
  });
});

btnStart.addEventListener("click", event => {
  event.preventDefault();
  
  const fields = [...document.querySelectorAll(".input-start")]
  fields.forEach(field => {
    if (field.value == "")
    wrapperStart.classList.add("validate-error-start")
  });

  const formError = document.querySelector(".validate-error-start");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName == "nono-start") {
        formError.classList.remove("validate-error-start");
      }
    });
  } else {
    sectionStart.classList.add("form-hide-start");
  }

  const formHidden = document.querySelector(".form-hide-start");
  if (formHidden) {
    formHidden.addEventListener("animationend", event => {
      // sectionStart.parentNode.removeChild(sectionStart);
      // sectionLoading.style.display = "flex";
      // sectionTabs.style.display = "flex";
    })
  }
});

sectionStart.addEventListener("animationstart", event => {
  if(event.animationName == "down-start") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

sectionStart.addEventListener("animationend", event => {
  if(event.animationName == "down-start")
    sectionStart.style.display = "none";
    document.querySelector("body").style.overflow = "visible";
});
