import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand>Broker App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink to="/" className="nav-link" exact={true} activeClassName="active">Home</NavLink>
                        <NavLink to="/policy" className="nav-link" activeClassName="active">Policies</NavLink>
                        <NavLink to="/insurer" className="nav-link" activeClassName="active">Insurers</NavLink>
                        <NavLink to="/policy-type" className="nav-link" activeClassName="active">Policy Types</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;
