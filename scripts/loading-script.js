function LoadingPage() {
  const html = {
    sectionStart: $(".section-start"),
    sectionLoading: $('.loading-effect'),
    wrapperLoading: $('.wrapper-loading'),
  }

  function back() {
    html.wrapperLoading.addEventListener("click", event => {
      html.sectionStart.classList.remove("form-close-start");
      html.sectionLoading.style.display = "none";
      html.sectionStart.style.display = "flex";
    });
  }

  function init() {
    back();
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const loadingPage = LoadingPage();
  loadingPage.init();
});
