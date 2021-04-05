// import Spinner from '../../../../components/layout/Spinner'
import LayoutBodyAdmin from "../../../../components/LayoutAdminBody"
import LayoutHeaderAdmin from "../../../../components/LayoutAdmin"
import React, { Fragment, useEffect, useState } from 'react'
import { connect } from "react-redux"
import {getPendingProjects} from '../../../../../actions/admin'
import {Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const ApproveProject = ({getPendingProjects, admin:{pendingProjects}}) => {
  const [projects, setProjects] = useState([])  

  useEffect(() => {
    getPendingProjects()  
  }, [getPendingProjects])

  useEffect(() => {
    setProjects(pendingProjects)
  },[pendingProjects])

  return (
    <Fragment>
      <LayoutHeaderAdmin />
      <LayoutBodyAdmin> 
        <Row>
        <div className="col-12">                                
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects Registered</h6>                                      
            </div>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Sede</th>
                            <th>Data Inserimento</th>
                            <th>???</th>
                            <th>???</th>
                            {/* <th>??</th>
                            <th>??</th>
                            <th>??</th> */}
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Sede</th>
                            <th>Data Inserimento</th>
                            <th>???</th>
                            <th>???</th>
                            {/* <th>??</th>
                            <th>??</th>
                            <th>??</th> */}
                        </tr>
                    </tfoot>
                    <tbody>
                    {
                      projects.map(        
                        (project, countProject) => (
                          <tr key={countProject}>
                            <td>{countProject}</td>
                            <td> 
                                <Link to={`/admin/project/acceptance/${project._id}`}>{project.Name}</Link> 
                            </td>
                            <td>{ project.Headquarter }</td>
                            <td>{project.Date_Inserted}</td>
                            <td></td>
                          </tr>
                        )
                      )
                    }                        
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
          </div>
        </Row>
      </LayoutBodyAdmin>
    </Fragment>
    )
}

const mapStateToProps = state => ({
    admin: state.admin,
    auth: state.authCollaborator
})


export default connect(mapStateToProps, {getPendingProjects})(ApproveProject)
