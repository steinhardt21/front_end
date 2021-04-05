/**
 * 
 * List with the CALLS of the user
 */

import React, { useEffect, Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProjectsofTheUser, getUserCalls } from '../../../../../actions/project';
import Head from '../../../../components/Head';
import Menu from '../../../../components/Menu';
import Navbar from '../../../../components/Navbar';
import CallProject from './components/CallProject';
import Footer from '../../../../components/Footer';
import Spinner from '../../../../../resources/differentResources/Spinner'


export const ProjectsOfTheUser = ({ getProjectsofTheUser, getUserCalls, project: { projectsOfTheUser, userCalls, loadingUserCalls }  }) => {

    useEffect(() => {
        
            getProjectsofTheUser()
            getUserCalls()
    
    }, [getProjectsofTheUser, getUserCalls])
    
    return (
        // <div id="background_svg">
        <div >
            {/** START - Definition of the upper part of the page */}
            <Head />
            <Navbar />
            <Menu />
            {/** END */}
            <Container fluid id="createProjectBackground" >
          
            { loadingUserCalls ? (<Spinner />) :(
                        
                        userCalls.length !=0 ? (
                    <Fragment>
                             <Row className="pt-4 pb-2">
                                <div className="col-md-6 offset-md-3 col-12 mb-3"> <h3 className="text-white display-4 ">I miei progetti</h3> </div>
                            </Row>
                            {
                                 userCalls.map((calls) => (
                                    calls.map((call, index) => (
                                        <Row>
                                            <div key={index} className="col-10 offset-1 col-md-6 offset-md-3">
                                                <CallProject key={call._id} call={call} />
                                            </div>
                                        </Row>
                                    ))
                                ))
                            }
                            <Row><div className="col-md-6 offset-md-3 col-12 text-center mb-4"><Link style={{width:'340px'}} type="button" className="btn btn-primary btn-lg" to={`/newversion/create-project`} >Crea un nuovo progetto</Link></div></Row>
                    </Fragment>
                    
                    ) : (
                            <Fragment>
                                <Row className="pt-5 pb-3">
                                    <div className="pt-5 pb-3 col-12 col-md-6 offset-md-3 text-center"> <h3 className="text-white display-4">Non hai creato nessun progetto! </h3> </div>
                                </Row>
                                <Row>
                                <div className="col-12 col-md-6 offset-md-3 text-center"><Link style={{width:'340px'}} type="button" className="btn btn-primary btn-lg" to={`/newversion/create-project`} >Crea un nuovo progetto</Link></div>
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
    project: state.project
})

export default connect(mapStateToProps, {getProjectsofTheUser, getUserCalls})(ProjectsOfTheUser)