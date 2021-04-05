import React, { Fragment, useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import {getUsers} from '../../../actions/admin'
import {getProjects} from '../../../actions/project'
import {Link, Redirect} from 'react-router-dom' 
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TableRow from './components/TableRow'
import Spinner from '../../../resources/differentResources/Spinner'
import LayoutBodyAdmin from "../../components/LayoutAdminBody"
import LayoutHeaderAdmin from "../../components/LayoutAdmin"

// Export PDF button
// import {CSVLink, CSVDownload} from 'react-csv'
// import Project from '../../../components/project/Project'

/**
 * FUTURE:
 * This page has to be converted in a component with its own state!
 */

const myCSV = [['ID', 'Nome', 'Cognome', 'Email', 'Data']];
const projectsCSV =[['ID', 'Titolo', 'Descrizione', 'Sede', 'Stadio Sviluppo', 'Data Inserimento']]

export const DashboardAdmin = ({ getUsers, getProjects, project:{projects}, admin:{users, loading}, auth:{collaborator}}) => 
{
    //Declaration of the state component
    const [usersList, setUsersList] = useState([]);
    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => 
    {        
        getProjects();
        getUsers();
        
    }, [getUsers, getProjects])

    return  loading && collaborator == null ? (<Spinner />) : 
    (  
        <Fragment>
            <LayoutHeaderAdmin />
            <LayoutBodyAdmin> 

                  {/* <!-- Page Heading -->*/}
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>

                    {/* <!-- Content Row -->*/}
                    <div className="row">

                        {/* <!-- Earnings (Monthly) Card Example -->*/}
                        <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Registered users</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    
                                {
                                    //Here are the users

                                    // users.length
                                }

                                </div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example -->*/}
                        <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Registered Projects</div>
                                {/* <div className="h5 mb-0 font-weight-bold text-gray-800">{projects.length}</div> */}
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example -->*/}
                        {/* <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">???</div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">??</div>
                                    </div>
                                    <div className="col">
                                    <div className="progress progress-sm mr-2">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div> */}

                        {/* <!-- Pending Requests Card Example -->*/}
                        {/* <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">??</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">??</div>
                                </div>
                                <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div> */}
                    </div>

                    {/* <!-- Content Row -->*/}

                    <div className="row">                            
                            <div className="col-12">                                
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">User registered</h6>
                                        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" 
                                                // onClick={() => {
                                                //                     users.map( user => myCSV.push([user._id, user.Name, user.Surname, user.Email, user.Date])) 
                                                //                     setUsersList(myCSV)  
                                                //     }
                                                // }
                                            >
                                            <i className="fas fa-download fa-sm text-white-50"> </i>                                  
                                            {/* <CSVLink data={usersList} className="text-white">Download Table </CSVLink>             */}
                                        </button>                                        
                                    </div>

                                    <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                            <th>ID</th>
                                            <th>Nome e cognome</th>
                                            <th>E-mail</th>
                                            <th>Date</th>
                                            {/* <th>??</th>
                                            <th>??</th>
                                            <th>??</th> */}
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                            <th>ID</th>
                                            <th>Nome e cognome</th>
                                            <th>E-mail</th>
                                            <th>Date</th>
                                            {/* <th>??</th>
                                            <th>??</th>
                                            <th>??</th> */}
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {/* {
                                                 users.map(        
                                                     (user, countUser) => (<tr key={countUser}>
                                                     <td>{countUser}</td>
                                                     <td> 
                                                         <Link to={`/admin/users/${user._id}`}>{user.Name + " " + user.Surname}</Link> 
                                                     </td> 
                                                     <td>{user.Email}</td>
                                                     <td>{user.Date}</td>
                                                 </tr>))
                                            }                         */}
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Content Row -->*/}

                    <div className="row">                            
                            <div className="col-12">                                
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Projects Registered</h6>
                                        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" 
                                                // onClick={() => {
                                                //                     projects.map( project => projectsCSV.push([project._id, project.Name, project.Description, project.Headquarter, project.Development_Stage, project.Date_Inserted])) 
                                                //                     setProjectsList(projectsCSV)  
                                                //     }
                                                // }
                                            >
                                            <i className="fas fa-download fa-sm text-white-50"> </i>                                  
                                            {/* <CSVLink data={projectsList} className="text-white">Download Table </CSVLink>             */}
                                        </button>                                        
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
                                                    <th>Founder</th>
                                                    <th>Numero Candidati</th>
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
                                                    <th>Founder</th>
                                                    <th>Numero Candidati</th>
                                                    {/* <th>??</th>
                                                    <th>??</th>
                                                    <th>??</th> */}
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {/* {
                                                    projects.map(        
                                                        (project, countProject) => (<tr key={countProject}>
                                                        <td>{countProject}</td>
                                                        <td> 
                                                            <Link to={`/admin/projects/${project._id}`}>{project.Name}</Link> 
                                                        </td>
                                                        <td>{ project.Headquarter }</td>
                                                        <td>{project.Date_Inserted}</td>
                                                    </tr>))
                                                }                         */}
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </LayoutBodyAdmin>                
        </Fragment>
    )
}

DashboardAdmin.propTypes = {
    admin: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
    getProjects: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    admin: state.admin,
    auth: state.authCollaborator,
    project: state.project
})

export default connect(mapStateToProps, {getUsers, getProjects})(DashboardAdmin)