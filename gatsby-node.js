const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

const productionPlugin = [
  new CompressionPlugin({ algorithm: 'gzip' }),
  new BrotliPlugin(),
];

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [],
    },
    plugins: stage !== 'develop' ? productionPlugin : [],
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
