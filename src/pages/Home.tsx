import React from 'react';
import Upload from '../components/Upload';

const Home: React.FC = () => {
	const backgroundImages = [
		'url("https://images.pexels.com/photos/29273395/pexels-photo-29273395/free-photo-of-rainy-window-view-in-belfast.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
		'url("https://images.pexels.com/photos/28343763/pexels-photo-28343763/free-photo-of-black-and-white-photograph-of-a-beach-with-rocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
		'url("https://images.pexels.com/photos/11708257/pexels-photo-11708257.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
		'url("https://images.pexels.com/photos/20267145/pexels-photo-20267145/free-photo-of-display-of-red-fireworks-and-smoke-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
	];

	const randomBackgroundImage =
		backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

	return (
		<div
			className="absolute top-0 left-0 w-full h-screen bg-cover bg-center -z-10 flex justify-center items-center"
			style={{ backgroundImage: randomBackgroundImage }}
		>
			<div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full max-w-4xl">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 mt-8 pt-8 text-white drop-shadow-lg">
					Fast, secure and accurate transcription for all your audio and video
				</h1>
				<button className="bg-black bg-opacity-10 p-2 rounded-full pl-4 pr-4 hover:text-gray-800">
					Sign Up
				</button>
				<Upload />
			</div>
		</div>
	);
};

export default Home;
