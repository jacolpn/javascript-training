function TabNavigation() {
  function createTab() {
    html.sectionTabs.innerHTML += `
      <div>
        <div class="wrapper-tabs">
          <div id="tabs">
            <div class="tab-links">
              <button class="btn-tab" data-id="javascript-tab">JavaScript</button>
              <button class="btn-tab" data-id="testng-tab">TestNG </button>
              <button class="btn-tab" data-id="animated-tab">Animated</button>
            </div>

            <div class="tab-content">
              <section id="javascript-tab"></section>
              <section id="testng-tab"></section>
              <section id="animated-tab"></section>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function hidellTabContent() {
    const contents = [...$('.tab-content').children];

    contents.forEach(section => {
      section.style.display = "none";
      section.scrollTop = 0;
    });
  }
  
  function removeAllActiveClass() {
    const links = [...$('.tab-links').children];

    links.forEach(tab => {
      tab.className = tab.className.replace(" active", "");
    });
  }
  
  function showCurrentTab(id) {
    const javascriptTab = $('#javascript-tab');
    const animatedTab = $('#animated-tab');
    const testngTab = $('#testng-tab');
    const tabcontent = $('#' + id);

    tabcontent.style.display = "block";

    if (id === 'javascript-tab') {
      createNews(javaScriptJSON, javascriptTab);
      selectNews(id);
    }
    if (id === 'testng-tab') {
      createNews(testngJSON, testngTab);
      selectNews(id);
    }
    if (id === 'animated-tab') {
      createNews(animatedJSON, animatedTab);
      selectNews(id);
    }
  }

  function selectTab(event) {
    const target = event.currentTarget;

    hidellTabContent();
    removeAllActiveClass();
    showCurrentTab(target.dataset.id);

    target.className += " active";
  }
  
  function listenForChange() {
    const links = [...$('.tab-links').children];

    links.forEach(tab => {
      tab.addEventListener('click', selectTab);
    });
  }
  
  function init() {
    createTab();
    hidellTabContent();
    listenForChange();
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});
