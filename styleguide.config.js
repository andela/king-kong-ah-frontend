const path = require('path');

module.exports = {
  sections: [
    {
      name: 'Atoms',
      components: 'src/components/UI/atoms/**/[A-Z]*.jsx',
    },
    {
      name: 'Molecules',
      components: 'src/components/UI/molecules/**/[A-Z]*.jsx',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, '/src/styles/ThemeWrapper/ThemeWrapper.jsx'),
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Inknut+Antiqua|Roboto',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Roboto", "Inknut Antiqua", sans-serif',
    },
  },
};
