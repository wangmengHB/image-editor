const path = require('path')


module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
      'demo': path.resolve(__dirname, '../src/demo')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/',
        libraryTarget: 'umd',
        library: 'demo'
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    },
    module: {
        rules: [
          {
            test: /\.(js|ts|jsx|tsx)$/,
            include: [
              path.resolve(__dirname, '../src')
            ],
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: 'ts-loader',
              }
            ]
          },
          {
            test: /\.(less|css)$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                }
              }
            ]
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'file-loader',
              }
            ]
          }
        ]
    },
    node: {
      setImmediate: false,
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    }
}