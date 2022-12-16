import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardDestination = (props) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={props.image} style={{ width: '100%', height: '10rem' }} />
			<Card.Body className="row justify-content-center">
				<Card.Title>{props.wisata}</Card.Title>
				<Button variant="primary">
					<Nav.Link as={Link} to={`/destinasi/detail/${props.wisata}`}>
						{props.button}
					</Nav.Link>
				</Button>
			</Card.Body>
		</Card>
	);
};

export default CardDestination;
