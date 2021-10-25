import { Map, TileLayer, Marker, Popup, Rectangle, LayersControl, LayerGroup, Circle, FeatureGroup, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { iconMarker } from './Icon'
import React, {useState, useRef, useMemo, useCallback} from 'react';

const MapControl = () => {
    const center = [-7.735422, 110.439663]
    const rectangle = [
        [-7.744988536639628, 110.4325790735174],
        [-7.74983104913538, 110.43703836008865],
    ]
    
    function DraggableMarker() {
        const [draggable, setDraggable] = useState(false)
        const [position, setPosition] = useState(center)
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
          () => ({
            dragend() {
              const marker = markerRef.current
              if (marker != null) {
                setPosition(marker.getLatLng())
              }
            },
          }),
          [],
        )
        const toggleDraggable = useCallback(() => {
          setDraggable((d) => !d)
        }, [])
      
        return (
          <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
            icon={iconMarker}>
            <Popup minWidth={90}>
              <span onClick={toggleDraggable}>
                {draggable
                  ? `Marker is draggable in position ${position}`
                  : 'Click here to make marker draggable'}
              </span>
            </Popup>
          </Marker>
        )
      }
    return(
        <div className="p-4">
            <h1 className="text-green-500 font-bold mb-3 text-3xl">Learn Map Control</h1>
            <Map center={center} zoom={13} scrollWheelZoom={true} style={{height: 400}}>
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.Overlay name="Marker with popup and tooltip">
                        <LayerGroup>
                            <Marker position={center} icon={iconMarker}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                            <Marker icon={iconMarker} position={[-7.750849288857416, 110.43424166136899]}>
                                <Tooltip direction="left">
                                    <p className="text-red-500 font-bold">Lampu Merah Stadion</p>
                                </Tooltip>
                            </Marker>
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay checked name="Layer group with circles">
                        <LayerGroup>
                            <Circle
                                center={center}
                                pathOptions={{ fillColor: 'blue' }}
                                radius={200}
                            />
                            <Circle
                                center={center}
                                pathOptions={{ fillColor: 'red' }}
                                radius={100}
                                stroke={false}
                            />
                            <LayerGroup>
                                <Circle
                                center={[-7.715725929245367, 110.44450562994452]}
                                pathOptions={{ color: 'green', fillColor: 'green' }}
                                radius={100}
                                />
                            </LayerGroup>
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Feature group">
                        <FeatureGroup pathOptions={{ color: 'purple' }}>
                            <Popup>Popup in FeatureGroup</Popup>
                            <Circle center={[51.51, -0.06]} radius={200} />
                            <Rectangle bounds={rectangle} />
                        </FeatureGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay name="Mark with dragable">
                        <LayerGroup>
                            <DraggableMarker />
                        </LayerGroup>
                    </LayersControl.Overlay>
                </LayersControl>
            </Map>
        </div>
    )
}

export default MapControl