import React from "react";
import { Map, TileLayer, LayersControl } from "react-windy-leaflet";
import { GoogleLayer } from "../src";
const { BaseLayer, Overlay } = LayersControl;

const googleKey = "GOOGLE-KEY";
const terrain = "TERRAIN";
const road = "ROADMAP";
const satellite = "SATELLITE";

const windyKey = "WINDY-KEY";

export default class GoogleExample extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Map
        id="windy"
        style={{height: "500px"}}
        windyKey={windyKey}
        overlayOpacity="0.5"
        center={[42.09618442380296, -71.5045166015625]}
        zoom={2}
        zoomControl={true}
        mapElements={
          <LayersControl position="topright">
            <BaseLayer name="OpenStreetMap.Mapnik">
              <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            </BaseLayer>
            <BaseLayer checked name="Google Maps Roads">
              <GoogleLayer googlekey={googleKey} maptype={road} />
            </BaseLayer>
            <BaseLayer name="Google Maps Terrain">
              <GoogleLayer googlekey={googleKey} maptype={terrain} />
            </BaseLayer>
            <BaseLayer name="Google Maps Satellite">
              <GoogleLayer googlekey={googleKey} maptype={satellite} />
            </BaseLayer>
          </LayersControl>
        }
      />
    );
  }
}
