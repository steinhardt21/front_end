/**
 * The calls used to make for the admin
 */

 import axios from 'axios'
 import {
    GET_CALLS_GENERAL_DATA,
    GET_USERS,
    GET_USERS_GENERAL_DATA,
    ADMIN_ERROR,
    ADD_POSITION,
    GET_POSITIONS,
    ADD_INDUSTRY,
    GET_INDUSTRIES,
    GET_DEV_STAGES,
    ADD_DEV_STAGE,
    ADD_ANALYSIS_QUESTION,
    GET_ANALYSIS_QUESTIONS,
    GET_PENDING_PROJECTS,
    UPDATE_STATE_PROJECT,
    GET_CANDIDATURES_GENERAL_DATA
 } from './types'
 import {setAlert} from './alert'

export const updateStateProject = (newState, id, history) => async dispatch => {
  try {
    const config = {
      headers: {'Content-Type':'application/json'}
    }
    console.log('update', newState)
    const data = {'stato': newState}
    const res = await axios.post(`/api/admin/updatestateproject/${id}`, data, config)

    dispatch({
      type: UPDATE_STATE_PROJECT,
      payload: res.data
    })

    history.push('/admin/project/acceptance')
  } catch (err) {
    dispatch({
        type: ADMIN_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

 //Get the users
 export const getUsers = () => async dispatch => {
     try{
        console.log('error --- new')
         const res = await axios.get('/api/admin/users')
         
         dispatch({
             type: GET_USERS,
             payload: res.data
         })
     }
     catch(err)
     {
         dispatch({
             type: ADMIN_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
         })
     }
 } 

 export const getUsersGeneralData = () => async dispatch => {
    try{
         const res = await axios.get('/api/admin/usersdata')
         console.log('Data user', res)
         dispatch({
             type: GET_USERS_GENERAL_DATA,
             payload: res.data
         })
     }
     catch(err)
     {
         dispatch({
             type: ADMIN_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
         })
     }
 } 

 export const getCallData = () => async dispatch => {
    try{
         const res = await axios.get('/api/admin/callsdata')
         dispatch({
             type: GET_CALLS_GENERAL_DATA,
             payload: res.data
         })
     }
     catch(err)
     {
         dispatch({
             type: ADMIN_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
         })
     }
 } 

 export const getCandidaturesData = () => async dispatch => {
    try{
        console.log('getCandidaturesData')
        const res = await axios.get('/api/admin/candidatures-data')
        dispatch({
            type: GET_CANDIDATURES_GENERAL_DATA,
            payload: res.data
        })
    }
    catch(err)
    {
        dispatch({
            type: ADMIN_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
 } 


 export const addPosition = (newPosition) => async dispatch => {
        
    const data = {data: newPosition}
    /**
     * NOTE: 
     * 
     *  POST requests MUST BE JSON TYPE!
     */

    const config = {
        headers: {'Content-Type':'application/json'}
    }

    try{
        const res = await axios.post(`/api/admin/position`, data, config);

        dispatch({
            type: ADD_POSITION,
            payload: res.data
        })
    }
    catch(err)
    {
        const errors = err.response.data.errors;

        //Show the errors
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
             type: ADMIN_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
 }

 export const getPositions = () => async dispatch => {
     try{
         const res = await axios.get('/api/admin/position');

         dispatch({
             type: GET_POSITIONS,
             payload: res.data
         })
     }
     catch(err)
     {
        const errors = err.response.data.errors;

        //Show the errors
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
             type: ADMIN_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
        });
     }
 }


 export const addIndustry = (newIndustry) => async dispatch => {
        
    const data = {data: newIndustry}
    /**
     * NOTE: 
     * 
     *  POST requests MUST BE JSON TYPE!
     */

    const config = {
        headers: {'Content-Type':'application/json'}
    }

    try{
        const res = await axios.post(`/api/admin/industry`, data, config);

        dispatch({
            type: ADD_INDUSTRY,
            payload: res.data
        })
    }
    catch(err)
    {
        const errors = err.response.data.errors;

        //Show the errors
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
             type: ADMIN_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
 }

 export const getIndustries = () => async dispatch => {
    try{
        const res = await axios.get('/api/admin/industry');

        dispatch({
            type: GET_INDUSTRIES,
            payload: res.data
        })
    }
    catch(err)
    {
       const errors = err.response.data.errors;

       //Show the errors
       if(errors){
           errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
       }

       dispatch({
            type: ADMIN_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
       });
    }
}


export const addDevStage = (newDevStage) => async dispatch => {
        
    const data = {data: newDevStage}
    /**
     * NOTE: 
     * 
     *  POST requests MUST BE JSON TYPE!
     */

    const config = {
        headers: {'Content-Type':'application/json'}
    }

    try{
        const res = await axios.post(`/api/admin/devstage`, data, config);

        dispatch({
            type: ADD_DEV_STAGE,
            payload: res.data
        })
    }
    catch(err)
    {
        const errors = err.response.data.errors;

        //Show the errors
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
             type: ADMIN_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
 }

 export const getDevStage = () => async dispatch => {
    try{
        const res = await axios.get('/api/admin/devstage');

        dispatch({
            type: GET_DEV_STAGES,
            payload: res.data
        })
    }
    catch(err)
    {
       const errors = err.response.data.errors;

       //Show the errors
       if(errors){
           errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
       }

       dispatch({
            type: ADMIN_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
       });
    }
}

export const getPendingProjects = () => async dispatch => {
    try{
        const res = await axios.get('/api/admin/projects/pending')

        dispatch({
          type: GET_PENDING_PROJECTS,
          payload: res.data
        })
    }
    catch(err) {
      const errors = err.response.data.errors
      //Show the errors
      if(errors){
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: ADMIN_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const getAnalysisQuestions = () => async dispatch => {
    try{
        const res = await axios.get('/api/admin/analysis-question');

        dispatch({
            type: GET_ANALYSIS_QUESTIONS,
            payload: res.data
        })
    }
    catch(err)
    {
       const errors = err.response.data.errors;

       //Show the errors
       if(errors){
           errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
       }

       dispatch({
            type: ADMIN_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
       });
    }
}

export const addAnalysisQuestion = (newAnalysisQuestion) => async dispatch => {
        
  const data = {
    question: newAnalysisQuestion.question, 
    question_exposed: newAnalysisQuestion.question_exposed
  }
    /**
     * NOTE: 
     * 
     *  POST requests MUST BE JSON TYPE!
     */

    const config = {
        headers: {'Content-Type':'application/json'}
    }

    try{
        const res = await axios.post(`/api/admin/analysis-question`, data, config);

        dispatch({
            type: ADD_ANALYSIS_QUESTION,
            payload: res.data
        })
    }
    catch(err)
    {
        const errors = err.response.data.errors;

        //Show the errors
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
             type: ADMIN_ERROR,
             payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
 }