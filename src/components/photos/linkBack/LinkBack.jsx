import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './linkBack.scss';
const LinkBack = ({ textLink }) => {
	return (
		<Link to="/photos" className="link-back">
			<span>
				<FontAwesomeIcon icon={faArrowLeft} />
			</span>{' '}
			{textLink ? textLink : 'Усі фото'}
		</Link>
	);
};

export default LinkBack;
