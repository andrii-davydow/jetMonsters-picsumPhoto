import { Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Photo from '../photos/photoDetail/photo';
import Photos from '../photos/Photos';

import Wishlist from '../wishlist/Wishlist';
import Header from '../header/header';
import NotFound from '../notFoud/notFound';
import Footer from '../footer/footer';

import './app.scss';
import RequireAuth from '../../hoc/RequireAuth';
import Profile from '../profile/Profile';
import { AuthProvider } from '../../hoc/AuthProvider';
const App = () => {
	return (
		<AuthProvider>
			<Header />
			<main className="app-content">
				<Routes>
					<Route path="/" element={<Login />} />

					<Route path="/photos">
						<Route
							index
							element={
								<RequireAuth>
									<Photos />
								</RequireAuth>
							}
						/>
						<Route
							path=":id"
							element={
								<RequireAuth>
									<Photo />
								</RequireAuth>
							}
						/>
					</Route>
					<Route
						path="/wishlist"
						element={
							<RequireAuth>
								<Wishlist />
							</RequireAuth>
						}
					/>

					<Route
						path="/profile"
						element={
							<RequireAuth>
								<Profile />
							</RequireAuth>
						}
					/>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</AuthProvider>
	);
};

export default App;
