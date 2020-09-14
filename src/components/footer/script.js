function Footer() {
  function showFooter() {
    html.footer.innerHTML += `
      <div>
        <p>by Jackson Neves</P>
      </div>
    `;
  }
  
  function init() {
    showFooter();
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const footer = Footer();
  footer.init();
});
