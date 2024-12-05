import React from 'react';

const Upload: React.FC = () => {
	return (
		<div className="w-[40%] h-[300px] bg-white opacity-90 rounded-[15px] shadow-md flex flex-col justify-center items-center mx-auto mt-12">
			{/* Button with plus sign */}
			<button className="w-20 h-20 rounded-full bg-blue-500 text-white flex justify-center items-center text-4xl mb-4">
				+
			</button>
			<p className="text-gray-700 text-lg mb-2">Upload Here</p>
			<button className="px-6 py-3 text-gray-700 font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
				Transcribe Now
			</button>
		</div>
	);
};

export default Upload;
