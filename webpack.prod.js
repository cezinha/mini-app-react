/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AtriomPlugin = require('atriom-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index',
  mode: 'production',
  output: {
    publicPath: 'auto',
  },
  optimization: {
    chunkIds: 'named',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  stats: {
    chunks: true,
    modules: false,
    chunkModules: true,
    chunkOrigins: true,
  },
  // for reducing the JS files in output
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'appshell_vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new AtriomPlugin({
      filename: 'atriom',
      outputPath: path.join(__dirname, '../'),
    }),
    new ModuleFederationPlugin({
      // best place to understand Module Federation config https://github.com/webpack/webpack/pull/10960
      name: 'AppShell',
      remotes: {
        Cards: 'Cards@https://mini-app-angular.herokuapp.com/remoteEntry.js',
      },
      shared: {
        '@types/react': {
          singleton: true,
          eager: true,
        },
        '@types/react-dom': {
          singleton: true,
          eager: true,
        },
        'date-fns': {
          singleton: true,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          eager: true,
        },
        react: {
          singleton: true,
          eager: true,
        },
        'react-is': {
          singleton: true,
          eager: true,
        },
        'styled-components': {
          singleton: true,
          eager: true,
        },
        'react-icons': {
          singleton: true,
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'src', 'assets'), to: path.resolve(__dirname, 'dist', 'assets') }],
    }),
  ],
};
