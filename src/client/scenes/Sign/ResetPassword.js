import React, { useState, Fragment } from 'react'
import { Button, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { connect } from 'react-redux'
import { resetPassword } from '../../../actions/auth';
import Footer from '../../components/FooterPublic';
import Head from '../../components/Head';
import NavbarPublic from '../../components/NavbarPublic';

import {Redirect} from 'react-router-dom' 

export const ResetPassword = ({resetPassword, history}) => {

    const [formData, setFormData] = useState({
        Email: '',
        Password_1: '',
        Password_2: ''
    })

    const {Email, Password_1, Password_2} = formData;

    const [matchPassword, setMatchPassword] = useState(true)

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = e => { 
        e.preventDefault();

        if(Password_1 !== Password_2){ setMatchPassword(false)}
        else {
            setMatchPassword(true)
            console.log('formData:  ', formData)
            resetPassword(formData, history)
        }
      };

    return (
        <Fragment>
            
        {/**Definition of the upper part of the page */}
        <Head />
        {/* <Alert /> */}
        <NavbarPublic />
        {/** END */}
        
        {/* <Container fluid id="createProjectBackground">                */}
        <Container fluid id="rectangle-sign-page">               
            <Row>
                <div className="col-md-4 offset-md-4 col-10 offset-1 pb-5 pb-md-0" >   
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row id="containerFormCreateProject">
                            <div className="col-12">
                                <div className="cardLoginRegister" >
                                    <Nav variant="pills" className="flex-column text-center">
                                        {/* <Nav.Item>
                                          <Nav.Link  className="navItemLoginRegister nav-link-LoginRegister" eventKey="first">Registrati</Nav.Link>
                                        </Nav.Item> */}
                                        <Nav.Item >
                                          <Nav.Link className="navItemLoginRegister nav-link-LoginRegister" eventKey="first">Reset password</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                            <div className="col-12">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="cardLoginRegister mt-4">
                                        <Form onSubmit={onSubmit}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className="text-white">Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" name="Email" value={Email} onChange={onChange} required/>
                                                <br />
                                                <Form.Label className="text-white">Password</Form.Label>
                                                    <Form.Control name="Password_1" type="password" value={Password_1} placeholder="Password" onChange={onChange} required/>
                                                    <br />
                                                    <Form.Label className="text-white">Conferma Password</Form.Label>
                                                    <Form.Control name="Password_2" type="password" value={Password_2} placeholder="Conferma Password" onChange={onChange} required/>
                                                    {matchPassword ? (null) : (<Form.Label className="text-danger">non corrisponde alla password inserita</Form.Label>) }
                                            </Form.Group>
                                            <Row className="mt-3">
                                                <div className="col-12 text-center ">
                                                    <Button  type="submit" className="btn border-white text-white loginRegisterButton rounded-pill">
                                                        Invia
                                                    </Button>
                                                </div>
                                            </Row>
                                            
                                        </Form>
                                    </div>
                                </Tab.Pane>
                                
                            </Tab.Content>
                            </div>
                        </Row>
                    </Tab.Container>
                </div>
            </Row>

            
        </Container>  
        <Footer />          
    </Fragment>
    )
}

const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps, {resetPassword})(ResetPassword)