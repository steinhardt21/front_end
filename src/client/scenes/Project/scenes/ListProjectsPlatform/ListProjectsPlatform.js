/**
 * List of the projects in the Platform
 */
import React, { useEffect, Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPublicCalls } from '../../../../../actions/project'
import Head from '../../../../components/Head'
import Menu from '../../../../components/Menu'
import Footer from '../../../../components/Footer'
import Navbar from '../../../../components/Navbar'
import CallProject from './components/CallProject'
import { withRouter } from 'react-router-dom'
import Spinner from '../../../../../resources/differentResources/Spinner'
import {Link} from 'react-router-dom'


export const ListProjectsPlatform = ({getPublicCalls, project: {publicCalls, loadingPublicCalls }}) => {

useEffect(() => {
    getPublicCalls()
            }, [getPublicCalls])

    return (
        <div >
            {/** START - Definition of the upper part of the page */}
            <Head />
            <Navbar />
            <Menu />
            {/** END */}
            <Container fluid id="dashboardBackground" >
            <br />
            <br />
            <br />

            { loadingPublicCalls ? (<Spinner />) :(
                        
                        publicCalls.length !=0 ? (
                    <Fragment>
                            <Row>
                                <div className="col-10 offset-1 col-md-6 offset-md-3">
                                    <h3 className="text-white display-4 text-center">Trova il progetto a cui unirti!</h3>
                                    <br />
                                                            
                                </div>
                            
                            </Row>  
                            {
                                 publicCalls.map((call, index) => ( 
                                    <Row><div className="col-10 offset-1 col-md-6 offset-md-3"><CallProject key={index} project={call}/></div></Row>))
                                    
                                  
                            }  
                    </Fragment>
                    
                    ) : (
                            <Fragment>
                                <Row>
                                    <div className="col-12 col-md-6 offset-md-3"> <h3 className="text-white display-4"></h3> </div>
                                </Row>
                                <Row className="pt-5 pb-3">
                                    <div className="pt-5 pb-3 col-12 col-md-6 offset-md-3"> <h3 className="text-white display-4">Non ci sono progetti disponibili! Ritorna alla <Link  to='/dashboard'>home</Link></h3> </div>
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

export default withRouter(connect(mapStateToProps, {getPublicCalls})(ListProjectsPlatform))