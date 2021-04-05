import React, { Fragment, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPublicCalls } from '../../../actions/project';
import Spinner from '../../../resources/differentResources/Spinner';
import Footer from '../../components/FooterPublic';
import Head from '../../components/Head';
import Navbar from '../../components/NavbarPublic';
import CallProject from './components/CallProject';


const ListCallPublic = ({getPublicCalls, project:{publicCalls, loadingPublicCalls}}) => {

    useEffect(() => {
        getPublicCalls()
    }, [getPublicCalls])

    return (
        <Fragment>
            {/** START - Definition of the upper part of the page */}
            <Head />
            <Navbar />
            {/** END */}
        
            {/* <Container fluid id="containerFirstLanding"> */}
            <Container fluid id="dashboardBackground">
                <Row style={{paddingTop:'6%'}} id='listCallFitPage'>
                    
                    <div className="col-8 offset-2 text-center">
                        <h3 className="text-white display-4 ">Trova il progetto a cui unirti</h3>
                    </div> 
                </Row>
                    {loadingPublicCalls ? <Spinner /> :
                        <Row>
                            <div className="col-10 offset-1 col-md-6 offset-md-3">
                            <br />
                                {
                                    publicCalls.map((call, index) => ( <CallProject key={index} project={call}/>))
                                }                        
                            </div>
                        
                        </Row>
                    }
            </Container>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = state => ({
    project: state.project
})

export default connect(mapStateToProps, {getPublicCalls})(ListCallPublic)
