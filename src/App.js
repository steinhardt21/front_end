import React, {Fragment, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



// import Alert from './components/layout/Alert'

import PrivateRoute from './components/routing/PrivateRoute'
import AdminRoute from './components/routing/AdminRoute'


// CLIENT - NEW VERSION
import DashboardUser from './client/scenes/Dashboard/Dashboard'
import CreateProfileUser from './client/scenes/Profile/scenes/CreateProfile/CreateProfile'
import CreateProjectUser from './client/scenes/Project/scenes/CreateProject/CreateProject'
import SignUser from './client/scenes/Sign/Sign'
import UserListProjects from './client/scenes/Project/scenes/ProjectsOfTheUser/ProjectsOfTheUser'
import CreateCandidature from './client/scenes/Project/scenes/CreateCandidature/CreateCandidature'
import ListProjects from './client/scenes/Project/scenes/ListProjectsPlatform/ListProjectsPlatform'
import Landing from './client/scenes/Landing/Landing'
import CallView from './client/scenes/Project/scenes/CallView/CallView'
import MotivationalLetter from './client/scenes/Project/scenes/MotivationalLetter/MotivationalLetter'
import UserListCandidacies from './client/scenes/Candidature/scenes/CandidaciesOfTheUser/CandidaciesOfTheUser'
import ListCandidatesCall from './client/scenes/Candidature/scenes/CandidatesForCall/CandidatesForCall'
import UpdateCandidature from './client/scenes/Candidature/scenes/UpdateCandidature/UpdateCandidature'
import AboutUs from './client/scenes/AboutUs/AboutUs'
import ListCallPublic from './client/scenes/Landing/ListCallPublic'
import ResetPassword from './client/scenes/Sign/ResetPassword'
import ResetPasswordConferma from './client/scenes/Sign/ResetPasswordConferma'

//Redux
import {Provider} from 'react-redux'
import store from './store'
import { loadUser} from './actions/auth'
import {loadCollaborator} from './actions/authCollaborator'
import setAuthToken from './utils/setAuthToken' 

// Header
import LayoutAdmin from './admin/components/LayoutAdmin'

// Admin 
import DashboardAdmin from './admin/scenes/Dashboard/DashboardAdmin'
import LoginAdministrator from './admin/scenes/Sign/scenes/Login/LoginAdministrator'
import RegisterAdministrator from './admin/scenes/Sign/scenes/Register/RegisterAdminstrator'
import DetailUserAdministrator from './admin/scenes/Analysis/scenes/UserDetail/UserDetail'
import DetailProjectAdministrator from './admin/scenes/Analysis/scenes/ProjectDetail/ProjectDetail'
import ManagePosition from './admin/scenes/Utilities/scenes/ManagePosition/ManagePosition'
import ManageIndustry from './admin/scenes/Utilities/scenes/ManageIndustry/ManageIndustry'
import ManageDevelopmentStage from './admin/scenes/Utilities/scenes/ManagementDevStage/ManagementDevStage'
import ManageAnalysisQuestion from './admin/scenes/Utilities/scenes/ManageAnalysisQuestions/ManageAnalysisQuestion'
import ApproveProject from './admin/scenes/Projects/scenes/ApproveProject/ApproveProject'
import ProjectDetailApprovation from "./admin/scenes/Projects/scenes/ApproveProject/ProjectDetailApprovation";
import DownloadDocuments from './admin/scenes/DownloadDocuments/DonwnloaDocuments'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from './client/scenes/NotFound/NotFound';
import AboutUsPrivate from './client/scenes/AboutUs/AboutUsPrivate';


const App = () => 
{
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
    store.dispatch(loadCollaborator());

  }, [])
  
  //Source: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
  <Provider store = {store}>
    <Router>
      <Fragment>        
            {/* <Alert /> */}
            <Switch>
                <Route exact path="/" component={Landing}/>
              
                {/**Client new pages */}
                  <PrivateRoute exact path="/create-profile/:id?" component={CreateProfileUser} />
                  <PrivateRoute exact path="/dashboard" component={DashboardUser} />
                  <PrivateRoute exact path="/create-project" component={CreateProjectUser} />
                  <PrivateRoute exact path="/personal-list-projects" component={UserListProjects} />
                  <PrivateRoute exact path="/create-candidature/:id" component={CreateCandidature} />
                  <PrivateRoute exact path="/list-projects" component={ListProjects} />
                  <PrivateRoute exact path="/view-call/:id" component={CallView} />
                  <PrivateRoute exact path="/call/motivational-letter/:id" component={MotivationalLetter} />
                  <PrivateRoute exact path="/personal-list-candidacies" component={UserListCandidacies} />
                  <PrivateRoute exact path="/list-candidate/call/:id" component={ListCandidatesCall} />
                  <PrivateRoute exact path="/call/update-motivational-letter/:id" component={UpdateCandidature} />
                  <PrivateRoute exact path="/call/come-funziona-privata" component={AboutUsPrivate} />

                  <Route exact path="/reset-password" component={ResetPassword} />
                  <Route exact path="/reset-password-conferma" component={ResetPasswordConferma} />

                  <Route exact path="/sign/:id?" component={SignUser} />
                  <Route exact path="/come-funziona" component={AboutUs} />
                  <Route exact path="/list-calls" component={ListCallPublic} />

                {/* Admin section */}
                      <AdminRoute exact path="/admin/dashboard" component={DashboardAdmin} />            
                      <Route exact path="/admin/login" component={LoginAdministrator} />
                      <Route exact path="/admin/register" component={RegisterAdministrator} />
                      <AdminRoute exact path="/admin/users/:id" component={DetailUserAdministrator} />
                      <AdminRoute exact path="/admin/projects/:id" component={DetailProjectAdministrator} />

                      {/* Utilities */}
                            {/* <AdminRoute exact path="/admin/projects/:id" component={DetailProjectAdministrator} />   */}
                            <AdminRoute exact path="/admin/manage/position" component={ManagePosition} />
                            <AdminRoute exact path="/admin/manage/industry" component={ManageIndustry} />
                            <AdminRoute exact path="/admin/manage/development-stage" component={ManageDevelopmentStage} />
                            <AdminRoute exact path="/admin/manage/analysis-question" component={ManageAnalysisQuestion} />
                      {/* Utilities */}

                      {/**Management projects */}
                        <AdminRoute exact path="/admin/project/acceptance" component={ApproveProject} />
                        <AdminRoute exact path="/admin/project/acceptance/:id" component={ProjectDetailApprovation} />
                        <AdminRoute exact path="/admin/download-documents" component={DownloadDocuments} />
                      {/**Management projects */}

                {/* Admin section */}


                {/* Not found - 404 */}
                <Route component={NotFound} />

            </Switch>
          
            {/* <Footer /> */}
      </Fragment>
    </Router>

  
    

</Provider>)}

export default App;
