const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const preset = require('@webb-tools/tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(
      __dirname,
      '../../libs/webb-ui-components',
      'src/{pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      backgroundImage: {
        body: "url('/static/assets/bg.png')",
        body_dark: "url('/static/assets/bg-dark.png')",
        glass:
          'linear-gradient(180deg,rgba(255,255,255,0.80) 0%,rgba(255,255,255,0.00) 100%)',
        glass_dark:
          'linear-gradient(180deg,rgba(43,47,64,0.80) 0%,rgba(43,47,64,0.00) 100%)',
      },
    },
  },
  safelist: ['bg-glass', 'dark:bg-glass_dark'],
  plugins: [],
};
