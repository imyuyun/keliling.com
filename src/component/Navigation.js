import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from './../components/HomePage';
import Destination from './../components/MainConten';
import Flight from './Flight';
import Hotel from './Hotel';

const Navigation = () => {
  return (
    <BrowserRouter>
    <div className="Navigation">
      <>
      <Navbar bg="danger" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">Keliling.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/destinasi">Destination</Nav.Link>
              <Nav.Link as={Link} to="/flight">Flight</Nav.Link>
              <Nav.Link as={Link} to="/hotel">Hotel</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>

      <div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/destinasi" element={<Destination/>}/>
          <Route path="/flight" element={<Flight/>}/>
          <Route path="/hotel" element={<Hotel/>}/>

        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};
export default Navigation;
