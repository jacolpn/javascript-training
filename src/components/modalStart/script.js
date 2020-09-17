function StartPage() {
  function createStartPage() {
    html.sectionStart.innerHTML += `
      <div class="wrapper-start">
        <div class="wrapper-close-start">
          <div class="title-close-start"></div>
          <button class="close-start">X</button>
        </div>

        <form action="" class="form-start">
          <div>
            <label for="start-email">
              What's your name?
            </label>
            <input type="text" class="input-start" autofocus />
          </div>
          <button type="submit" class="btn-start">Send</button>
        </form>
      </div>
    `;
  }
  function close() {
    const closeStart = $(".close-start");
    closeStart.addEventListener("click", event => {
      html.sectionStart.classList.add("form-close-start");

      html.sectionStart.addEventListener("animationend", event => {
        if(event.animationName == "close-start") {
          html.sectionStart.style.display = "none";
          html.sectionLoading.style.display = "flex";
        }
      });
    });
  }

  function handleEnter() {
    const btnStart = $(".btn-start");
    btnStart.addEventListener("click", event => {
      event.preventDefault();

      const fields = [...$$(".input-start")];
      fields.forEach(field => {
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
          const inputStart = $('.input-start');
          showNameHeader(inputStart.value);

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
    createStartPage();
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
