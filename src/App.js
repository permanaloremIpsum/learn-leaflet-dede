import "tailwindcss/tailwind.css"
import MyMap from "./component/MyMap";
import MapControl from "./component/MapControl";
import MapCirclegeo from "./component/MapCirclegeo";
import MapGeoJson from "./component/MapGeoJson";

function App() {
  return (
    <div>
      <MyMap />
      <MapControl />
      <MapCirclegeo/>
      <MapGeoJson/>
    </div>
  );
}

export default App;
