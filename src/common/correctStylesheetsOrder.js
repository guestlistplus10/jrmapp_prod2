export default function correctStylesheetsOrder({ preview, lightMode }) {
  let previewStylesheet = document.querySelector(`link[href="/landing-preview/css/preview-style.css"]`);
  let globalDarkStylesheet = document.querySelector(`link[href="/dark/assets/css/style.css"]`);
  let globalLightStylesheet = document.querySelector(`link[href="/light/assets/css/style.css"]`);
  let pluginsDarkStylesheet = document.querySelector(`link[href="/dark/assets/css/plugins.css"]`);
  let pluginsLightStylesheet = document.querySelector(`link[href="/light/assets/css/plugins.css"]`);

  if (lightMode && !preview && globalDarkStylesheet) globalDarkStylesheet.remove();
  if (lightMode && !preview && pluginsDarkStylesheet) pluginsDarkStylesheet.remove();
  if (!lightMode && globalLightStylesheet) globalLightStylesheet.remove();
  if (!lightMode && pluginsLightStylesheet) pluginsLightStylesheet.remove();

  if (preview && previewStylesheet) {
    document.head.append(previewStylesheet);
    if (globalLightStylesheet) globalLightStylesheet.remove();
    if (pluginsLightStylesheet) pluginsLightStylesheet.remove();
  } else if (!preview && previewStylesheet) {
    previewStylesheet.remove();
  }
}