function StartPage() {
  function close() {
    html.closeStart.addEventListener("click", event => {
      html.sectionStart.classList.add("form-close-start");

      html.sectionStart.addEventListener("animationend", event => {
        if(event.animationName == "close-start") {
          html.sectionStart.style.display = "none";
          html.sectionLoading.style.display = "flex";
        }
        // sectionStart.parentNode.removeChild(sectionStart);
      });
    });
  }

  function handleEnter() {
    html.btnStart.addEventListener("click", event => {
      event.preventDefault();

      html.fields.forEach(field => {
        if (field.value == "")
        html.wrapperStart.classList.add("validate-error-start")
      });

      const formError = $(".validate-error-start");
      if (formError) {
        formError.addEventListener("animationend", event => {
          if (event.animationName == "nono-start") {
            formError.classList.remove("validate-error-start");
          }
        });
      } else {
        html.sectionStart.classList.add("form-hide-start");
      }

      const formHidden = $(".form-hide-start");
      if (formHidden) {
        formHidden.addEventListener("animationend", event => {
          showNameHeader();
          html.sectionStart.style.display = "none";
          html.sectionTabs.style.display = "flex";
        });
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

  function init() {
    close();
    handleEnter();
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const startPage = StartPage();
  startPage.init();
});
