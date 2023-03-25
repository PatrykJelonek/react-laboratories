import React from "react";
import '../assets/css/helloworld.css';

function HelloWorld(props) {
	const styles = {
		color: 'blue',
	};

	return <h1><span style={styles}>Hello</span> <span className='color'>{props.name}</span></h1>;
}

export default HelloWorld;