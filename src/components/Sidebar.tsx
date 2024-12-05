import React from 'react';

interface SidebarProps {
	isOpen: boolean;
	toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
	return (
		<div
			className={`fixed top-0 right-0 w-[90%] h-full bg-gray-200 text-black p-6 transform transition-transform duration-300 ease-in-out rounded-tl-[15px] rounded-bl-[15px] ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<button
				onClick={toggleSidebar}
				className="absolute top-4 left-4 text-black text-2xl"
			>
				&times;
			</button>

			<div className="mt-4 max-h-full overflow-y-auto pt-10">
				<div className="flex flex-col gap-y-6 p-3">
					<div className="text-center flex flex-col gap-y-3">
						<h1 className="font-sharp-25 font-medium text-4xl">
							Choose your plan
						</h1>
						<h2 className="text-[22px]">You're just one step away</h2>
					</div>
					<div className="flex justify-center items-center flex-col my-6 gap-4">
						<div className="top-6 right-0 bg-orange-500 text-white rounded-md px-2 py-[3px] text-[14px] font-medium shadow-md">
							Save 8%
						</div>
						<div className="relative flex items-center gap-4">
							<div
								role="switch"
								aria-checked="true"
								className="flex bg-gray-200 rounded-full p-1 shadow-md"
							>
								<button
									className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out bg-white text-black"
									aria-label="Switch to Monthly Plan"
								>
									Monthly
								</button>
								<button
									className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out text-gray-600"
									aria-label="Switch to Yearly Plan"
								>
									Yearly
								</button>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						{/* Free Plan */}
						<div className="pricing-box pricing-plan border border-gray-300 shadow-lg rounded-lg overflow-hidden">
							<div className="pricing-plan-header bg-gray-100 p-6">
								<div className="text-center">
									<h2 className="text-2xl font-semibold text-gray-800">Free</h2>
									<p className="text-4xl font-bold text-orange-500 my-2">€0</p>
									<p className="text-sm text-gray-600">
										No credit card required
									</p>
								</div>
							</div>
							<div className="p-6 flex flex-col gap-6">
								<a
									className="bg-orange-500 text-white text-center rounded-md py-3 hover:bg-orange-600 transition"
									href="/auth/signup"
								>
									Create Free Account
								</a>
								<ul className="pricing-plan-features space-y-3 text-gray-700">
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										3 transcriptions per month
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Store 3 files per month
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Up to 30 minutes per file
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Some waiting time
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Audio playback
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Top-notch security: <br /> Fully GDPR compliant
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Bulk uploads
									</li>
								</ul>
							</div>
						</div>
						{/* Pro Plan */}
						<div className="pricing-box order-first lg:order-[unset] border border-gray-300 shadow-lg rounded-lg overflow-hidden">
							<div className="pricing-plan-header bg-purple-500 text-white p-6 relative">
								<div className="text-center">
									<h2 className="text-2xl font-semibold">Pro</h2>
									<p className="text-4xl font-bold my-2">€13.75</p>
									<p className="text-sm">Per month, billed annually</p>
								</div>
							</div>
							<div className="p-6 flex flex-col gap-6">
								<a
									className="bg-orange-500 text-white text-center rounded-md py-3 hover:bg-orange-600 transition"
									href="/auth/signup?redirect_uri=https%3A%2F%2Fgoodtape.io%2Fsettings%3Fon_auth%3Dcheckout%26billing_frequency%3Dyearly"
								>
									Get Started Now
								</a>
								<ul className="space-y-3 text-gray-700">
									<span className="block text-sm font-medium text-gray-800">
										Everything in free, plus:
									</span>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										20 hours of transcription
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Unlimited file lengths
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Unlimited storage
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Faster transcription
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Only EU-based subprocessors
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Detect 10+ speakers with labels
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										DPA available
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Resource library
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										100+ languages
									</li>
									<li className="flex items-center gap-2">
										<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
										Cancel anytime
									</li>
								</ul>
								<div className="px-4 py-3 bg-purple-50 rounded-md border border-purple-300">
									<span className="block text-sm font-medium text-gray-800">
										Plus these Pro benefits:
									</span>
									<ul className="space-y-2 text-gray-700 mt-2">
										<li className="flex items-center gap-2">
											<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
											Priority access to new features
										</li>
										<li className="flex items-center gap-2">
											<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
											Friendly human customer service
										</li>
										<li className="flex items-center gap-2">
											<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
											SSO <strong>(coming soon)</strong>
										</li>
										<li className="flex items-center gap-2">
											<span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
											Advanced AI <strong>(coming soon)</strong>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
