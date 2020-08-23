function Theme() {
  const html = {
    body: $("body"),
    btnTheme: [...$('.themes-button').children],
    themeDefault: $('[data-open]'),
  }

  function removeAllActiveClass() {
    html.btnTheme.forEach(tab => {
      tab.className = tab.className.replace(" active-theme", "");
    })
  }

  function selectTab(event) {
    removeAllActiveClass();
    const target = event.currentTarget;
    target.className += " active-theme";
    if (target.className == "btn-dark-mode active-theme") {
      html.body.classList.remove("theme-white");
      html.body.className += " theme-dark";
    } else {
      html.body.classList.remove("theme-dark");
      html.body.className += " theme-white";
    }
  }

  function listenForChange() {
    html.btnTheme.forEach(tab => {
      tab.addEventListener('click', selectTab)
    })
  }

  function init() {
    listenForChange();
    html.themeDefault.click();
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const theme = Theme();
  theme.init();
});
