import LayoutBodyAdmin from "../../../../components/LayoutAdminBody"
import LayoutHeaderAdmin from "../../../../components/LayoutAdmin"
import React, { Fragment, useEffect, useState } from 'react'
import {connect} from "react-redux"
import {getProjectById} from '../../../../../actions/project'
import {updateStateProject} from "../../../../../actions/admin";
import {Row} from 'react-bootstrap'
import Spinner from '../../../../../resources/differentResources/Spinner'

export const ProjectDetailApprovation = ({getProjectById, updateStateProject, match, admin, project:{project}, history}) => {
  const [projectDetail, setProjetDetail] = useState('')
  
  useEffect(() => {
    getProjectById(match.params.id)
  }, [getProjectById, match.params.id])
  
  useEffect(() => {
    setProjetDetail(project)
  })
  
  return (
    <Fragment>
      <LayoutHeaderAdmin />
      <LayoutBodyAdmin>
        {!projectDetail ?
          <Spinner /> :
          <Fragment>
            <div className="row pt-5">
              <div className="col-8 offset-2 jumbotron">
                        <div className="row">
                            <div className="col-6">
                                <h1 className="display-3">{project.Name}</h1>
                            </div>
                            <div className="col-6 text-right">
                                <h4> Founder: </h4>
                            </div>
                        </div>
                        <h4>Descrizione idea</h4>
                        <p className="lead">{project.Description}</p>
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
                        <p className="lead">Settore:  </p>
                        
                        <p className="lead">Sede: {project.Headquarter}</p>
                        <p className="lead">Development stage: {project.Development_Stage.Development_Stage} </p>
                        
                        <hr className="my-4" />     
                        
                        <h4>Domande</h4>
                        {!project.ProjectAnalysis.length ? 
                          <p className='lead'>Non ha inserito risposte alle domande</p> :
                          project.ProjectAnalysis.map((analysis, index) => (
                            <p key={index} className="lead">{index}. {analysis.Analysis_Question.Question}: <br /> {analysis.Answer}</p>
                          ))}
                </div>
            </div>
            <Row>
              <div className="col-6 offset-3 text-center">
                <button onClick={() => updateStateProject('ACCEPTED', match.params.id, history)} href="#" className="btn btn-primary btn-icon-split">
                  <span className="icon text-white-50">
                    <i className="fas fa-flag"></i>
                  </span>
                  <span className="text">Accetta</span>
                </button>
                {'  '}
                <button onClick={() => updateStateProject('REJECTED', match.params.id, history)} href="#" className="btn btn-danger btn-icon-split">
                  <span className="icon text-white-50">
                    <i className="fas fa-trash"></i>
                  </span>
                  <span className="text">Rifiuta</span>
                </button>
              </div>
            </Row>

        </Fragment>
        }
      </LayoutBodyAdmin>    
    </Fragment>
  )
}

const mapStateToProps = state => ({
  admin: state.admin,
  project: state.project
})

export default connect(mapStateToProps, {getProjectById, updateStateProject})(ProjectDetailApprovation)
