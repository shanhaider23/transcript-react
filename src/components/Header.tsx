import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/logo.png';

interface HeaderProps {
	toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
	return (
		<header className="bg-gradient-to-b from-gray-400 to-transparent text-white p-4">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo Section */}
				<div className="flex items-center space-x-2">
					<Link to="/" className="flex items-center space-x-2">
						<img
							src={Image}
							alt="Company Logo"
							className="h-10 w-10 sm:h-12 sm:w-12"
						/>
						<span className="text-xl sm:text-3xl font-bold">Good Tape</span>
					</Link>
				</div>

				{/* Navigation Section */}
				<nav className="hidden sm:flex bg-black bg-opacity-10 p-2 rounded-full pl-4 pr-4">
					<ul className="flex space-x-4 sm:space-x-6">
						<li>
							<button onClick={toggleSidebar} className="hover:text-gray-800">
								Pricing
							</button>
						</li>
						<li>
							<Link to="/articles" className="hover:text-gray-800">
								Articles
							</Link>
						</li>
						<li>
							<Link to="/about" className="hover:text-gray-800">
								About
							</Link>
						</li>
						<li>
							<Link to="/login" className="hover:text-gray-800">
								Login
							</Link>
						</li>
						<li>
							<Link to="/signup" className="hover:text-gray-800">
								Signup
							</Link>
						</li>
					</ul>
				</nav>

				{/* Hamburger Menu for Small Screens */}
				<button
					onClick={toggleSidebar}
					className="sm:hidden bg-black bg-opacity-10 p-2 rounded-full hover:text-gray-800"
				>
					☰
				</button>
			</div>
		</header>
	);
};

export default Header;
