/**
 * The colored Navbar of the website in the PRIVATE
 */

import React, { Component, Fragment } from 'react';
import Logo from '../../resources/img/nucleus.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {logout} from '../../actions/auth'

const NavbarPrivate = ({ auth: { isAuthenticated, loading }, logout }) => {  
        return (
            <Fragment>
                <Navbar id="navbarBackgroundBlack" bg="light" expand="lg">
                        <Navbar.Brand>
                        <Link className="nounderline" to='/newversion/landing'>
                           
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
                                <Link className="nounderline mr-5 pr-5" to='/newversion/landing'>Home</Link>
                                <Link className="nounderline mr-5 pr-5" to='/newversion/list-projects'>Progetti</Link>
                                <Link className="nounderline mr-5 pr-5" to='/newversion/call/come-funziona-privata'>Come funziona</Link>
                                <button onClick={logout} type="button" className="btn border-white text-white">Log out</button>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Navbar>
            </Fragment>
        )

}

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, {logout})(NavbarPrivate)