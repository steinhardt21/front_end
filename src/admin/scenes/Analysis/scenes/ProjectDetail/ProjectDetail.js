/**
 * Page that enters in the detail of the projects
 */
import PropTypes from 'prop-types'
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProjectById } from '../../../../../actions/project'
import Spinner from '../../../../../resources/differentResources/Spinner'

import LayoutHeaderAdmin from "../../../../components/LayoutAdmin"
import LayoutBodyAdmin from "../../../../components/LayoutAdminBody"

// export const ProjectDetail = ({getProjectById, getCandidates, candidacy, match, project: {project, loading}}) => {
export const ProjectDetail = () => {

    return (
        <Fragment>
            <LayoutHeaderAdmin />
            <LayoutBodyAdmin> 
                
                    <Fragment>
                        <div className="row pt-5">
                            <div className="col-8 offset-2 jumbotron">
                                    <div className="row">
                                        <div className="col-6">
                                            <h1 className="display-3"></h1>
                                        </div>
                                        <div className="col-6 text-right">
                                            <h4> Founder: </h4>
                                        </div>
                                    </div>
                                    <h4>Descrizione idea</h4>
                                    <p className="lead"></p>
                                    <hr className="my-4" />
                                    
                                    <h4>Figure ricercate</h4>
                                    <span className="lead">


                                        <ul className="list-group">                                      
                                            {/* {
                                                project.positions_searched.map((element, index) =>(
                                                    <li key={ index} className="list-group-item d-flex justify-content-between align-items-center">
                                                           {element}
                                                    </li>
                                                ))

                                            } */}
                                        </ul>
                                    </span>
                                    <hr className="my-4" />

                                    <h4>Informazioni</h4>  
                                    <p className="lead">Settore: </p>
                                    <p className="lead">Tipo di collaborazione: </p>
                                    <p className="lead">Sede: </p>
                                    <p className="lead">Development stage: </p>
                                    
                                    <hr className="my-4" />     
                                    
                                    <h4>Lista Candidati</h4>  
                                    
                                    {/* {candidacy === null || loading ? <Spinner /> : (<Fragment> { candidacy.candidacies.map((candidate, candidateNumber) => <p className="lead">({candidateNumber})  <Link to={`/admin/users/${candidate.user._id}`}> {candidate.user.name} </Link> </p>) }</Fragment>)} */}
                                    

                                   
                            </div> 
                        </div>   

                    </Fragment>
            </LayoutBodyAdmin>
        </Fragment>
    )
}

ProjectDetail.propTypes = {
    getProjectById: PropTypes.func.isRequired,
 //   getCandidates: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.project,
   // candidacy: state.candidacy
    
})

//export default connect(mapStateToProps, {getProjectById, getCandidates})(withRouter(ProjectDetail))
export default connect(mapStateToProps, {})(withRouter(ProjectDetail))
