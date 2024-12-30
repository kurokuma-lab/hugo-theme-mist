import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'


const themes = {
    default: {
      breakpoints: {
        'sm': '768px',
        'md': '1024px',
        'lg': '1280px',
      },
    }
};

const selectedTheme = themes['default'];

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      }
    })
  ],
  theme: {
    extends: selectedTheme
  }
});