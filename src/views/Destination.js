import React, { Fragment } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import CardDestination from '../components/CardDestination';
import Footer from '../components/Footer';

const baseURL =
	'https://referential.p.rapidapi.com/v1/state?fields=iso_a2&iso_a2=id&limit=9&lang=ID';

const Destination = () => {
	const [destinasi, setDestinasi] = React.useState(null);

	React.useEffect(() => {
		axios({
			url: baseURL,
			method: 'get',
			headers: {
				'X-RapidAPI-Key': '8363206448msha1b8585976a2b2bp1d3bdbjsn068fdee839cf',
				'X-RapidAPI-Host': 'referential.p.rapidapi.com',
			},
		}).then((response) => {
			setDestinasi(response.data);
		});
	}, []);

	if (!destinasi) return null;

	const listDestinasi = destinasi.map((data) => {
		return (
			<div className="col-lg-4 mb-5 d-flex justify-content-center" key={data.key}>
				<CardDestination
					image={require(`../assets/${data.value}.jpg`)}
					wisata={data.value}
					button={`Visit ${data.value}`}
				/>
			</div>
		);
	});

	return (
		<Fragment>
			<Navigation />
			<div className="container">
				<div className="col-12 text-center" style={{ marginTop: '5rem' }}>
					<h1> DESTINATION</h1>
				</div>
				<div className="row justify-content-center my-5">{listDestinasi}</div>
			</div>
			<hr />
			<Footer />
		</Fragment>
	);
};

export default Destination;
