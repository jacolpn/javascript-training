function Theme() {
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
      colorText: getStyle(html.body, "--color-text")
    }

    const darkMode = {
      colorText: "#d4f1d4",
      bg: "#333333",
      bgPanelLow: "rgba(255, 255, 255, 0.88)",
      bgPanelMedium: "rgba(255, 255, 255, 0.55)",
      bgPanelHigh: "rgba(255, 255, 255, 0.33)"
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
