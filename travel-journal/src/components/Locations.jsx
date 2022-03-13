import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Location() {
  return (
    <div>
      <img src='https://source.unsplash.com/WLxQvbMyfas' alt='' />
      <span>
        <FontAwesomeIcon icon={solid('location-dot')} />
        <p>JAPAN</p>
        <a href='https://goo.gl/maps/1DGM5WrWnATgkSNB8'>View on Google Maps</a>
      </span>
      <h1>Mount Fuji</h1>
      <span>
        <b>start - end</b>
      </span>
      <p>description</p>
    </div>
  );
}
