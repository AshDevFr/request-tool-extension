const webpack = require('webpack'),
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development',
      isProd = nodeEnv === 'production',
      appVersion = require('./package.json').version;

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/app/index.html'),
    filename: 'index.html',
    inject: 'body',
    chunks: ['app', 'vendors']
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    chunks: ['app'],
    minChunks: Infinity
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    __APP_VERSION__: JSON.stringify(appVersion)
  }),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, 'manifest.json')
    },
    {
      from: path.resolve(__dirname, 'src/assets'),
      to: path.resolve(__dirname, 'dist/assets')
    },
    {
      from: path.resolve(__dirname, 'extension')
    }
  ])
];

if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  entry: {
    app: ['./src/app/index'],
    background : ['./src/background/index'],
    vendors: ['react', 'react-dom', 'react-redux', 'redux', 'react-router-redux', 'raven-js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [['es2015', {modules: false}], 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins,
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.scss'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 4200,
    compress: isProd,
    inline: !isProd,
    hot: !isProd,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    },
    watchOptions: {
      poll: true
    }
  }
};
