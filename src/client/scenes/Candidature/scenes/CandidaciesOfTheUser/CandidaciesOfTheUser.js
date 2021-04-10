/**
 * 
 * List with the candidacies done by the user 
 */

import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCandidaturesOfTheUser } from '../../../../../actions/candidacy';
import Head from '../../../../components/Head';
import Menu from '../../../../components/Menu';
import Navbar from '../../../../components/Navbar';
import UserCandidacy from './components/UserCandidacy';
import Footer from '../../../../components/Footer';
import { Fragment } from 'react';
import Spinner from '../../../../../resources/differentResources/Spinner' 
import {Link} from 'react-router-dom';

export const CandidaciesOfTheUser = (
     { getCandidaturesOfTheUser, candidacy: { userCandidacies, userCandidaciesLoading }  }
    
    ) => {

    useEffect(() => {
        
        getCandidaturesOfTheUser()
    
    }, [getCandidaturesOfTheUser])
    
    return (
        <div >
            {/** START - Definition of the upper part of the page */}
            <Head />
            <Navbar />
            <Menu />
            {/** END */}
            <Container id="createProjectBackground" fluid >
            

            { userCandidaciesLoading ? (<Spinner />) :(
                        
                        userCandidacies.length !=0 ? (
                    <Fragment>
                             <Row className="pt-5 pb-3">
                                    <div className="pt-5 pb-3 col-12 col-md-6 offset-md-3"> <h3 className="text-white display-4">Le mie candidature</h3> </div>
                                </Row>
                            {
                                 userCandidacies.map((candidacy, index) => ( 
                            
                                    <Row>
                                    <div key={index} className="col-10 offset-1 col-md-6 offset-md-3">
                                         <UserCandidacy key={candidacy._id} candidacy={candidacy}/>
                                    </div>
                                    </Row>
                                    
                                    ))
                            }  
                    </Fragment>
                    
                    ) : (
                            <Fragment>
                                <Row className="pt-5 pb-3">
                                    <div className="pt-5 pb-3 col-12 col-md-6 offset-md-3"> <h3 className="text-white display-4">Non ti sei ancora candidato a nessun progetto! Vedi i progetti disponibili a <Link style={{color:'white'}}  to='/list-projects'>questa pagina</Link>!</h3> </div>
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
    
    getCandidaturesOfTheUser

})(CandidaciesOfTheUser)