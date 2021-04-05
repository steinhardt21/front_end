import axios from 'axios'
import { setAlert } from './alert';

import {
    CREATE_CANDIDACY,
    CANDIDACY_ERROR,
    GET_CANDIDATES,
    UPDATE_STATUS_CANDIDACY_BY_OWNER,
    GET_CANDIDATURES_USER,
    GET_CANDIDACIES_OF_THE_USER,
    GET_CANDIDATURE,
    UPDATE_CANDIDACY,
    GET_CANDIDATES_CALL,
    UPDATE_STATUS_CANDIDACY,
    GET_CANDIDATES_CALL_SUMMARY
} from './types';

// User evaluate candidature for the call
export const updateCallStatus = (formData) => async dispatch =>{
    const config = { headers: {'Content-Type' : 'application/json'}}
    
    
    try{
        console.log('formdata', formData)
        const res = await axios.post(`/api/candidacy/update/status`, formData, config)
        dispatch({
            type: UPDATE_STATUS_CANDIDACY_BY_OWNER,
            payload: res.data
        }) 
    }catch(err){
        dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

// Update candidature by id
export const updateCandidature = (formData) => async dispatch => {
    const config = { headers: {'Content-Type' : 'application/json'}}

    console.log('formdata', formData)
    try{
        const res = await axios.post(`/api/candidacy/update`, formData, config)
 
        dispatch({
            type: UPDATE_CANDIDACY,
            payload: res.data
        }) 
    }catch(err)
    {
        dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}


// Get a candidature by Id
export const getCandidature = candidatureId => async dispatch => {
    try{
        const res = await axios.get(`/api/candidacy/usercandidature/${candidatureId}`)

        dispatch({
            type: GET_CANDIDATURE,
            payload: res.data
        })
    }catch(err){

        dispatch({
           type: CANDIDACY_ERROR,
           payload: { msg: err.response.statusText, status: err.response.status }
         });
   }
}

//Get the candidates for a certain project
export const getCandidatesCall = callId => async dispatch =>{
    try{
            const res = await axios.get(`/api/candidacy/users/${callId}`)

            dispatch({
                type: GET_CANDIDATES_CALL,
                payload: res.data
            })
    } 
    catch(err){

         dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

//Get all (accepter, not accepted, waiting) the candidates for a certain project
export const getCandidatesCallSummary = callId => async dispatch =>{
    try{
            const res = await axios.get(`/api/candidacy/users/summary/${callId}`)

            console.log('res')
            console.log(res.data)

            dispatch({
                type: GET_CANDIDATES_CALL_SUMMARY,
                payload: res.data
            })
    } 
    catch(err){

         dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

//Get the candidatures of the user
export const getCandidaturesOfTheUser = () => async dispatch => {
    try{
        const res = await axios.get('/api/candidacy/user')

        dispatch({
            type: GET_CANDIDACIES_OF_THE_USER,
            payload: res.data
        })
    }
    catch(err){

        dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Create candidature
export const createCandidature = (formData) => async dispatch => {

    const config = { headers: {'Content-Type' : 'application/json'}}
    
    try{ 
        
        console.log('***10', formData)
        const res = await axios.post(`/api/candidacy`, formData, config)
 
        dispatch({
            type: CREATE_CANDIDACY,
            payload: res.data
        }) 
    }
    catch(err)
    {
        dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

// Create a candidacy
export const createCandidacy = (id, stato, history) => async dispatch =>{

    const data = {id, stato}
    
    // console.log(id)
    // console.log(stato)
    // console.log(data.id)
    // console.log(data.stato)
    try{

        const config = {
            headers: {'Content-Type' : 'application/json'}
        }

        const res = await axios.post(`/api/candidacy`, data, config)

        dispatch({
            type: CREATE_CANDIDACY ,
            payload: res.data
        })

        dispatch(setAlert('Candidatura registrata','success'))

        history.push('/dashboard')

    }catch(err)
    {
        dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });        
    }
}

//Get candidates for a specific project
export const getCandidates = candidateId => async dispatch => {
    try {

        // console.log(candidateId)
        const res = await axios.get(`/api/candidacy/${candidateId}`)

        dispatch({
            type: GET_CANDIDATES,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

//Change status candidacy
export const changeStatusCandidacy = (candidacyId, new_status) => async dispatch => {
    try {

        console.log(candidacyId)
        console.log(new_status)

        const data = {candidacyId, new_status}
        const config = {
            headers: {'Content-Type' : 'application/json'}
        }
        const res = await axios.post("/api/candidacy/update_status", data, config)
        
        dispatch({
            type: UPDATE_STATUS_CANDIDACY ,
            payload: res.data
        })

    }catch(err)
    {
        dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });        
    }
}

//Get the projects where the user is candidate 
export const getCandidaturesUser = () => async dispatch => {
    try {

        console.log("hello")
        // console.log(candidateId)
        const res = await axios.get(`/api/candidacy/candidatures_user`)

        dispatch({
            type: GET_CANDIDATURES_USER,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: CANDIDACY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}