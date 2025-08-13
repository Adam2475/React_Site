import { useState } from "react";
import { useMemo } from "react";

import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
 
export default function Map2() {
    const position = useMemo(() => ({ lat: 43.861679, lng: 11.262992 }), []);
  return (
    <APIProvider apiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}>
      <div className="map-container">
        <Map
            defaultZoom={18}
            defaultCenter={position}
            mapId={import.meta.env.VITE_MAP_ID}
            gestureHandling="cooperative"
            //gestureHandling="greedy"    // lets you drag + scroll
            disableDefaultUI={false}    // keeps UI controls
            //zoomControl={true}          // shows zoom buttons
          />
          <AdvancedMarker position={position}>
            {/* <Pin background={"grey"} borderColor={"green"} glyphColor={"purple"}></Pin> */}

          </AdvancedMarker>

      </div>
    </APIProvider>
  );
}

