import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoItem from '../photos/photoItem/PhotoItem';
import ClearWishlist from './clear/ClearWishlist';
import Empty from './empty/Empty';
const Wishlist = () => {
	const navigate = useNavigate();

	const [data, setData] = useState([]);

	useEffect(() => {
		const storageWishlist = JSON.parse(localStorage.getItem('wishlist'));

		setData(storageWishlist ? storageWishlist : []);
	}, []);

	return data.length > 0 ? (
		<>
			<ClearWishlist />
			<div className="photos-content">
				<div className="photos-flex">
					{data.map((photo) => (
						<PhotoItem
							photo={photo}
							key={photo.id}
							classActive="active-wishlist"
						/>
					))}
				</div>
			</div>
		</>
	) : (
		<Empty />
	);
};

export default Wishlist;
