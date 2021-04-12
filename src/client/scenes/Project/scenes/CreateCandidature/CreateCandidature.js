/**
 *  Page where the user create a new call
 */
import React, { Fragment, useEffect, useState } from 'react'
import { Container, Form, InputGroup, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getAllPositions } from '../../../../../actions/complementaryInfo'
import { createCallProject } from '../../../../../actions/project'
import LogoSymbol from '../../../../../resources/img/logo_nucleus_symbol.svg'
import Head from '../../../../components/Head'
import Menu from '../../../../components/Menu'
import Navbar from '../../../../components/Navbar'
import PopupNewCandidature from './components/PopupCreateCandidature'
import PopupGoDashboard from './components/PopupGoDashboard'
import PopupMessage from './components/PopupMessage'
import PopupMessageGoDashboard from './components/PopupMessageGoDashboardjs'

export const CreateCandidature = ({complementaryInfo, history, getAllPositions, createCallProject, match}) => {

    const [togleTypeCandidature, setTogleTypeCandidature] = useState(true)

    const [modalShow, setModalShow] = useState(false);
    const [modalGoDashboard, setModalGoDashboard] = useState(false);
    const [modalMessage, setModalMessage] = useState(false);
    const [modalMessageGoDashboard, setModalMessageGoDashboard] = useState(false);


    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const [newCandidacy, setNewCandidacy] = useState(true)

    const onSubmit = e => {
        e.preventDefault();

        console.log('Data project')
        console.log(formData)

        if(newCandidacy) {
            console.log('NEW CANDIDACY')
            setModalShow(true);
            // history.push(`/create-candidature/${match.params.id}`)
        }
        else {
            setModalGoDashboard(true)
            // history.push(`/dashboard`)
        }


        // createCallProject(formData, history)

        // setFormData({
        //     Position:' ',
        //     Skills: ' ',
        //     Type_Colaboration:' ',
        //     City_Presence_Required:' ',
        //     Project: match.params.id
        // })

        
    }

    const [checkbox, setCheckbox] = useState(false)
    const [formData, setFormData] = useState({
        Position:'',
        Skills:'',
        Type_Colaboration:'',
        City_Presence_Required:'',
        Project: match.params.id
    })

    const{  
        Position,
        Skills,
        Type_Colaboration,
        City_Presence_Required,
        Project
    } = formData;

    useEffect(()=>{
        getAllPositions();
    }, [getAllPositions])

    return (
        <div>
            {/** START - Definition of the upper part of the page */}
            <Head />
            <Navbar />
            <Menu />
            {/** END */}

            <Container fluid id="createProjectBackground">
                <Row>
                <div className="col-10 offset-1 col-md-6 offset-md-3 text-white" id="containerFormCreateProject">

                {/** Title page */}
                <h1 className="text-center text-white display-4">Quale figura stai cercando?</h1>
                <br />
                

                <Form>
                  <Form.Group >
                     <h5 className="text-center text-white">Sai già quale figura stai cercando?</h5>
                        <Form.Control as="select" name="Type_Colaboration"  onChange={() => setTogleTypeCandidature(!togleTypeCandidature)} required>
                            <option className="text-center">Sì</option>
                            <option className="text-center">No</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                {togleTypeCandidature ? (
                    <Fragment>
                        <Form  onSubmit = {e=>onSubmit(e)}>
                            <Form.Group>
                            <Form.Label>Professione *</Form.Label>
                                        <Form.Control as="select" value={Position} name="Position" onChange={e => onChange(e)} required >   
                                            <option value="">--Seleziona professione --</option>                 
                                            {
                                                (complementaryInfo.loading)  
                                                                            ? 
                                                                                (<option> </option>) 
                                                                            : 
                                                                                ((complementaryInfo.positions.map((position, index) => {
                                                    
                                                                                    // if(!((profile != null)&&(profile.Position != null)&&(Position === position._id)))
                                                                                    if((Position != '')&&(Position === position._id))
                                                                                    {
                                                                                        return <option selected="selected" value={position._id} id={position._id} key={index}>{position.Position}</option>
                                                                                    }
                                                                                    else
                                                                                    {return <option value={position._id} id={position._id} key={index}>{position.Position}</option>}
                                                                                    
                                                                                })
                                                ))
                                            } 
                                        </Form.Control>
                            </Form.Group>
                            <br />
                            <Form.Label>Competenze ricercate * | Usare la virgola per separare (es. analisi dati, js, project management, team work, ecc.)</Form.Label>
                            <Form.Control type="text" placeholder="Competenze" name="Skills" value={Skills} onChange={e => onChange(e)} required/>
                            <br />
                            <Form.Group >
                                <Form.Label>Tipo di collaborazione ricercata *</Form.Label>
                                <Form.Control as="select" name="Type_Colaboration" value={Type_Colaboration} onChange={e => onChange(e)} required>
                                    <option value="">--Seleziona tipo collaborazione --</option>   
                                    <option>Co-Founder</option>
                                    <option>Collaboratore</option>
                                    <option>Altro</option>
                                </Form.Control>
                            </Form.Group>
                            <br />
                            <Form.Group >
                                <Form.Label>E' richiesta la presenza in città o certa area geografica</Form.Label>
                                {/* <Form.Control as="select" name="CheckPresence"  required>
                                    <option>No</option>
                                    <option>Si</option>
                                </Form.Control> */}
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" defaultChecked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                                    </InputGroup.Prepend>
                                    {/* <Form.Control aria-label="Text input with checkbox" /> */}
                                </InputGroup>

                                <br />
                                {checkbox ? (<Fragment>
                                    <Form.Label>Indicare qui la presenza in città o certa area geografica *</Form.Label>
                                    <Form.Control type="text" name="City_Presence_Required" value={City_Presence_Required} onChange={e => onChange(e)} required/>
                                </Fragment>) :(<br />)}
                                
                            </Form.Group>
                            
                            <div className="row">
                                <div className="col-3 offset-1">
                                    <button style={{ width: '170px'}} type="submit"  className="btn border-white text-white creationProjectButton rounded-pill">Inserire un’altra figura</button>
                                </div>
                                <div className="col-4 text-center">
                                    <span className="logo_nucleus_symbol"></span>
                                    <img src={LogoSymbol} style={{ width: '100px'}} alt='Loading...' />
                                </div>
                                <div className="col-3">
                                    <button  style={{ width: '170px'}} type="submit" onClick={() => setNewCandidacy(false)} className="btn border-white text-white creationProjectButton rounded-pill">Invia</button>
                                </div>

                                {/* <Link className="btn btn-light my-1" to="/create-candidature">Go Back</Link> */}
                            </div>
                        </Form>
                            <PopupNewCandidature
                                show={modalShow}
                                clickMe={() => {   // updateAccepted()
                                                    setModalShow(false)
                                                    setModalMessage(true)
                                                        // setModalShowAcceptedCalendark(true)
                                                    // createCandidature(formData)
                                                    // history.push('/create-profile')
                                                }
                                        }
                                onHide={() => setModalShow(false)}
                            />
                            <PopupMessage
                                show={modalMessage}
                                clickMe={() => {   // updateAccepted()
                                                    createCallProject(formData, history)

                                                    setFormData({
                                                        Position:' ',
                                                        Skills: ' ',
                                                        Type_Colaboration:' ',
                                                        City_Presence_Required:' ',
                                                        Project: match.params.id
                                                    })
                                                    setModalMessage(false)
                                                    history.push(`/create-candidature/${match.params.id}`)
                                                
                                                    window.location.reload();
                                                }
                                        }
                                onHide={() => setModalMessage(false)}
                            />
                            <PopupGoDashboard
                                show={modalGoDashboard}
                                clickMe={() => {   // updateAccepted()
                                                    // setModalShow(false)
                                                    setModalGoDashboard(false)
                                                    setModalMessageGoDashboard(true)
                                                        // setModalShowAcceptedCalendark(true)
                                                    // createCandidature(formData)
                                                    // history.push('/create-profile')
                                                }
                                        }
                                onHide={() => setModalGoDashboard(false)}
                            />
                            <PopupMessageGoDashboard
                                show={modalMessageGoDashboard}
                                clickMe={() => {   // updateAccepted()
                                                    setModalMessage(false)
                                                    createCallProject(formData, history)

                                                    setFormData({
                                                        Position:' ',
                                                        Skills: ' ',
                                                        Type_Colaboration:' ',
                                                        City_Presence_Required:' ',
                                                        Project: match.params.id
                                                    })
                                                    history.push(`/dashboard`)
                                                }}
                                onHide={() => setModalMessageGoDashboard(false)}
                            />
                    </Fragment>
                ):
                (<Fragment>
                    <Form onSubmit = {e => onSubmit(e)} >
                        <Form.Group >
                        <Form.Label>Tipo di collaborazione ricercata</Form.Label>
                        <Form.Control as="select" name="Type_Colaboration" value={Type_Colaboration} onChange={e => onChange(e)} required>
                            <option value="">--Seleziona tipo collaborazione --</option>   
                            <option>Co-Founder</option>
                            <option>Collaboratore</option>
                            <option>Altro</option>
                        </Form.Control>
                    </Form.Group> 
                    <Form.Group >
                        <Form.Label>E' richiesta la presenza in città o certa area geografica</Form.Label>
                        {/* <Form.Control as="select" name="CheckPresence"  required>
                            <option>No</option>
                            <option>Si</option>
                        </Form.Control> */}
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                 <InputGroup.Checkbox aria-label="Checkbox for following text input" defaultChecked={checkbox} onChange={() => setCheckbox(!checkbox)} />
                            </InputGroup.Prepend>
                            {/* <Form.Control aria-label="Text input with checkbox" /> */}
                        </InputGroup>

                        <br />
                        {checkbox ? (<Fragment>
                            <Form.Label>Indicare qui la presenza in città o certa area geografica</Form.Label>
                            <Form.Control type="text" name="City_Presence_Required" value={City_Presence_Required} onChange={e => onChange(e)} required/>
                        </Fragment>) :(<br />)}
                        
                    </Form.Group>     
                    
                      <div className="row">
                                <div className="col-4 offset-4">
                                    <button   type="submit" onClick={() => setNewCandidacy(false)} className="btn border-white text-white creationProjectButton rounded-pill">Invia</button>
                                </div>

                                {/* <Link className="btn btn-light my-1" to="/create-candidature">Go Back</Link> */}
                            </div>
                    </Form>
                        <PopupGoDashboard
                        show={modalGoDashboard}
                        clickMe={() => {   // updateAccepted()
                                            // setModalShow(false)
                                            setModalGoDashboard(false)
                                            setModalMessageGoDashboard(true)
                                                // setModalShowAcceptedCalendark(true)
                                            // createCandidature(formData)
                                            // history.push('/create-profile')
                                        }
                                }
                        onHide={() => setModalGoDashboard(false)}
                    />
                    <PopupMessageGoDashboard
                        show={modalMessageGoDashboard}
                        clickMe={() => {   // updateAccepted()
                                            setModalMessage(false)
                                            createCallProject(formData, history)

                                            setFormData({
                                                Position:' ',
                                                Skills: ' ',
                                                Type_Colaboration:' ',
                                                City_Presence_Required:' ',
                                                Project: match.params.id
                                            })
                                            history.push(`/dashboard`)
                                        }}
                        onHide={() => setModalMessageGoDashboard(false)}
                    />
                </Fragment>
                )}

                
                </div>
                </Row>
            </Container>            
        </div>

    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    project: state.project,
    complementaryInfo: state.complementaryInfo
})


export default connect(mapStateToProps, {getAllPositions, createCallProject})(withRouter(CreateCandidature))