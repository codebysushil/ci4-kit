import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  include: [
    './index.html',
    './pages/**/*.html',
    './src/**/*,js',
    './app/Views/**/*.php'
  ],
  safelist: [
    'text-green-600',
    'bg-yellow-500',
  ],
});
