import React from 'react'
import {
    BrowserRouter as Router
  } from 'react-router-dom';
  import { Navbar, Nav } from 'react-bootstrap'

class BootstrapNavbar extends React.Component{
    render(){
        return(
            <div>
                <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">QTemu</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="#create">Create Meetup</Nav.Link>
                                    <Nav.Link href="#explore">Explore</Nav.Link>
                                    </Nav> 
                                    <Nav>
                                    <Nav.Link href="#login">Login</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Router>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;