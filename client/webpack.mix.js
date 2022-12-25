let mix = require('laravel-mix');
mix.js("src/dist/dev/tailwind.js", "src/dist/js/main.js")
  .postCss("src/dist/dev/tailwind.css", "src/dist/css/main.css", [
    require("tailwindcss"),
  ]);