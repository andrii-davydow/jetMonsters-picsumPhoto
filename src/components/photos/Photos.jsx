import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { getImages } from '../../api/api';

import PerPage from '../perPage/PerPage';

import './photos.scss';
import './pagination.scss';
import CoverPhoto from './coverPhoto/CoverPhoto.jsx';
import PhotoItem from './photoItem/PhotoItem';
import Pagination from '../pagination/Pagination';

const Photos = () => {
	const navigate = useNavigate();
	/* const user = localStorage.getItem('user'); */
	const TOTAL_PHOTO = 993;

	const [currentPage, setCurrentPage] = useState(1);
	const [limitPage, setlimitPage] = useState(10);
	const [pageCount, setPageCount] = useState(0);

	const [data, setData] = useState([]);

	/* useEffect(() => {
		if (!user) return navigate('/');
	}, [user]); */

	useEffect(() => {
		getImages(currentPage, limitPage)
			.then(({ data }) => {
				setData(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [currentPage, limitPage]);

	useEffect(() => {
		setPageCount(Math.ceil(TOTAL_PHOTO / (limitPage * currentPage)));
	}, [limitPage]);

	const updateLimit = (limit) => {
		setlimitPage(limit);
	};

	const updateCurrentPage = (num_page) => {
		setCurrentPage(++num_page.selected);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const [wishlist, setwishList] = useState();

	useEffect(() => {
		const storageWishlist = JSON.parse(localStorage.getItem('wishlist'));

		setwishList(storageWishlist ? storageWishlist : []);
	}, []);

	const addWishlist = (photo) => {
		const newPhotoId = photo.id;
		const getWishlistId = wishlist?.map(({ id }) => id);
		const isIdWhishlist = getWishlistId?.includes(newPhotoId);

		console.log(isIdWhishlist);
		const newWishlist = [...wishlist, photo];

		if (!isIdWhishlist) {
			localStorage.setItem('wishlist', JSON.stringify(newWishlist));
			setwishList(newWishlist);
			alert('Фотографію додано до списку збережених');
		} else {
			alert('Ця фотографія вже є у списку збережених');
		}
	};

	return (
		<div className="photos-content">
			<CoverPhoto />
			<PerPage updateLimit={updateLimit} />
			<div className="photos-flex">
				{data.map((photo) => (
					<PhotoItem
						photo={photo}
						addWishlist={() => addWishlist(photo)}
						key={photo.id}
					/>
				))}
			</div>
			<Pagination pageCount={pageCount} onPageChange={updateCurrentPage} />
		</div>
	);
};

export default Photos;
