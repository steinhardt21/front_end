/**
 * Page private that explains the project
 */

import React, { Fragment } from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Image_1 from '../../../resources/img/about_us_image_1.jpg'
import Image_2 from '../../../resources/img/about_us_image_2.jpg'
import {Link, Redirect, withRouter} from 'react-router-dom' 
import { connect } from 'react-redux'
import Navbar from '../../components/Navbar'
import Head from '../../components/Head'
import Menu from '../../components/Menu'

const AboutUsPrivate = () => {
    return (
        <Fragment>

            {/**Definition of the upper part of the page */}
                <Head />
                <Navbar />
                <Menu />
            {/** END */}

            <Container fluid id="background-about-us-svg">
                <Row className="pt-5">
                    <div className="col-md-8 offset-md-2 col-12 text-center ">
                        <p id="about-text-first" className="text-black bold-text-class">Connettiamo chi ha un’idea imprenditoriale con chi ha<br/> giuste competenze e motivazione per realizzarla</p>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-3 offset-md-2 col-10 offset-1 shadow" id='containerFormCreateProject'>
                        <Row>
                            <div className="col-10 offset-1 col-md-12 offset-md-0 p-0"> <Image src={Image_1} width="100%" height='290px' style={{ borderRadius: '10%' }} /></div>
                        </Row>
                        <Row className="pt-5">
                            <div className="col-12 text-center text-white p-0"><p id="about-text-card-first" >Founder o aspiranti tali che cercano co-founder o team member</p></div>
                        </Row>
                        <Row>
                            <div className="col-12 text-white p-0">
                                <ol>
                                    <p id="about-text-card-second"><li className="mt-3">Carica il tuo progetto e indica la figura che cerchi</li></p>
                                    <p id="about-text-card-second"><li className="mt-3">Ricevi candidature di potenziali team member</li></p>
                                    <p id="about-text-card-second"><li className="mt-3">Seleziona i profili in linea con quanto richiesto dal processo</li></p>
                                    <p id="about-text-card-second"><li className="mt-3">Incontra il potenziale team member</li></p> 
                                </ol>
                            </div>
                        </Row>
                    </div>
                    <div className="col-md-3 offset-md-2 col-10 offset-1 shadow" id='containerFormCreateProject'>
                        <Row>
                            <div className="col-10 offset-1 col-md-12 offset-md-0 p-0"> <Image src={Image_2} width="100%" height='290px' style={{ borderRadius: '10%' }} /></div>
                        </Row>
                        <Row className="pt-5">
                            <div className="col-12 text-center text-white p-0"><p id="about-text-card-first">Professionisti che vogliono contribuire alla nascita di una startup</p></div>
                        </Row>
                        <Row>
                            <div className="col-12 text-white p-0">
                                <ol>
                                    <p id="about-text-card-second"><li className="mt-3">Scegli i progetti che più ti interessano</li></p>
                                    <p id="about-text-card-second"><li className="mt-3">Invia la tua candidatura per conoscere il founder</li></p>
                                    <p id="about-text-card-second"><li className="mt-3">Scopri se il tuo profilo è in linea con quanto richiesto dal progetto</li></p>
                                    <p id="about-text-card-second"><li className="mt-3">Incontra l'aspirante founder</li></p> 
                                </ol>
                            </div>
                        </Row>
                    </div>
                </Row>
                <Row className="mt-4 mt-md-0">
                    <div className="col-12 text-center my-auto">                          
                         <Link type="button"  className="btn btn-primary btn-lg" id='buttonLanding' to={`/create-project`} >Inizia ora</Link>
                    </div>
                </Row>
                <Row className="mt-5 mb-5">
                    <div className="col-12">
                        <hr className='dashed-line' />
                    </div>                    
                </Row>
            </Container>
            <Container fluid id='background-about-us-svg_2'>
                <Row>
                    <div className="col-md-6 offset-md-3 col-10 offset-1">

                        <div id="cardProjectOutside" className="card  shadow-lg p-3 mb-5 bg-white ">
                            <div id="cardProjectInside" className="row no-gutters text-white mb-3 shadow">
                                <div className="col-md-12">
                                {/* <img src="image.jpg" className="card-img" alt="..." /> */}
                                    <p id="about-text-card-third" className="p-3 text-center">Testiamo gli elementi chiave <br /> per costruire un team di successo</p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-12 p-0 text-black">
                                    <Row>
                                        <div className="col-10 offset-1 col-md-2 offset-1 text-center my-auto">
                                            <h2 style={{fontSize:'70px'}}>1.</h2>
                                        </div>
                                        <div className="col-10 offset-1 col-md-8 ">
                                            <p id="about-text-card-fourth"><b>Competenze:</b></p>
                                            <h5>Ricerca mirata delle competenze necessarie per creare team eterogenei</h5>
                                        </div>
                                    </Row>
                                    <Row className='mt-5'>
                                        <div className="col-10 offset-1 col-md-2 offset-1 text-center my-auto">
                                            <h2 style={{fontSize:'70px'}}>2.</h2>
                                        </div>
                                        <div className="col-10 offset-1 col-md-8 ">
                                            <p id="about-text-card-fourth"><b>Motivazione:</b></p>
                                            <h5>La volontà di unirsi al  progetto viene subito testata</h5>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row style={{marginTop: '10vh'}}>
                    <div className="col-10 offset-1 col-md-6 offset-md-3 text-center text-black">
                        <Row>
                            <div className='col-12'><h1 >Contattaci</h1></div>
                        </Row>
                        <Row>
                            <div className='col-12' style={{fontSize:'28px'}}>
                                <p> info@nucleus.it</p>
                                {/* <p>Linkedin:ddddddds</p>                             */}
                            </div>
                        </Row>
                    </div>
                </Row>
                <Row className="mt-5 mb-5">
                    <div className="col-12">
                        <hr className='dashed-line' />
                    </div>                    
                </Row>
            </Container>
            <Container>
                <Row>
                        <div className="col-10 offset-1 text-center text-black offset-md-1 mb-5">
                            <h1>Domande frequenti</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-10 col-md-10">
                            <p id="about-faq-question">1. Se mi candido a un progetto, sono poi vincolato a prendervi parte?</p>
                            <p id="about-faq-answer">No, la candidatura è una semplice manifestazione di interesse a voler conoscere il founder o aspirante tale.</p>
                            <br />
                        </div>
                    </Row>
                    <Row>
                         <div className="col-10 col-md-10">
                            <p id="about-faq-question">2. Come avverrà l’incontro tra founder  e team member?</p>
                            <p id="about-faq-answer">Avverrà tramite videochiamata organizzata da Nucleus. </p>
                            <br />
                        </div>
                    </Row>
                    <Row>
                    <div className="col-10 col-md-10">
                            <p id="about-faq-question">3. Il servizio è a pagamento?</p>
                            <p id="about-faq-answer">No, al momento è completamente gratuito. </p>
                            <br />
                        </div>
                    </Row>
                    <Row>
                    <div className="col-10 col-md-10">
                            <p id="about-faq-question">4. Mi posso candidare a più progetti contemporaneamente?</p>
                            <p id="about-faq-answer">Sì, non c'è alcun limite.</p>
                            <br />
                        </div>
                    </Row>
                    <Row>
                    <div className="col-10 col-md-10">
                            <p id="about-faq-question">5. Ho una domanda che non è tra queste, come faccio?</p>
                            <p id="about-faq-answer">Per qualsiasi altra domanda e curiosità puoi scriverci a  info@nucleus.it.</p>
                            <br />
                        </div>
                    </Row>
            </Container>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = state => ({
    
})


export default connect(mapStateToProps, {})(withRouter(AboutUsPrivate))
