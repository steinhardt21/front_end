/**
 *  The page of login and registration of the website
 */
import React, { Fragment, useState } from 'react';
import { Button, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, register } from '../../../actions/auth';
import Footer from '../../components/FooterPublic';
import Head from '../../components/Head';
import NavbarPublic from '../../components/NavbarPublic';

export const Sign = ({login, isAuthenticated, register, history, match}) => {

    const [formDataLogIn, setFormDataLogIn] = useState({
        Email: '',
        Password: ''
    })

    const [matchPassword, setMatchPassword] = useState(true)

    const [formDataRegister, setFormDataRegister] = useState({
        Name: '',
        Surname: '',
        EmailRegister: '',
        Password_1: '',
        Password_2: ''
    })

    const {Email, Password} = formDataLogIn;
    const {Name, Surname, EmailRegister, Password_1, Password_2} = formDataRegister;

    const onChange = e => {
        setFormDataLogIn({...formDataLogIn, [e.target.name]: e.target.value});
        console.log(Email);
        console.log(Password);
    }

    const onSubmit = e => { 
        e.preventDefault();
        login(Email, Password, history);
      };

    const onSubmitRegister = e => {
        e.preventDefault();

        if(Password_1 !== Password_2){ setMatchPassword(false)}
        else {
            console.log('the id:  ', match.params.id)
            register({Name, Surname, EmailRegister, Password_1, history}, match.params.id)
        }
    }

    const onChangeRegister = e => {
        setFormDataRegister({...formDataRegister, [e.target.name]: e.target.value});
    }

    if (isAuthenticated) {
        return <Redirect to="/newversion/dashboard"/>;
    }

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
                                            <Nav.Item>
                                              <Nav.Link  className="navItemLoginRegister nav-link-LoginRegister" eventKey="first">Registrati</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                              <Nav.Link className="navItemLoginRegister nav-link-LoginRegister" eventKey="second">Accedi</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                                <div className="col-12">
                                <Tab.Content>
                                    <Tab.Pane eventKey="second">
                                        <div className="cardLoginRegister mt-4">
                                            <Form onSubmit={onSubmit}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label className="text-white">Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" name="Email" value={Email} onChange={onChange} required/>
                                                    <br />
                                                    <Form.Label className="text-white">Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" name="Password" value={Password} onChange={onChange} required/>
                                                    <br />
                                                </Form.Group>
                                                <Row className="mt-3">
                                                    <div className="col-12 text-center ">
                                                        <Button  type="submit" className="btn border-white text-white loginRegisterButton rounded-pill">
                                                            Accedi
                                                        </Button>
                                                    </div>
                                                </Row>
                                                
                                            </Form>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="first">
                                        <div className="cardLoginRegister mt-4" >
                                            <Form onSubmit={onSubmitRegister}>
                                                <Form.Group >
                                                    <Form.Label className="text-white">Nome</Form.Label>
                                                    <Form.Control name="Name" type="text" value={Name} placeholder="Nome" onChange={onChangeRegister} required/>
                                                    <br />
                                                    <Form.Label className="text-white">Cognome</Form.Label>
                                                    <Form.Control name="Surname" type="text" value={Surname} placeholder="Cognome" onChange={onChangeRegister} required/>
                                                    <br />
                                                    <Form.Label className="text-white">Email</Form.Label>
                                                    <Form.Control name="EmailRegister" type="email" value={EmailRegister} placeholder="Email" onChange={onChangeRegister} required/>
                                                    <br />
                                                    <Form.Label className="text-white">Password</Form.Label>
                                                    <Form.Control name="Password_1" type="password" value={Password_1} placeholder="Password" onChange={onChangeRegister} required/>
                                                    <br />
                                                    <Form.Label className="text-white">Conferma Password</Form.Label>
                                                    <Form.Control name="Password_2" type="password" value={Password_2} placeholder="Conferma Password" onChange={onChangeRegister} required/>
                                                    {matchPassword ? (null) : (<Form.Label className="text-danger">non corrisponde alla password inserita</Form.Label>) }
                                                </Form.Group>

                                                <Row className="mt-3">
                                                    <div className="col-12 text-center ">
                                                        <Button  type="submit" className="btn border-white text-white loginRegisterButton rounded-pill">
                                                            Registrati
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
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login,register})(Sign)
 