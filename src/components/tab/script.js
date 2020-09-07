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

  // function showList(json, tab) {
  //   const listTab = json.content.map(item => {
  //     return `
  //       <div>
  //         <div class="tab-list-wrapper">
  //           <div class="title-tab-list">
  //             <h2 class="number-js">${item.id}</h2>
  //             <p class="title-js">${item.title}</p>
  //           </div>
  //         <div class="subject-tab-list">${item.description}</div>
  //       </div>
  //     `;
  //   });
  //   tab.innerHTML = listTab.join("");
  // }

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
