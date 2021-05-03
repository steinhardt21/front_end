import React, { useEffect, Fragment, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { getCurrentProfile } from '../../../../../actions/profile'
import { getProjectsofTheUser, getUserCalls } from '../../../../../actions/project'
import Head from '../../../../components/Head'
import Menu from '../../../../components/Menu'
import Navbar from '../../../../components/Navbar'
import CallProject from './components/CallProject'
import Footer from '../../../../components/Footer'
import Spinner from '../../../../../resources/differentResources/Spinner'
import PopupProfile from './components/PopupCheckProfile'

export const ProjectsOfTheUser = ({getCurrentProfile, getProjectsofTheUser,match, getUserCalls, project: { projectsOfTheUser, userCalls, loadingUserCalls },history, profile: {profile}  }) => {

    useEffect(() => {
        
            getProjectsofTheUser()
            getUserCalls()
            getCurrentProfile()
    
    }, [getProjectsofTheUser, getUserCalls, getCurrentProfile])

    const [modalShow, setModalShow] = useState(false)
    
   function checkProfile() {
        if(!(profile != null)){
            console.log('CHECK PROFILE')
            setModalShow(true)
            
        }
        else{
            history.push(`/create-project`)
        }
   }

    return (
        <div >
            <Head />
            <Navbar />
            <Menu />
            <Container fluid id='createProjectBackground' >
          
            { loadingUserCalls ? (<Spinner />) :(
                        
                        userCalls.length !=0 ? (
                    <Fragment>
                             <Row className='pt-4 pb-2'>
                                <div className='col-md-6 offset-md-3 col-12 mb-3'> <h3 className='text-white display-4 '>I miei progetti</h3> </div>
                            </Row>
                            {
                                 userCalls.map((calls) => (
                                    calls.map((call, index) => (
                                        <Row>
                                            <div key={index} className='col-10 offset-1 col-md-6 offset-md-3'>
                                                <CallProject key={call._id} call={call} />
                                            </div>
                                        </Row>
                                    ))
                                ))
                            }
                            <Row><div className='col-md-6 offset-md-3 col-12 text-center mb-4'><Link style={{width:'340px'}} type='button' className='btn btn-primary btn-lg' to={`/create-project`} >Crea un nuovo progetto</Link></div></Row>
                    </Fragment>
                    
                    ) : (
                            <Fragment>
                                <Row className='pt-5 pb-3'>
                                    <div className='pt-5 pb-3 col-12 col-md-6 offset-md-3 text-center'> <h3 className='text-white display-4'>Non hai creato nessun progetto! </h3> </div>
                                </Row>
                                <Row>
                                <div className='col-12 col-md-6 offset-md-3 text-center'><button style={{width:'340px'}} type='button' className='btn btn-primary btn-lg' onClick={() => checkProfile()}>Crea un nuovo progetto</button>
                                
                                <PopupProfile
                                        formData = {
                                                 'hello'
                                                // formData
                                            }
                                        show={modalShow}
                                        clickMe={() => {
                                                            
                                                            history.push(`/create-profile/create-project`)
                                                        }
                                                }
                                        onHide={() => setModalShow(false)}
                                    />
                                
                                </div>
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
    project: state.project,
    profile: state.profile,
    auth: state.auth
})

export default withRouter(connect(mapStateToProps, {getCurrentProfile, getProjectsofTheUser, getUserCalls})(ProjectsOfTheUser))