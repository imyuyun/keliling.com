import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Hotel from './views/Hotel';
import DetailHotel from './views/DetailHotel';
import Destination from './views/Destination';
import DetailDestination from './views/DetailDestination';
import Flight from './views/Flight';
import DetailFlight from './views/DetailFlight';

function App() {
	return (
		// jika memiliki lebih dari 1 komponen maka di bungkus dengan div
		<Router>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/hotel" element={<Hotel />} />
				<Route path="/hotel/detail/:id" element={<DetailHotel />} />
				<Route path="/destinasi" element={<Destination />} />
				<Route path="/destinasi/detail/:id" element={<DetailDestination />} />
				<Route path="/flight" element={<Flight />} />
				<Route path="/flight/detail/:id" element={<DetailFlight />} />
			</Routes>
		</Router>
	);
}

export default App;
