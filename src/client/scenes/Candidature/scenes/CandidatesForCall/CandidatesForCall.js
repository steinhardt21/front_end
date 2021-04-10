/**
 * 
 * List of the candidates for a certain project
 */

import React, { useEffect, Fragment, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCandidatesCall } from '../../../../../actions/candidacy';
import Head from '../../../../components/Head';
import Menu from '../../../../components/Menu';
import Navbar from '../../../../components/Navbar';
import CandidateCall from './components/CandidateCall';
import {Link} from 'react-router-dom'
import { withRouter } from "react-router";
import Spinner from '../../../../../resources/differentResources/Spinner' 
import Footer from '../../../../components/Footer';
import { createHashHistory } from 'history'
export const history = createHashHistory()

export const CandidatesForCall = ({match, getCandidatesCall, candidacy:{candidatesProject, candidatesProjectLoading, history} }) => {

   
    useEffect(() => {
        
        getCandidatesCall(match.params.id)
    
    }, [getCandidatesCall, match.params.id])
    // }, [getCandidatesCall, match.params.id, candidatesProject])

    return (
        <div>
            {/** START - Definition of the upper part of the page */}
            <Head />
            <Navbar />
            <Menu />
            {/** END */}
            <Container fluid id="createProjectBackground" >
            <br />
            <br />
            <br />
            <br />

            { candidatesProjectLoading ? (<Spinner />) :(
                        
                        candidatesProject.length !=0 ? (
                    <Fragment>
                            <Row>
                                 <div className="col-12 col-md-6 offset-md-3"> <h1 className="text-white display-4">Lista candidati per la call</h1> </div>
                             </Row>  
                            {
                                 candidatesProject.map((candidate, index) => ( 
                            
                                    <Row  key={index}>
                                         <div key={index} className="col-10 offset-1 col-md-6 offset-md-3">
                                              <CandidateCall key={candidate._id} candidate={candidate} callId={ match.params.id} history={history} />
                                        </div>
                                    </Row>
                             ))
                                    
                                  
                            }  
                    </Fragment>
                    
                    ) : (
                            <Fragment>
                                <Row>
                                    <div className="col-12 col-md-6 offset-md-3"> <h1 className="text-white display-4">Non hai ancora ricevuto nessuna candidatura! Ritorna alla <Link  to='/personal-list-projects'>lista dei tuoi progetti</Link></h1> </div>
                                </Row>
                            </Fragment>
                            )
                        )
                    }
            </Container>
            <Footer />
            </div>
    )
}

const mapStateToProps = state => ({
    candidacy: state.candidacy
})

export default connect(mapStateToProps, {
    getCandidatesCall
})(CandidatesForCall)