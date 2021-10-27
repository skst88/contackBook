import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const Navbar1 = () => {
    return (
        <div>
            <Navbar bg="secondary" variant="dark">
                <img style={{ width: '50px' }} src="https://cdn0.iconfinder.com/data/icons/human-resources-14/100/1-01-512.png" alt="" />
                <Navbar.Brand href="#home">Contact Book</Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
            </Navbar>
        </div>
    );
};

export default Navbar1;