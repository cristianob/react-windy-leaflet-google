# react-windy-leaflet-google [![npm version](https://img.shields.io/badge/npm-3.3.1-blue.svg)](https://www.npmjs.com/package/react-windy-leaflet-google)
A port of the awesome [React-Leaflet-Google](https://github.com/Charmatzis/react-leaflet-google) build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet) for using with [React-Windy-Leaflet](https://github.com/cristianob/react-windy-leaflet)

The google maps layer is using the plugin from [Leaflet.GridLayer.GoogleMutant](https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant) 

Also it uses [google-maps](https://www.npmjs.com/package/google-maps), a wrapper for asynchronously download Google Maps API in the browser.

![Example](images/example.gif)

# supported versions
- "react-windy-leaflet": "^0.1.1"
- "leaflet": "1.4.0""
- "react": "^15.0.0 || ^16.0.0"


# Getting started

```
import { Map, TileLayer, LayersControl } from 'react-windy-leaflet'
import { GoogleLayer } from "react-windy-leaflet-google";
const { BaseLayer } = LayersControl;
const key = 'Your Key goes here';
const terrain = 'TERRAIN';
const road = 'ROADMAP';


....

  <BaseLayer checked name='Google Maps Roads'>
     <GoogleLayer googlekey={key}  maptype={road}/>
  </BaseLayer>
  <BaseLayer  name='Google Maps Terrain'>
     <GoogleLayer googlekey={key}  maptype={terrain} />
  </BaseLayer>


```

For more details on how to use this plugin check the example.
