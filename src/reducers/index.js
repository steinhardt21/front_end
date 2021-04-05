import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import profile from './profile'
import project from './project'
import candidacy from './candidacy'
import user from './user'
import admin from './admin'
import authCollaborator from './authCollaborator'
import complementaryInfo from './complementaryInfo'
import projectInformation from './projectInformation'

export default combineReducers({
  alert,
  auth,
  profile,
  project,
  candidacy,
  user,
  admin,
  authCollaborator,
  complementaryInfo,
  projectInformation
});