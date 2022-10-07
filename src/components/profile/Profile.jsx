import { useEffect, useState } from 'react';
import { useAuth } from '../../hook/useAuth';

import './profile.scss';
const Profile = () => {
	const { user } = useAuth();
	const [emailProfile, setEmailProfile] = useState('');
	const [passwordProfile, setPasswordProfile] = useState('');

	useEffect(() => {
		const { email, pswd } = user;
		setEmailProfile(email);
		setPasswordProfile(pswd);
	}, []);

	const handleSaveUserAuth = (e) => {
		e.preventDefault();
		const { email, pswd } = user;
		const newAuth = {
			email: emailProfile,
			pswd: passwordProfile,
		};
		if (emailProfile == email && passwordProfile == pswd) {
			return alert(
				'Ви намагаєтесь зберегти старі дані для входу. Будь ласка змініть їх'
			);
		} else {
			localStorage.setItem('userSaveAuth', JSON.stringify(newAuth));
			alert(
				'Дані для входу було успішно змінено. Ви можете розлогінитись та увійти з новими данними'
			);
		}
	};

	return (
		<div className="profile-detail">
			<h2>Ваші поточні дані для входу</h2>
			<p>Для їх зміни, уведіть нові значення та натисніть кнопку зберегти</p>
			<form onSubmit={handleSaveUserAuth}>
				<input
					type="text"
					value={emailProfile}
					onChange={(e) => setEmailProfile(e.target.value)}
				/>
				<input
					type="text"
					value={passwordProfile}
					onChange={(e) => setPasswordProfile(e.target.value)}
				/>
				<button className="btn btn-save">Зберегти</button>
			</form>
		</div>
	);
};

export default Profile;
