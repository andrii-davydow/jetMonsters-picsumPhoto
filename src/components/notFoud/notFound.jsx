import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './notFound.scss';
const NotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/'); //-1 - назад
		}, 2000);
	}, []);
	return (
		<>
			<div className="not-found">404</div>
		</>
	);
};

export default NotFound;
