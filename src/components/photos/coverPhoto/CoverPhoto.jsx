import { useEffect, useState } from 'react';
import { getImageRandom } from '../../../api/api';

import './coverPhoto.scss';
const CoverPhoto = () => {
	const [cover, setCover] = useState();
	useEffect(() => {
		getImageRandom(1200, 400)
			.then(({ request }) => {
				const { responseURL } = request;
				setCover(responseURL);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);
	return (
		<div className="cover-photo">
			<img src={cover} width="1200" height="400" />
			<h1 className="title">JetMonsters Photos</h1>
		</div>
	);
};

export default CoverPhoto;
