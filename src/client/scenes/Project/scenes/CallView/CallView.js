import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { getCallInformation, getProjectOwner } from '../../../../../actions/project';
import { getCurrentProfile } from '../../../../../actions/profile';
import Head from '../../../../components/Head';
import Menu from '../../../../components/Menu';
import Navbar from '../../../../components/Navbar';
import Spinner from '../../../../../resources/differentResources/Spinner'

import { Fragment } from 'react';
import Footer from '../../../../components/Footer'
import {Tabs,Form, Image, Tab, Button, Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import Popup from './componets/PopupCheckProfile'


var questions = {}
var flag = false;


export const CallView = ({getCallInformation, getProjectOwner, auth:{user}, match, project:{call, loadingCall, owner}, getCurrentProfile, history, profile: {profile}}) => {

    const [callData, setCallData] = useState({
        Name: '',
        Position:'',
        Industry: '',
        Development_Stage: '',
        Description: '',
        Analysis_Question: '',
        Question: '',
        Skills: '',
        Type_Colaboration: '',
        City_Presence_Required: 'No'
    })

    const{
        Name,
        Position,
        Industry,
        Development_Stage,
        Description,
        Analysis_Question,
        Question,
        Skills, 
        Type_Colaboration,
        City_Presence_Required
    } = callData

    const [modalShow, setModalShow] = useState(false);

   useEffect(() => {

         getCallInformation(match.params.id)
        

        if(!loadingCall)
        {
            console.log(call)
            console.log(call.Position.Position)
            
            call.ProjectAnalysis.map((quesAns) => questions[quesAns.Analysis_Question.Question] = quesAns.Answer)

            console.log('newArray', questions)
            getProjectOwner(call.Project._id)
            setCallData({
                Name: call.Project.Name,
                Position: call.Position.Position,
                Industry: call.Industry,
                Development_Stage: call.Project.Development_Stage.Development_Stage,
                Description: call.Description,
                Analysis_Question: '',
                Question: '',
                Skills: '',
                Type_Colaboration: '',
                City_Presence_Required: 'No'
            })

            flag = true;

            
        }else{
            setCallData({
                Name: '',
        Position:'',
        Industry: '',
        Development_Stage: '',
        Description: '',
        Analysis_Question: '',
        Question: '',
        Skills: '',
        Type_Colaboration: '',
        City_Presence_Required: 'No'
            })
        }
   }, [match.params.id, loadingCall, getProjectOwner])

   useEffect(() => {
    getCurrentProfile()
   }, getCurrentProfile)
   
   const [ownerProject, setOwnerProject] = useState('') 

   useEffect(() => {
     if(owner != null) setOwnerProject(owner[0].User)
   },[owner])

   function checkProfile()
   {
        if(!(profile != null)){
            
            setModalShow(true)
        }
        else{
            history.push(`/call/motivational-letter/${match.params.id}`)
        }
   }

    return (
        <div key={ match.params.id}>
            {/** START - Definition of the upper part of the page */}
                <Head />
                <Navbar />
                <Menu />
            {/** END */}

            <Container fluid id="createProjectBackground">
               
               
            {!flag ? <Spinner /> : 
            <Fragment>
                <Row>
                    <div className="col-12 col-md-6 offset-md-3">
                        {/* <h1 className="text-white display-4 text-center">Trova il progetto a cui unirti</h1> */}
                        <br />
                        <div id="cardProjectOutside" className="card  shadow-lg p-3 mb-5 bg-white">
                                        
                            <Row id="cardProjectInside" className="no-gutters text-white mb-3">
                                <div className="col-md-4 col-12 my-auto text-center">
                                {/* <img src="image.jpg" className="card-img" alt="..." /> */}
                                    <h2>{Name}</h2>
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body p-0">
                                        <Row className="no-gutters"><div className="col-md-12 col-12 text-center text-md-left"><h2><u>{Position}</u></h2></div></Row>
                                        <Row className="card-text no-gutters">
                                            <div className="col-md-12 col-12 text-center text-md-left">
                                                <p className="m-0"><span className="font-weight-bold">Settore:</span> {Industry}</p>
                                                <p className="m-0"><span className="font-weight-bold">Fase:</span> {Development_Stage}</p>
                                                {/* <p className="m-0"><span className="font-weight-bold">Stato:</span> {call.Project.Status}</p> */}
                                            </div>
                                        </Row>
                                        
                                    </div>
                                </div>
                                
                            </Row>

                            {

                                (questions.length === 0) ? ('') : (
                                    Object.keys(questions).map((element, index) =>(<Row key={index} className="no-gutters mt-3">
                                        <div className="col-12">
                                            <p><b>{element}:</b></p>                                                       
                                            <p>{questions[element]}</p>
                                        </div>
                                    </Row>))
                                )
                            }
                            
                        </div>

                    </div>
                </Row>
                {
                  (ownerProject === user._id) ? '':
                
                (<Row className="pb-5">
                    <div className="col-12 text-center">
                        {/* <Link style={{width:'190px'}} type="button" className="btn btn-primary btn-lg" to={`/call/motivational-letter/${match.params.id}`} >Candidati</Link> */}
                            
                        <button className="btn btn-primary btn-lg" onClick={() => checkProfile()}>Invia candidatura</button>
                                    <Popup
                                        formData = {
                                                 'hello'
                                                // formData
                                            }
                                        show={modalShow}
                                        clickMe={() => {
                                                            
                                                            // createCandidature(formData)
                                                            history.push(`/create-profile/${match.params.id}`)
                                                        }
                                                }
                                        onHide={() => setModalShow(false)}
                                    />
                        

                    </div>
                </Row>)}

                </Fragment>}
               
                
                
                
            </Container>
            <Footer  />
            {/* <Footer /> */}
        </div>
    )
}

const mapStateToProps = state => ({
    project: state.project,
    profile: state.profile,
    auth: state.auth
})

export default withRouter(connect(mapStateToProps, {getCallInformation, getCurrentProfile, getProjectOwner})(CallView))