/**
 * The colored Navbar of the website in the PUBLIC 
 */

import React, { Component, Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../resources/img/nucleus.png';

export default class NavbarPublic extends Component {
    render() {
        return (
            <Fragment>
                    <Navbar id="navbarBackgroundBlack" bg="light" expand="lg">
                        <Navbar.Brand>
                        <Link className="nounderline" to='/'>
                             {/* <div id="logo-nucleus"></div> */}
                              <img
                                src={Logo}
                                width="180"
                                height="auto"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                               /> <span style={{fontSize:"13px"}}>Beta</span>
                               </Link>         
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="ml-auto" style={{fontSize:'20px'}}>
                                <Link className="nounderline mr-md-5 text-center pb-3" to='/'>Home</Link>
                                <Link className="nounderline mr-md-5 text-center pb-3" to='/list-calls'>Progetti</Link>
                                <Link className="nounderline mr-md-5 text-center pb-3" to='/come-funziona'>Come funziona</Link>
                                <Link to="/sign" type="button" className="btn border-white text-white mr-md-5">Accedi o registrati</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </Fragment>
        )
    }
}
