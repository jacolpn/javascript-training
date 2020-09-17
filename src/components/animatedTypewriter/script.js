function LoadingPage() {
  function createAnimation() {
    html.sectionLoading.innerHTML += `
      <div>
        <div class="wrapper-loading">
          <div class="hand-loading"></div>
          <div class="slider-loading"></div>
          <div class="keyboard-loading"></div>
          <div class="paper-loading"></div>
        </div>
        <p>Page not found</p>
      </div>
    `;
  }

  function back() {
    const wrapperLoading = $('.wrapper-loading');
    wrapperLoading.addEventListener("click", event => {
      html.sectionStart.classList.remove("form-close-start");
      html.sectionLoading.style.display = "none";
      html.sectionStart.style.display = "flex";
    });
  }

  function init() {
    createAnimation();
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
