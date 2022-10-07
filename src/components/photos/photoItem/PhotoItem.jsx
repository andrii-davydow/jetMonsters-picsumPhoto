import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PreloadImage from 'react-preload-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './photoItem.scss';
const PhotoItem = ({ photo, addWishlist, classActive }) => {
	const { id, download_url, author } = photo;

	return (
		<div className="photo-item">
			<Link to={`/photos/${id}`} className="photo-link">
				<PreloadImage className="preload-img" src={download_url} lazy />
				{/* <picture>
					<source type="image/webp" srcset={download_url}> 
					<source srcset={download_url} media="(max-width: 767px)"/> 
					<img
						src={download_url}
						className="photo-img"
						height="500px"
						width="800px"
						loading="lazy"
					/>
				</picture> */}

				<h3 className="photo-author">{author}</h3>
			</Link>
			<button
				className={`btn btn-wishlist ${classActive ? classActive : null}`}
				onClick={addWishlist}
			>
				<FontAwesomeIcon icon={faHeart} />
			</button>
		</div>
	);
};
export default PhotoItem;
