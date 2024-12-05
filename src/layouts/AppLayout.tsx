import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useState } from 'react';

const AppLayout: React.FC = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};
	return (
		<div className="relative flex flex-col h-screen">
			<Header toggleSidebar={toggleSidebar} />
			<div className="flex flex-1">
				<Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
				<main className="flex-1 ">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AppLayout;
