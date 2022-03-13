import Navbar from "./components/Navbar";
import Location from "./components/Locations";
import data from './data.js';

export default function App() {
  let locations = data[0];

  return (
    <div>
      <Navbar />
      <Location 
        data = {locations}
      />
    </div>
  );
}
