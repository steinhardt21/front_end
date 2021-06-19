import React, { useState, Fragment } from 'react'
import { Button, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { connect } from 'react-redux'
import { resetPassword } from '../../../actions/auth';
import Footer from '../../components/FooterPublic';
import Head from '../../components/Head';
import Navbar from '../../components/NavbarPublic';
import {Link} from 'react-router-dom'

export const ResetPasswordConferma = () => {
  return (
    <Fragment>
             {/**Definition of the upper part of the page */}
            <Head />
            <Navbar />
            {/** END */}

            <Container fluid id="notFoundBackground" className='my-auto'>
                <Row className="pt-5">
                    <div className="pt-5 col-10 offset-1 col-md-8 offset-md-2 text-center text-white">
                        <h1>Password aggiornata!</h1>
                        {/* <h3>Se la mail inserità è corretta allora la</h3> */}
                    </div>
                </Row>
                <Row>
                    <div className="col-12  text-center mt-5">
                         <Link style={{width:'340px'}} type="button" className="btn btn-primary btn-lg" id='buttonLanding' to={`/`} >Ritorna alla homepage</Link>
                    </div>
                </Row>
            </Container>
            <Footer />
        </Fragment>
  )
}

export default ResetPasswordConferma
