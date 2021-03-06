import axios from 'axios'
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_PROFILES,
  CLEAR_PROFILE,
  GET_INDUSTRIES_PROFILE
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    
  
  try {
    
    const res = await axios.get('/api/profile/me')
    
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    
  } catch (err) {
        console.log(err)
     dispatch({
       type: PROFILE_ERROR,
       payload: { msg: err.response.statusText, status: err.response.status }
     });
  }
};

//Get all profiles
export const getProfiles  = () => async dispatch => {

  dispatch({type: CLEAR_PROFILE}); // To clean before to see the other profiles

  try {
    
    const res = await axios.get('/api/profile')

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get Industry User by Profile ID
export const getProfileIndustries = profileId => async dispatch => {
  try{
    const res = await axios.get(`/api/profile/industry/${profileId}`)
    dispatch({type: GET_INDUSTRIES_PROFILE, payload: res.data})
  }
  catch(err) {
    dispatch({type: PROFILE_ERROR,payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

//Get profile by ID
export const getProfileById  = userId => async dispatch => {

  try {    
    const res = await axios.get(`/api/profile/user/${userId}`)
    console.log(res)
    
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const createProfile = (
  formData,
  history,
  id
) => async dispatch => {
  try {

    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    console.log('Data that are sent ')
    console.log(formData)
    //make the request
    const res = await axios.post('/api/profile', formData, config)

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    // dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    // if (!edit) {
      console.log('CREATE PROFILE', id)
     
      if(id !== undefined)
      {
        if(id === 'create-project') {
          history.push('/create-project')
        }
        else {
          history.push(`/view-call/${id}`)
        }
      }
      else 
      {
        history.push('/dashboard')
      }
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete account & profile

