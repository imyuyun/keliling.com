import React, { Fragment } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navigation = () => {
	return (
		<Fragment>
			<div className="Navigation">
				<Navbar bg="danger" variant="dark" expand="lg" fixed="top">
					<Container>
						<Navbar.Brand href="#">Keliling.com</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav
								className="ms-auto my-2 my-lg-0"
								style={{ maxHeight: '100px' }}
								navbarScroll
							>
								<Nav.Link as={Link} to="/">
									Home
								</Nav.Link>
								<Nav.Link as={Link} to="/destinasi">
									Destination
								</Nav.Link>
								<Nav.Link as={Link} to="/flight">
									Flight
								</Nav.Link>
								<Nav.Link as={Link} to="/hotel">
									Hotel
								</Nav.Link>
							</Nav>
							<Search />
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</Fragment>
	);
};
export default Navigation;
