import React, {useEffect, useState} from "react";
import '../assets/css/layouts.css';

function Layouts(props) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`, {
			method: "GET"
		})
			.then((response) => {
				return response.json();
			})
			.then((actualData) => {
				if (actualData.error) {
					throw new Error(actualData.error.message);
				}
				console.log(actualData.error.message);
				setData(actualData);
				setError(null);
			})
			.catch((err) => {
				console.log(err);
				setError(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const loadingView = <h1>Loading...</h1>;

	return <div className='layout-container'>
		{loading ? loadingView : (error || !data.hdurl ? <p class='error'><h2> Wystąpił błąd:</h2> <strong>{error}</strong></p> :
			<img className='image' src={data.hdurl} alt="foto"/>)}
	</div>;
}

export default Layouts;