const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
//   devServer: {
//     host: '127.0.0.1',
//     port: 8080,

//   }
};
