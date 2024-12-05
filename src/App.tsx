import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AppLayout />}>
					<Route index element={<Navigate replace to="home" />} />
					{<Route path="home" element={<Home />} />}
					<Route path="/articles" element={<Articles />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
