import React, { Fragment, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProjectsShowcase } from '../../../actions/project';
import Logo from '../../../resources/img/nucleus.png';
import Spinner from '../../../resources/differentResources/Spinner';
import Footer from '../../components/FooterPublic';
import Head from '../../components/Head';
import Menu from '../../components/Menu';
import PrivateNavbar from '../../components/Navbar';
import Navbar from '../../components/NavbarPublic';
import CardProject from './components/CardProject';


export const Landing = ({getProjectsShowcase, project:{projects, loadingShowcase}, auth: {isAuthenticated}}) => {

    useEffect(() => {
        getProjectsShowcase()
    }, [getProjectsShowcase])

    return (
        <Fragment>
            {/** START - Definition of the upper part of the page */}
            <Head />
            
            {isAuthenticated ? (
                <Fragment>
                        <PrivateNavbar />
                        <Menu />
                </Fragment>
            ):(<Navbar />)}
            {/** END */}

        <Container fluid id="containerFirstLandingOne" className="paddingTopSectionLanding">
                <Row className="landingPadingTop">
                    <div className="col-12 text-center 	d-none d-md-block">
                        <img src={Logo} width="53%" height='auto' alt='Loading...' />
                    </div>
                </Row>
                <Row className="pt-5">

                    <div className="col-10 offset-1 col-md-4 offset-md-2 pr-4 text-center">
                        <h1 id="landing-text-first" className="text-white">Il <b id="bold-text">team </b>ideale per la tua <b id="bold-text">idea</b></h1>
                    </div>
                    <div className="col-10 col-sm-10 offset-1 col-md-3 my-auto pl-4 pt-3 pt-md-0">
                        <Link to={`/newversion/dashboard`}><button type="button" className="btn border-white text-white my-auto landingButton rounded-pill"  >
                            {/* <span id="text-in-buttom">Trova il tuo team</span> */}
                            Trova il tuo team
                        </button></Link>
                    </div>

                </Row>
                <Row className="pt-5 pb-5">
                    <div className="col-10 offset-1 text-center text-white">
                        <h3 id="landing-text-second" className="landingText">Nucleus connette chi ha un'idea imprenditoriale <br/>con chi ha le giuste competenze per realizzarla (e viceversa)</h3>
                    </div>
                </Row>
                
        </Container>
        <Container fluid >
          <Row className="p-0 m-0">
            <div className="col-12 p-0 m-0">
                <hr className='dashed-line p-0 m-0' />
            </div>                    
          </Row>
        </Container>
        
        <Container fluid>
                <Row className="pt-5">
                    <Col className="text-center text-black">
                        <p id="landing-text-fourth" className="landingText">Hai un’idea imprenditoriale, ma non un team con cui realizzarla?</p>
                        <p id="landing-text-fifth" className="landingText">Proponi il tuo progetto, <br/>noi testiamo competenze e motivazione per evitarti perdite di tempo</p>
                    </Col>
                </Row>
        </Container>
        <Container id="rectangle-landing" fluid>
                <Row>
                    <div className="col-12 mr-auto text-md-right text-center mb-5 mb" id="buttonLandingMargin">
                         <Link  type="button" className="btn btn-primary btn-lg" id='buttonLanding' to={`/newversion/create-project`} >Inserisci il tuo progetto</Link>
                    </div>
                </Row>
               
        </Container>
        <Container fluid>
           <Row>
                    <div className="col-12">
                        <hr id='dashLine' className='dashed-line mt-md-5' style={{marginTop: 0}} />
                    </div>                    
                </Row>
        </Container>
        <Container fluid>
                <Row className="pt-5">
                    <Col className="text-center text-black">
                        <p id="landing-text-fourth" className="landingText">Non hai un'idea, ma vorresti fare impresa?</p>
                        <p id="landing-text-fifth" className="landingText">Scopri il progetto che più ti appassiona, unisciti e contribuisci al suo sviluppo!</p>
                    </Col>
                </Row>
                
                <Row className="mt-5">
                    <div className="col-12 col-md-6 offset-md-3 text-black pl-0 pt-0">

                    {loadingShowcase ? <Spinner /> :
                        (
                            <Carousel id='myCarousel' touch>
                                {
                                    projects.map((project, index) => <Carousel.Item key={index}><CardProject call= {project} /></Carousel.Item> )
                                }
                                
                            </Carousel>
                        )
                    }
                        

                    </div>
                </Row>
                <Row className="mt-1 mt-md-5" >
                    <Col className="text-center text-gray">
                        {isAuthenticated ? (
                            <p id="landing-text-fifth" className="landingText"><u><Link to="/newversion/list-projects" style={{color:'grey'}}>Vedi tutti i progetti</Link></u></p>
                        ):(<p id="landing-text-fifth" className="landingText"><u><Link to="/newversion/list-calls" style={{color:'grey'}}>Vedi tutti i progetti</Link></u></p>)}
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <div className="col-12">
                        <hr className='dashed-line' />
                    </div>                    
                </Row>
        </Container>  
        <Container fluid className="mb-5">
                <Row className="pbt-5 mb-5" id='diconoDiNoi'>
                    <Col className="text-center text-black">
                        <p id="landing-text-DiconoDiNoi" className="landingText">Dicono di noi</p>
                    </Col>
                </Row>
                {/* <Row className='d-md-none'>
                    <Col  className='text-center text-black mt-3 mb-3'><p id="landing-text-fourth"><b>Recensioni</b></p></Col>
                </Row> */}
                <Row>
                    <div className="col-md-4 offset-md-2">                            
                        <div id="dimensionCardLanding" >
                            <div id="cardProjectOutside" className="card mb-3 shadow p-3 bg-white">
                                <div id="cardProjectInside" className="row no-gutters text-white mb-3 my-auto">
                                    <div className="col-12 my-auto">
                                        <p id="landing-text-review">“Grazie a Nucleus sono riuscito a trovare il developer che stavo cercando per partire con la mia idea imprenditoriale.” </p>
                                        <h3  id="landing-text-review" className='text-right'>Giuseppe </h3>
                                    </div>                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1 mt-4 mt-md-0">
                            <div id="review-landing-position">
                                <div id="dimensionCardLanding" >
                                    <div id="cardProjectOutside" className="card mb-3 shadow p-3 bg-white">
                                        <div id="cardProjectInside" className="row no-gutters text-white mb-3 my-auto">
                                            <div className="col-12 my-auto">
                                                <p id="landing-text-review">“Dopo la mia laurea in marketing, stavo cercando una startup in cui poter mettere in pratica le mie competenze e su Nucleus ho trovato un progetto stimolante di cui ho deciso di diventare co-founder. Ora sto portando avanti il progetto con il mio nuovo team!”</p>
                                                <h3 id="landing-text-review" className='text-right'>Martina</h3>
                                            </div>                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Row>
        </Container>  
        <Footer />     
    </Fragment>
    )
}

const mapStateToProps = state => ({
    project: state.project,
    auth: state.auth
})

export default connect(mapStateToProps, {getProjectsShowcase})(Landing)
