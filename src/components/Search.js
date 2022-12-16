import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Search = () => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<Fragment>
			<Form className={pathname === '/' ? 'd-none' : 'd-flex'}>
				<Form.Control
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
				/>
				<Button type="submit" variant="primary">
					Search
				</Button>
			</Form>
		</Fragment>
	);
};

export default Search;
