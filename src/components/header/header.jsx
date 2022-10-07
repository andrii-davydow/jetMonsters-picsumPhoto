import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';

import './header.scss';
import { useAuth } from '../../hook/useAuth';
const Header = () => {
	const navigate = useNavigate();
	const { logOut, user } = useAuth();
	const handleLogout = () => {
		logOut(() => navigate('/'));
	};

	return (
		<header className="profile-header">
			<nav className="profile-nav">
				{user ? (
					<>
						<div className="profile-left">
							<button onClick={handleLogout} className="btn btn-exit">
								<span>
									<FontAwesomeIcon icon={faArrowLeft} />
								</span>{' '}
								Вихід
							</button>
						</div>
						<div className="profile-center">
							<NavLink to="/photos">Усі фото</NavLink>
							<NavLink to="/wishlist">Збережені</NavLink>
						</div>
						<div className="profile-right">
							<NavLink to="/profile">
								<FontAwesomeIcon icon={faUser} /> Профіль
							</NavLink>
						</div>
					</>
				) : (
					<p>JetMonsters</p>
				)}
			</nav>
		</header>
	);
};

export default Header;
