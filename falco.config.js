const { resolve } = require('path')

module.exports = {
  entry: resolve(__dirname, './entry'),
  externals: [
    {
      name: 'react',
      root: 'React',
      urls: 'https://cdn.staticfile.org/react/16.8.6/umd/react.production.min.js',
    },
    {
      name: 'react-dom',
      root: 'ReactDOM',
      urls: 'https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js',
    },
    {
      name: 'antd',
      root: 'antd',
      urls: ['https://cdn.staticfile.org/moment.js/2.24.0/moment.min.js', 'https://cdn.staticfile.org/antd/3.18.0/antd-with-locales.min.js'],
    },
  ],
  npm: {
    registry: 'https://registry.npm.taobao.org',
  },
  cssModule: true,
  mode: 'development',
}
