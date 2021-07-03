import React from 'react'

// Bootstrap imports
import { Navbar, Nav } from 'react-bootstrap'

// Router imports
import { BrowserRouter as Router, Link } from 'react-router-dom'

const CustomNavbar = () => {
    const onClick = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand name="home">Toggleable-Text</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link name="Home" onClick={onClick}>
                            <Link to="/">Home</Link>
                        </Nav.Link> */}
                        <Nav.Link name="Docs" onClick={onClick}>
                            <Link to="/docs">Docs</Link>
                        </Nav.Link>
                        <Nav.Link name="Demo" onClick={onClick}>
                            <Link to="/demo">Demo</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar
