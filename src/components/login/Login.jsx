import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hook/useAuth';

import './login.scss';

const Login = () => {
	const [loginInput, setLoginInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');

	const navigate = useNavigate();
	const { signIn } = useAuth();

	const [userData, setUserData] = useState({
		email: 'JetMonsters@test.photos',
		pswd: 'VvjRdjEu@821',
	});

	const handleLogin = (e) => {
		e.preventDefault();

		const { email, pswd } = userData;
		if (loginInput !== email) {
			return alert('Невірний логін, спробуйте ще раз');
		} else if (passwordInput !== pswd) {
			return alert('Невірний пароль, спробуйте ще раз');
		} else {
			signIn(userData, () => navigate('/photos', { replace: true }));
			alert('Ви успішно авторизувались');
		}
	};

	useEffect(() => {
		const getUserSaveAuth = JSON.parse(localStorage.getItem('userSaveAuth'));
		console.log(getUserSaveAuth);
		if (getUserSaveAuth) setUserData(getUserSaveAuth);
	}, []);
	return (
		<>
			<form action="" onSubmit={handleLogin} className="form-auth">
				<div className="form-group">
					<label>Введіть свій логін</label>
					<input
						type="text"
						placeholder="Тест: JetMonsters@test.photos"
						value={loginInput}
						onChange={(e) => setLoginInput(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Введіть свій пароль</label>
					<input
						type="password"
						placeholder="Тест: VvjRdjEu@821"
						value={passwordInput}
						onChange={(e) => setPasswordInput(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<button className="btn btn-login">Авторизуватись</button>
				</div>
			</form>
		</>
	);
};

export default Login;
