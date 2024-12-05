import React from 'react';

const Signup: React.FC = () => {
	return (
		<div className="p-8 flex flex-col items-center">
			<h1 className="text-3xl font-bold mb-4">Sign Up</h1>
			<form className="flex flex-col gap-4 w-96">
				<input
					type="text"
					placeholder="Full Name"
					className="p-3 border rounded-lg"
				/>
				<input
					type="email"
					placeholder="Email"
					className="p-3 border rounded-lg"
				/>
				<input
					type="password"
					placeholder="Password"
					className="p-3 border rounded-lg"
				/>
				<button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Signup;
