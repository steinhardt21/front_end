/**
 * Dashboard of the User
 */

import { Link } from 'react-router-dom';
import React, {Fragment, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Head from '../../components/Head'
import Menu from '../../components/Menu'
import { connect } from 'react-redux'
import Footer from '../../components/Footer'
import {Tabs, Tab, Form, Button, Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import SummaryCandidature from './components/SummaryCandidature'
import { getCandidaturesOfTheUser } from '../../../actions/candidacy';

import { getUserCalls } from '../../../actions/project';
import SummaryCall from './components/SummaryCall';
import Spinner from '../../../resources/differentResources/Spinner' 
/**
 * TODO:  Call to get the projects of the user from the Database
 */

export const Dashboard = ( { getCandidaturesOfTheUser, getUserCalls, candidacy: { userCandidacies, userCandidaciesLoading }, project: {userCalls}  }
    ) => {

        useEffect(() => {
            getUserCalls()
            getCandidaturesOfTheUser()        
        }, [getCandidaturesOfTheUser])

    return (
        <Fragment>
            {/**Definition of the upper part of the page */}
            <Head />
            <Navbar />
            <Menu />
            {/** END */}

            

            <Container fluid id="dashboardBackgroundRectangle">
                
                { userCandidaciesLoading ? (<Spinner />) :(
                        
                        userCalls.length !=0 ? (
                    <Fragment>
                            <Row className="pt-4 pb-2">
                                <div className="col-md-6 offset-md-3 col-12 mb-3"> <h3 className="text-white display-4 ">I miei progetti</h3> </div>
                            </Row> 
                            {
                                 userCalls.map((calls) => (
                                    calls.map((call, index) => (
                                        <Row >
                                            <div key={index} className="col-10 offset-1 col-md-6 offset-md-3">
                                                <SummaryCall key={call._id} call={call} />
                                            </div>
                                        </Row>
                                    ))))
                            }  
                    </Fragment>
                    
                    ) : (
                            <Fragment> 
                                <Row className="pt-4 pb-2">
                                <div className="col-md-6 offset-md-3 col-12 mb-3"> <h3 className="text-white display-4 ">I miei progetti</h3> </div>
                                <div className="col-10 offset-1 col-md-9 offset-md-3 text-white"><h5>Non hai creato nessun progetto!   <Link style={{width:'340px'}} type="button" className="btn btn-primary btn-lg" to={`/newversion/create-project`} >Crea nuovo progetto</Link></h5></div>
                                </Row>
                            </Fragment>
                            )
                        )
                    }   

                
                <Row className=" mt-1">
                                <div className="col-md-6 offset-md-3 col-12 mb-3"> <h3 className="text-white display-4 ">Status generale candidature</h3> </div>
                 </Row>
                
                <Row className="pb-5">
                    <div className="col-10 offset-1 col-md-6 offset-md-3">
                        <SummaryCandidature candidacies= {userCandidacies} />
                    </div>
                </Row>
                
            </Container>

            <Footer/>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    candidacy: state.candidacy,
    project: state.project
})

export default connect(mapStateToProps, {
    
    getCandidaturesOfTheUser,
    getUserCalls

})(Dashboard)
