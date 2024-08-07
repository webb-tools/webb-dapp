const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const preset = require('../../tailwind.preset.cjs');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    join(
      __dirname,
      '{src,pages,components,containers,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    join(
      __dirname,
      '../../libs/webb-ui-components',
      'src/{pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8E59FF',
      },
      backgroundImage: {
        glass:
          'linear-gradient(180deg,rgba(255,255,255,0.80) 0%,rgba(255,255,255,0.00) 100%)',
        glass_dark:
          'linear-gradient(180deg,rgba(43,47,64,0.80) 0%,rgba(43,47,64,0.00) 100%)',
        token_info_card:
          'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)',
        token_info_card_dark:
          'linear-gradient(180deg, #2B2F40 0%, rgba(43, 47, 64, 0.5) 100%)',
        validator_table: 'linear-gradient(180deg, #C0C5D800 0%, #FFFFFF66 40%)',
        validator_table_dark:
          'linear-gradient(180deg, #707AA600 0%, #2B2F4066 40%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hide': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',

            /* Firefox */
            'scrollbar-width': 'none',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },

          '.scrollbar-default': {
            /* IE and Edge */
            '-ms-overflow-style': 'auto',

            /* Firefox */
            'scrollbar-width': 'auto',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'block',
            },
          },
        },
        ['responsive'],
      );
    }),
  ],
};
