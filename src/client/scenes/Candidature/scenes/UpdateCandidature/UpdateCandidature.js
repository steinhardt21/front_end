import React, { useState, useEffect } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCandidature, updateCandidature } from '../../../../../actions/candidacy'
import Head from '../../../../components/Head'
import Menu from '../../../../components/Menu'
import Navbar from '../../../../components/Navbar'

export const UpdateCandidature = ({getCandidature, updateCandidature, match, history, candidacy: {candidature, candidacyLoading}}) => {

    const [formData, setFormData] = useState({
        Motivational_Letter: '',
        idCandidature: match.params.id 
    })

    useEffect(() => {
        getCandidature(match.params.id)
    }, [getCandidature, match.params.id])

    useEffect(() => {
       if(!candidacyLoading)
        {setFormData({
            Motivational_Letter: candidature.Motivational_Letter,
            idCandidature: match.params.id 
        })}
    }, [candidacyLoading])

    const onSubmit = e => {
        e.preventDefault()

        updateCandidature(formData)
        history.push('/newversion/dashboard')

    }

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    
    const {Motivational_Letter, idCandidature} = formData

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
                <div className="col-8 offset-2">
                    <h1 className="text-white display-4 text-center">Lettera motivazionale</h1>
                    <br />                     
                </div>                  
            </Row>
            <Row>
                <div className="col-8 offset-2">
                    <Form onSubmit = {e=>onSubmit(e)}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control  style={{borderRadius: '25px'}} as="textarea" rows={15} placeholder="Voglio partecipare a questo progetto perchè ....." name='Motivational_Letter' value={Motivational_Letter} onChange={e => onChange(e)} required />
                        </Form.Group>
                        <br />
                        <Row>
                            <div className="col-12 text-center">
                                <button className="btn btn-primary btn-lg">Aggiorno candidatura</button>
                                
                            </div>
                            
                        </Row>
                    </Form> 
                    
                        

                </div>
            </Row>
        </Container>
        {/* <Footer /> */}
    </div>
    )
}

const mapStateToProps = state => ({
    candidacy: state.candidacy
})

export default withRouter(connect(mapStateToProps, {getCandidature, updateCandidature})(UpdateCandidature)) 
