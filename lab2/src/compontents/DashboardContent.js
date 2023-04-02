import React from "react";
import './../assets/css/dashboard-content.css';
import { Outlet } from "react-router-dom";

function DashboardContent(props) {
	return <main className="content-container">
		<Outlet />
	</main>;
}

export default DashboardContent;