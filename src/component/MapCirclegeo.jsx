import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { iconMarker } from './Icon'
// import L from 'leaflet'
import { useState } from 'react';
import Control from 'react-leaflet-control';

const MapCirclegeo = () => {
    const [location, setLocation] = useState([-7.735422, 110.439663])
    const [name, setName] = useState('This is my Home')

    let goHome = () => {
        setLocation([-7.735422, 110.439663])
        setName('This is my Home')
    }

    let goToCirclegeo = () => {
        setLocation([-6.917087563664246, 107.63797665250873])
        setName('PT Circlegeo')
    }

    return(
        <div className="p-4">
            <h1 className="text-blue-500 font-bold mb-3 text-3xl">Handle Map with Control Button</h1>
            <Map center={location} zoom={17} scrollWheelZoom={true} style={{height: 400}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                 <Marker icon={iconMarker} position={location}>
                    <Popup>
                        <p className="text-blue-500 font-bold">{name}</p>
                    </Popup>
                </Marker>
                <Control position="bottomright" >
                    <button
                        className="inline-block mt-3 mr-2 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
                        onClick={goHome}
                    >
                    Go Home
                    </button>
                    <button
                        className="inline-block mt-3 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
                        onClick={ goToCirclegeo }
                    >
                    Go to Circlegeo
                    </button>
                </Control>
            </Map>
        </div>
    )
}

export default MapCirclegeo