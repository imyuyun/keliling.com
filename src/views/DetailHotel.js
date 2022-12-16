import React, { Fragment } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';

const DetailHotel = () => {
	const [hotel, setHotel] = React.useState(null);
	const location = useLocation();
	const pathname = location.pathname;
	const namaHotel = pathname.substring(pathname.lastIndexOf('/') + 1);
	const baseURL = `https://id.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${namaHotel}`;

	React.useEffect(() => {
		axios({
			url: baseURL,
			method: 'get',
		}).then((response) => {
			console.log(response);
			if (response.data.query.search == 0) {
				return setHotel('');
			} else {
				return setHotel(
					response.data.query.search[0].snippet
						.replace(/(<([^>]+)>)/gi, '')
						.replace(/&quot;/g, ' ')
						.replace(/&amp;/g, ' ')
				);
			}
		});
	}, []);

	return (
		<Fragment>
			<Navigation />
			<div className="container" style={{ marginTop: '5rem' }}>
				<h1 className="mt-5">{decodeURI(namaHotel)}</h1>
				<div style={{ fontSize: '1.2rem' }}>{hotel}...</div>
			</div>
		</Fragment>
	);
};

export default DetailHotel;
