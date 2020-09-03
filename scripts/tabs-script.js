function TabNavigation() {
  const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-content').children],
    openTab: $('[data-open]'),
    javascriptTab: $('#javascript-tab'),
    testngTab: $('#testng-tab'),
    animatedTab: $('#animated-tab'),
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

    if (id = 'javascript-tab') {
      showJavascriptTab();
    } else if (id = 'testng-tab') {
      showTestngTab();
    } else if (id = 'animated-tab') {
      showJavaTab();
    }
  }

  function showJavascriptTab() {
    const listJS = javaScriptJSON.content.map(item => {
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
    html.javascriptTab.innerHTML = listJS.join("");
  }

  function showTestngTab() {
    const listTestng = testngJSON.content.map(item => {
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
    html.testngTab.innerHTML = listTestng.join("");
  }

  function showJavaTab() {
    const listAnimated = animatedJSON.content.map(item => {
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
    html.animatedTab.innerHTML = listAnimated.join("");
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
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const tabNavigation = TabNavigation();
  tabNavigation.init();
});
