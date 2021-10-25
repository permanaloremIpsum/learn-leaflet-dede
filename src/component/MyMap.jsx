import { Map, TileLayer, Marker, Popup, Tooltip, Rectangle } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { iconMarker } from './Icon'

const MyMap = () => {
    const rectangle = [
        [-7.744988536639628, 110.4325790735174],
        [-7.74983104913538, 110.43703836008865],
    ]
    return(
        <div className="p-4">
            <h1 className="text-red-500 font-bold mb-3 text-3xl">Learn Map</h1>
            <Map center={[-7.735422, 110.439663]} zoom={14} scrollWheelZoom={true} style={{height: 400}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={iconMarker} position={[-7.735422, 110.439663]}>
                    <Popup>
                        <p className="text-blue-500 font-bold">This is My Home</p>
                    </Popup>
                </Marker>
                <Marker icon={iconMarker} position={[-7.750849288857416, 110.43424166136899]}>
                    <Tooltip direction="left">
                        <p className="text-red-500 font-bold">Lampu Merah Stadion</p>
                    </Tooltip>
                </Marker>
                <Rectangle bounds={rectangle} color="red">
                    <Tooltip sticky>sticky Tooltip for Rectangle</Tooltip>
                </Rectangle>
            </Map>
        </div>
    )
}

export default MyMap