import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon={solid('globe')} />
      &nbsp; my travel journal.
    </nav>
  );
}
