import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import customMarker from 'leaflet/dist/images/marker-icon.png'
import nationalParks from '../data/national-parks.json'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: customMarker,
    iconUrl: customMarker,
    shadowUrl: customMarker
});
  

const MapGeoJson = () => {
    const mapRef = useRef()

    useEffect(() => {
        const { current = {} } = mapRef
        const { leafletElement: map } = current

        if(!map) return;

        const parksGeoJson = new L.GeoJSON(nationalParks, {
            onEachFeature: (feature = {}, layer) => {
                const { properties = {} } = feature
                const { Name } = properties

                if( !Name ) return;

                layer.bindPopup(`<p>${Name}</p>`)
            }
        })

        parksGeoJson.addTo(map)
    }, [])

    return(
        <div className="p-4">
            <h1 className="text-dark-500 font-bold mb-3 text-3xl">Map GeoJson</h1>
            <Map ref={mapRef} center={[39.50, -98.35]} zoom={4} style={{height: 400}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
            </Map>
        </div>
    )
}

export default MapGeoJson