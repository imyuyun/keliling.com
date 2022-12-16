import React, { Fragment } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const baseURL = 'https://travel-advisor.p.rapidapi.com/airports/search';

const headers = {
	'X-RapidAPI-Key': '8363206448msha1b8585976a2b2bp1d3bdbjsn068fdee839cf',
	'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
};

function Flight() {
	const [bandara, setBandara] = React.useState(null);

	React.useEffect(() => {
		axios({
			url: baseURL,
			method: 'get',
			params: { query: 'Indonesia', locale: 'ID' },
			headers: headers,
		}).then((response) => {
			setBandara(response.data);
		});
	}, []);

	if (!bandara) return null;

	const listBandara = bandara.map((data, id) => {
		return (
			<tr key={id}>
				<td>{id + 1}</td>
				<td>{data.name}</td>
				<td>{data.city_name}</td>
				<td>
					<Nav.Link as={Link} to={`/flight/detail/${data.name}`}>
						Detail
					</Nav.Link>
				</td>
			</tr>
		);
	});

	return (
		<Fragment>
			<Navigation />
			<div className="container" style={{ height: '100vh' }}>
				<div className="row text-center p-4 my-5">
					<h1>FLIGHT</h1>
				</div>

				<div className="row">
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>NO</th>
								<th>Nama Bandara</th>
								<th>Lokasi</th>
								<th>Detail</th>
							</tr>
						</thead>
						<tbody>{listBandara}</tbody>
					</Table>
				</div>
			</div>
			<hr />
			<Footer />
		</Fragment>
	);
}

export default Flight;
