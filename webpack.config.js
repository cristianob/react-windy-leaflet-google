/* eslint-disable */
module.exports = {
  output: {
    library: 'ReactLeaflet',
    libraryTarget: 'umd'
  },
  externals: [
    {
      leaflet: {
        amd: 'leaflet',
        commonjs: 'leaflet',
        commonjs2: 'leaflet',
        root: 'L'
      }
    },
    {
      jquery: {
        amd: 'jquery',
        commonjs: 'jquery',
        commonjs2: 'jquery',
         root: 'JQuery'
      }
    },
    {
      'react-windy-leaflet': {
        amd: 'react-windy-leaflet',
        commonjs: 'react-windy-leaflet',
        commonjs2: 'react-windy-leaflet'
      }
    },
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React'
      }
    },
    {
      'google-maps': {
        amd: 'google-maps',
        commonjs: 'google-maps',
        commonjs2: 'google-maps',
        root: 'GoogleMapsLoader'
      }
    }
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
};

