import React, { Fragment } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';

const DetailDestination = () => {
	const [destinasi, setDestinasi] = React.useState(null);
	const location = useLocation();
	const pathname = location.pathname;
	const namaKota = pathname.substring(pathname.lastIndexOf('/') + 1);
	const baseURL = `https://id.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${namaKota}`;

	React.useEffect(() => {
		axios({
			url: baseURL,
			method: 'get',
		}).then((response) => {
			setDestinasi(
				response.data.query.search[0].snippet
					.replace(/(<([^>]+)>)/gi, '')
					.replace(/&quot;/g, ' ')
			);
		});
	}, []);

	return (
		<Fragment>
			<Navigation />
			<div className="container" style={{ marginTop: '5rem' }}>
				<h1 className="mt-5">Destinasi {decodeURI(namaKota)}</h1>
				<div style={{ fontSize: '1.2rem' }}>{destinasi}...</div>
			</div>
		</Fragment>
	);
};

export default DetailDestination;
