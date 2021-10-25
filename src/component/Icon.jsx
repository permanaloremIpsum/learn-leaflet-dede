import L from 'leaflet';
import customMarker from 'leaflet/dist/images/marker-icon.png'

const iconMarker = new L.Icon({
    iconUrl: customMarker,
    iconRetinaUrl: customMarker,
    iconAnchor: [16, 37],
    popupAnchor: [-5, -20],
    shadowUrl: [16, 37],
    shadowSize: [16, 37],
    shadowAnchor: [16, 37],
    iconSize: new L.Point(25, 37),
});

export { iconMarker };