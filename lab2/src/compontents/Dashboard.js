import React from "react";
import '../assets/css/dashboard.css';
import NavigationDrawer from "./NavigationDrawer.js";
import SearchToolbar from "./SerachToolbar.js";
import DashboardContent from "./DashboardContent.js";

function Dashboard(props) {
	return <div className='container'>
		<NavigationDrawer/>
		<SearchToolbar/>
		<DashboardContent/>
	</div>;
}

export default Dashboard;