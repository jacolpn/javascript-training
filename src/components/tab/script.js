function TabNavigation() {
  function hidellTabContent() {
    html.contents.forEach(section => {
      section.style.display = "none";
      section.scrollTop = 0;
    });
  }
  
  function removeAllActiveClass() {
    html.links.forEach(tab => {
      tab.className = tab.className.replace(" active", "");
    });
  }
  
  function showCurrentTab(id) {
    const tabcontent = $('#' + id);
    tabcontent.style.display = "block";

    if (id === 'javascript-tab') {
      showList(javaScriptJSON, html.javascriptTab);
    }
    if (id === 'testng-tab') {
      showList(testngJSON, html.testngTab);
    }
    if (id === 'animated-tab') {
      showList(animatedJSON, html.animatedTab);
    }
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
      tab.addEventListener('click', selectTab);
    });
  }
  
  function init() {
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
