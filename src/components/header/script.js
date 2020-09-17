function createHeader() {
  html.header.innerHTML += `
    <div>
      <div class="name-header"></div> 
      <div class="toggle">
        <input id="switch" type="checkbox" name="theme">
        <label class="label-checkbox" for="switch">Toggle</label>
      </div>
    </div>
  `;
}

function showNameHeader(value) {
  const nameHeader = $('.name-header');
  nameHeader.innerHTML += `Hello <b>${value}</b>!!`;
}
