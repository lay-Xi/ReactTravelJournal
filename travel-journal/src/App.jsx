import Navbar from './components/Navbar';
import Location from './components/Locations';
import data from './data.js';

export default function App() {
  let locations = data.map((location) => <Location data={location} />);

  return (
    <div>
      <Navbar />
      {locations}
    </div>
  );
}
