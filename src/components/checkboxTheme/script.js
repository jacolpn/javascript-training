function Theme() {
  function changeTheme() {
    const getStyle = (element, style) => 
      window
        .getComputedStyle(element)
        .getPropertyValue(style);
  
    const initialColors = {
      bg: getStyle(html.html, "--bg"),
      bgPanelLow: getStyle(html.html, "--bg-panel-low"),
      bgPanelMedium: getStyle(html.html, "--bg-panel-medium"),
      bgPanelHigh: getStyle(html.html, "--bg-panel-high"),
      colorText: getStyle(html.html, "--color-text")
    }

    const whiteMode = {
      colorText: "#2a2e2a",
      bg: "#FCFCFC",
      bgPanelLow: "rgba(255, 255, 255, 0.88)",
      bgPanelMedium: "rgba(255, 255, 255, 0.55)",
      bgPanelHigh: "rgba(255, 255, 255, 0.33)"
    }

    const transformKey = key => 
      "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

    const changeColors = (colors) => {
      Object.keys(colors).map(key => 
        html.html.style.setProperty(transformKey(key), colors[key]) 
      );
    }
    const checkbox = $("input[name=theme]");
    checkbox.addEventListener("change", ({target}) => {
      target.checked ? changeColors(whiteMode) : changeColors(initialColors)
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
  createHeader();
  theme.init();
});
