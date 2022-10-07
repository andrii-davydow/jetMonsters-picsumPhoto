import { useEffect, useState } from 'react';

import './perPage.scss';
const PerPage = ({ updateLimit }) => {
	const limitRender = [10, 20, 30, 50];
	const [radioActive, setRadioActive] = useState();

	const changeLimit = (num) => {
		setRadioActive(+num);
		updateLimit(+num);
	};

	useEffect(() => {
		setRadioActive(limitRender[0]);
	}, []);

	return (
		<div className="photos-setting">
			<h3 className="title">Фотографій на сторінці</h3>
			{limitRender.map((num, id) => (
				<div className="radio-group" key={id}>
					<input
						type="radio"
						value={num}
						id={id}
						name="limit-photo"
						onChange={(e) => changeLimit(e.target.value)}
						checked={radioActive === num}
					/>
					<label htmlFor={id}>{num}</label>
				</div>
			))}
		</div>
	);
};
export default PerPage;
