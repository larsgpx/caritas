const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
    quienesSomos: Path.resolve(__dirname, '../src/scripts/quienes-somos.js')
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: 'public' }
    ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html')
    }),    
    new HtmlWebpackPlugin({
      filename:'quienes-somos.html',
      template: Path.resolve(__dirname, '../src/quienes-somos.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'nuestra-labor.html',
      template: Path.resolve(__dirname, '../src/nuestra-labor.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'programas.html',
      template: Path.resolve(__dirname, '../src/programas.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'programa.html',
      template: Path.resolve(__dirname, '../src/programa.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'tienda-virtual-tes.html',
      template: Path.resolve(__dirname, '../src/tienda-virtual-tes.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'interna-tes.html',
      template: Path.resolve(__dirname, '../src/interna-tes.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'noticias.html',
      template: Path.resolve(__dirname, '../src/noticias.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'noticia.html',
      template: Path.resolve(__dirname, '../src/noticia.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'como-donar.html',
      template: Path.resolve(__dirname, '../src/como-donar.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'publicaciones.html',
      template: Path.resolve(__dirname, '../src/publicaciones.html')      
    }),
    new HtmlWebpackPlugin({
      filename:'publicacion.html',
      template: Path.resolve(__dirname, '../src/publicacion.html')      
    }),
   
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
    ]
  }
};
