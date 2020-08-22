const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function StartPage() {
  const html = {
    btnStart: $(".btn-start"),
    closeStart: $(".close-start"),
    wrapperStart: $(".wrapper-start"),
    sectionStart: $(".section-start"),
    fields: [...$$(".input-start")],
    formHidden: $(".form-hide-start"),
    body: $("body"),
  }
  
  function init() {
    html.closeStart.addEventListener("click", event => {
      html.sectionStart.classList.add("form-close-start");
      
      html.sectionStart.addEventListener("animationend", event => {
        if(event.animationName == "close-start")
        html.sectionStart.style.display = "none";
      });
    });

    html.btnStart.addEventListener("click", event => {
      event.preventDefault();

      html.fields.forEach(field => {
        if (field.value == "")
        html.wrapperStart.classList.add("validate-error-start")
      });

      const formError = document.querySelector(".validate-error-start");
      if (formError) {
        formError.addEventListener("animationend", event => {
          if (event.animationName == "nono-start") {
            formError.classList.remove("validate-error-start");
          }
        });
      } else {
        html.sectionStart.classList.add("form-hide-start");
      }

      
      if (html.formHidden) {
        html.formHidden.addEventListener("animationend", event => {
          // sectionStart.parentNode.removeChild(sectionStart);
          // sectionLoading.style.display = "flex";
          // sectionTabs.style.display = "flex";
        })
      }
    });

    html.sectionStart.addEventListener("animationstart", event => {
      if(event.animationName == "down-start") {
        html.body.style.overflow = "hidden";
      }
    });

    html.sectionStart.addEventListener("animationend", event => {
      if(event.animationName == "down-start")
        html.sectionStart.style.display = "none";
        html.body.style.overflow = "visible";
    });
  }
  return {
    init
  }
}

window.addEventListener('load', () => {
  const startPage = StartPage();
  startPage.init();
});
