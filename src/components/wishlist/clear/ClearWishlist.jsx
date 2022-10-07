import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './clearWishlist.scss';

const ClearWishlist = () => {
	const navigate = useNavigate();

	const clearWishlist = () => {
		navigate('/photos');
		localStorage.removeItem('wishlist');
	};
	return (
		<div className="clear-wishlist">
			<button className="btn-clear" onClick={clearWishlist}>
				<FontAwesomeIcon icon={faTrash} />
				Очистити список збережених
			</button>
		</div>
	);
};

export default ClearWishlist;
