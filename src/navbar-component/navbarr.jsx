import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './navbarr.css'
export class Navbarr extends Component {
    render() {
        const style = {
            fontSize: 30,
        }

        return (
            <Navbar
                collapseOnSelect
                className="navbarr"
                fixed="top"
                bg="transparent"
                expand="lg"
            >
                <Container>
                    <Navbar.Brand href="#home" style={style}>
                        GoFundEarth
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="justify-content-end"
                            style={{ width: '100%' }}
                        >
                            <Nav.Link
                                smooth={true}
                                eventKey="1"
                                className="active"
                                as={Link}
                                to={'/'}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                smooth={true}
                                eventKey="2"
                                className="active"
                                as={Link}
                                to={'/contribute'}
                            >
                                Contribute
                            </Nav.Link>
                            <Nav.Link
                                smooth={true}
                                eventKey="3"
                                className="active"
                                as={Link}
                                to={'/goal'}
                            >
                                Goal
                            </Nav.Link>
                            <Nav.Link
                                smooth={true}
                                eventKey="4"
                                className="active"
                                as={Link}
                                to={'/about'}
                            >
                                About
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
