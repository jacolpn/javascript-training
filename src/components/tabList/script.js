function createNews(json, tab) {
  const listTab = json.content.map((item, index) => {
    return `
      <button class="wrapper-new" id="${item.id}" data-id="${item.id}">
        <div class="title-new">
          <h2>${index + 1}</h2>
          <p>${item.title}</p>
        </div>
        <div class="subject-new">${item.description}</div>
      </button>
    `;
  });
  tab.innerHTML = listTab.join("");
}

function selectNews(tab) {
  const testng = [...$(`#${tab}`).children];

  testng.forEach(tab => {
    tab.addEventListener('click', handleNews);
  });
}

function handleNews() {
  const target = event.currentTarget;
  maximizeNews(target.dataset.id);
}

function maximizeNews(id) {
  const tabcontent = $('#' + id);
  if (tabcontent.children[1].style.height === "100%") {
    tabcontent.children[1].style.height = "40px";
    tabcontent.children[1].style.whiteSpace = "nowrap";
  } else {
    tabcontent.children[1].style.height = "100%";
    tabcontent.children[1].style.whiteSpace = "initial";
  }
}
