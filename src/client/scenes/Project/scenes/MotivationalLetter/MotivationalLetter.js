import React, { useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createCandidature } from '../../../../../actions/candidacy'
import Head from '../../../../components/Head'
import Menu from '../../../../components/Menu'
import Navbar from '../../../../components/Navbar'
import Popup from './components/PopupCandidature'
import Footer from '../../../../components/Footer'

export const MotivationalLetter = ({createCandidature, match, history}) => {

    const onSubmit = e => {
        e.preventDefault()
    }
    const [modalShow, setModalShow] = useState(false);

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const [formData, setFormData] = useState({
        Motivational_Letter: '',
        idCandidature: match.params.id 
    })

    const {Motivational_Letter} = formData;

    return (
        <div>
            {/** START - Definition of the upper part of the page */}
            <Head />
            <Navbar />
            <Menu />
            {/** END */}
            
            <Container fluid id="createProjectBackground">
                <br />
                <br />
                <br />

                <Row>
                    <div className="col-md-8 offset-md-2 col-10 offset-1 text-center text-white">
                        <h3 className="text-white display-4 text-center mb-3" style={{fontSize:"2.5rem"}}>Descrivi perchè sei interessato a questo progetto.</h3> 
                        <h5 className="mb-5"> Condivideremo la tua “cover letter” con il founder.</h5>                 
                    </div>                  
                </Row>
                <Row>
                    <div className="col-md-8 offset-md-2 col-10 offset-1">
                        <Form onSubmit = {e=>onSubmit(e)}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control  style={{borderRadius: '25px'}} as="textarea" rows={15} placeholder="Voglio partecipare a questo progetto perchè ....." name='Motivational_Letter' onChange={e => onChange(e)} required maxlength='1000'/>
                            </Form.Group>
                            <br />
                            <Row className="pb-3">
                                <div className="col-12 text-center">
                                    <button className="btn btn-primary btn-lg" onClick={() => setModalShow(true)}>Invia candidatura</button>
                                    <Popup
                                        formData = {formData}
                                        show={modalShow}
                                        clickMe={() => {createCandidature(formData)
                                                        history.push('/newversion/dashboard')}}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                                
                            </Row>
                        </Form> 
                        
                            

                    </div>
                </Row>
                
            </Container>
            <Footer />
            {/* <Footer /> */}
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {createCandidature})(withRouter(MotivationalLetter))
