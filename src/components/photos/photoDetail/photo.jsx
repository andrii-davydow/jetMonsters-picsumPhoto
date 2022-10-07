import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import ModalImage from 'react-modal-image';

import { getImageDetail } from '../../../api/api';

import './photo.scss';
import LinkBack from '../linkBack/LinkBack';
import NotFound from '../../notFoud/notFound';
const Photo = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const user = localStorage.getItem('user');

	const [data, setData] = useState({});
	const [error, setError] = useState();

	useEffect(() => {
		if (!user) return navigate('/');
	}, [user]);

	useMemo(() => {
		getImageDetail(id)
			.then(({ data }) => {
				setData(data);
			})
			.catch((error) => {
				setError(true);
				alert(error);
			});
	}, []);

	const { author, download_url, height, width, url, id: photoId } = data;
	return !error ? (
		<>
			<div className="photo-detail">
				<div className="photo-info">
					<LinkBack />

					<ul className="photo-info-list">
						<li>
							<span>Автор:</span>
							<span>{author}</span>
						</li>
						<li>
							<span>Ширина фото:</span>
							<span>{`${width}px`}</span>
						</li>
						<li>
							<span>Висота фото:</span>
							<span>{`${height}px`}</span>
						</li>
					</ul>
					<div className="link-group">
						<a
							href={download_url}
							className="btn btn-download"
							target="_blank"
							download
						>
							Завантажити фото
						</a>
						<a
							href={url}
							className="link link-default"
							target="_blank"
							download
						>
							Фото на Unsplash
						</a>
					</div>
				</div>
				<div className="photo-block">
					<div className="photo-id">{photoId}</div>

					<ModalImage
						className="modal-img"
						small={download_url}
						large={download_url}
						height="700px"
						width="700px"
						alt={` ${author}`}
					/>
					<div className="icon-item">
						<FontAwesomeIcon icon={faEye} />
					</div>
					{/* <img
						src={download_url}
						className="photo-img"
						height="700px"
						width="700px"
					/> */}
				</div>
			</div>
		</>
	) : (
		<NotFound />
	);
};

export default Photo;
