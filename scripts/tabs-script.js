function TabNavigation() {
  const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-content').children],
    openTab: $('[data-open]'),
    numberJS: $('.number-js'),
    titleJS: $('.title-js'),
    subjectJS: $('.subject-javascript'),
    prepare: $('#prepare'),
  }
  
  function hidellTabContent() {
    html.contents.forEach(section => {
      section.style.display = "none";
    })
  }
  
  function removeAllActiveClass() {
    html.links.forEach(tab => {
      tab.className = tab.className.replace(" active", "");
    })
  }
  
  function showCurrentTab(id) {
    const tabcontent = $('#' + id);
    tabcontent.style.display = "block";
  }

  function selectTab(event) {
    hidellTabContent();
    removeAllActiveClass();
    const target = event.currentTarget;
    showCurrentTab(target.dataset.id);
    target.className += " active";
  }
  
  function listenForChange() {
    html.links.forEach(tab => {
      tab.addEventListener('click', selectTab)
    })
  }
  
  function init() {
    hidellTabContent();
    listenForChange();
    html.openTab.click();
    console.log(javaScript.content[0].description);
    console.log(javaScript.content.length);
    // html.numberJS.innerHTML += javaScript.content[0].id;
    // html.titleJS.innerHTML += javaScript.content[0].title;
    // html.subjectJS.innerHTML += javaScript.content[0].description;

    var listJS = javaScript.content.map(function(item) {
      return `
        <div>
          <div class="javascript-wrapper">
            <div class="title-javascript">
              <h2 class="number-js">${item.id}</h2>
              <p class="title-js">${item.title}</p>
            </div>
            <div class="subject-javascript">${item.description}</div>
          </div>
      `;
    });
    html.prepare.innerHTML = listJS.join("");

  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});
