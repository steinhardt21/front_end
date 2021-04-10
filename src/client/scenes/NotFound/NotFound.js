import React, { Fragment } from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Head from '../../components/Head'
import Navbar from '../../components/NavbarPublic'
import {Link, Redirect, withRouter} from 'react-router-dom' 
import { connect } from 'react-redux'

const NotFound = () => {
    return (
        <Fragment>
             {/**Definition of the upper part of the page */}
            <Head />
            <Navbar />
            {/** END */}

            <Container fluid id="notFoundBackground" className='my-auto'>
                <Row className="pt-5">
                    <div className="pt-5 col-10 offset-1 col-md-8 offset-md-2 text-center text-white">
                        <h1>La pagina ricercata non è stata trovata!</h1>
                        <h3>Ci dispiace, ma la pagina ricercata non è disponibile.</h3>
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

export default NotFound
