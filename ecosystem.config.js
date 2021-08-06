// eslint-disable-next-line no-undef
module.exports = {
  apps : [
    {
      name: 'react-mini-app',
      script: 'npx',
      interpreter: 'none',
      args: 'serve ./dist/ -p 80'
    }
  ]
};
