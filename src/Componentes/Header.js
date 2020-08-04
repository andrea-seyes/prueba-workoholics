import React from 'react';
import Logotipo from '../Logotipo.svg';
import { Row, Col } from 'react-bootstrap';

import "../index.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavLink } from 'react-bootstrap';

function Header() {


    return (
        <>

            <header class="container-fluid">
                <div class="row bg-dark justify-content-center align-items-center">
                    <div class="col-12 col-lg-10 pt-2 pb-2 pt-lg-4 pb-lg-4 pr-0 pl-0">
                        <div class="row justify-content-between align-items-start m-0">

                            <NavLink to="/" href="/" className="p-lg-0">
                                <img src={Logotipo} alt="logotipo" />
                            </NavLink>

                            <div class="d-none d-lg-block justify-content-end">
                                <NavLink className="nav-item nav-link active p-0" to="/login" href="/login">
                                    <h5 class="login">Sign in</h5>
                                </NavLink>
                            </div>

                            <div class="d-lg-none">

                                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" class="p-0">
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" class="navbar-toggler-icon3" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav >

                                            <Row class="d-lg-none bg-dark justify-content-center" id="menu">
                                                <Col>
                                                    <NavLink className="p-4 text-white">Products</NavLink>
                                                    <NavLink className="p-4 text-white">About us</NavLink>
                                                    <NavLink className="p-4 text-white">Contact</NavLink>
                                                </Col>
                                            </Row>

                                            <NavLink href="/login" className="nav-link bg-white pb-0">
                                                <div class="row justify-content-between align-items-baseline text-primary m-0 pl-3 pr-3 d-lg-none">
                                                    <h5>Sign in</h5>
                                                    <svg width="1.2rem" height="1.2rem" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                                    </svg>
                                                </div>
                                            </NavLink>

                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>

                            </div>

                        </div>
                    </div>
                </div>

            </header>

        </>
    )
}

export default Header;