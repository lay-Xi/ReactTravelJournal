import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Location(props) {
  return (
    <div className='location'>
      <img className='location--image' src={props.data.imageUrl} alt='' />
      <section className='location--details'>
        <span className='location--location'>
          <FontAwesomeIcon className='red' icon={solid('location-dot')} />
          &nbsp; <p className='location--country'>{props.data.location}</p>{' '}
          &nbsp;&nbsp;
          <a className='location--link' href={props.data.googleMapsUrl}>View on Google Maps</a>
        </span>
        <h1 className='location--title'>{props.data.title}</h1>
        <span>
          <b>
            {props.data.startDate} - {props.data.endDate}
          </b>
        </span>
        <p className='location--description'>{props.data.description}</p>
      </section>
    </div>
  );
}
