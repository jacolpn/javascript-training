function Theme() {
  const html = {
    body: $("html"),
    divTheme: ("#checkbox-theme"),
    checkbox: $("input[name=theme]"),
  }

  function changeTheme() {
    const getStyle = (element, style) => 
      window
        .getComputedStyle(element)
        .getPropertyValue(style);
  
    const initialColors = {
      bg: getStyle(html.body, "--bg"),
      bgPanelLow: getStyle(html.body, "--bg-panel-low"),
      bgPanelMedium: getStyle(html.body, "--bg-panel-medium"),
      bgPanelHigh: getStyle(html.body, "--bg-panel-high"),
      colorHeadings: getStyle(html.body, "--color-headings"),
      colorText: getStyle(html.body, "--color-text"),
    }

    const darkMode = {
      bg: "#333333",
      bgPanelLow: "rgba(255, 255, 255, 0.12)",
      bgPanelMedium: "rgba(255, 255, 255, 0.08)",
      bgPanelHigh: "rgba(255, 255, 255, 0.04)",
      colorHeadings: "#3664FF",
      colorText: "#B5B5B5"
    }

    const transformKey = key => 
      "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

    const changeColors = (colors) => {
      Object.keys(colors).map(key => 
        html.body.style.setProperty(transformKey(key), colors[key]) 
      );
    }

    html.checkbox.addEventListener("change", ({target}) => {
      target.checked ? changeColors(darkMode) : changeColors(initialColors)
    });
  }
  
  function init() {
    changeTheme();
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const theme = Theme();
  theme.init();
});
