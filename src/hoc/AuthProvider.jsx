import { createContext, useState } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

	const signIn = (newUser, cb) => {
		setUser(newUser);
		localStorage.setItem('user', JSON.stringify(newUser));
		cb();
	};

	const logOut = (cb) => {
		setUser(null);
		localStorage.removeItem('user');
		cb();
	};

	const value = { user, signIn, logOut };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
