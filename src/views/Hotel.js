import React, { Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const dataHotel = [
	{
		nama: 'Hotel Bulevar Tanjung Duren Jakarta',
		lokasi: 'Jakarta',
	},
	{
		nama: 'Novotel Semarang',
		lokasi: 'Semarang',
	},
	{
		nama: 'Ibis Balikpapan',
		lokasi: 'Balikpapan',
	},
	{
		nama: 'Legong Keraton Beach Hotel',
		lokasi: 'Bali',
	},
	{
		nama: 'Aston Sidoarjo City Hotel & Conference Center',
		lokasi: 'Sidoarjo',
	},
];

function Hotel() {
	const [hotel, setHotel] = React.useState(null);

	React.useEffect(() => {
		setHotel(dataHotel);
	}, []);

	if (!hotel) return null;

	const listHotel = hotel.map((data, id) => {
		return (
			<tr key={id}>
				<td>{id + 1}</td>
				<td>{data.nama}</td>
				<td>{data.lokasi}</td>
				<td>
					<Nav.Link as={Link} to={`/hotel/detail/${data.nama}`}>
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
					<h1>Hotel</h1>
				</div>

				<div className="row">
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>NO</th>
								<th>Nama Hotel</th>
								<th>Lokasi</th>
								<th>Detail</th>
							</tr>
						</thead>
						<tbody>{listHotel}</tbody>
					</Table>
				</div>
			</div>
			<hr />
			<Footer />
		</Fragment>
	);
}

export default Hotel;
