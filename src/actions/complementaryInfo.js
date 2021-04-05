import axios from 'axios'

import {
    GET_POSITIONS_USER,
    COMPLEMENTARYINFO_ERROR,
    GET_INDUSTRIES_USER,
    GET_DEV_STAGES,
    GET_ANALYSIS_QUESTIONS_PROJECT
} from './types';
import {setAlert} from './alert'

//Get all the positions
export const getAllPositions = () => async dispatch => {
    try{
        const res = await axios.get('/api/users/positions');
        dispatch({type: GET_POSITIONS_USER, payload: res.data});
    }
    catch(err)
    {
        const errors = err.response.data.errors;
        //Show the errors
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({type: COMPLEMENTARYINFO_ERROR, payload: { msg: err.response.statusText, status: err.response.status}});
    }
}

//Get all the industries available
export const getAllIndustries = () => async dispatch => {
    try{
        const res = await axios.get('/api/users/industries');
        dispatch({type: GET_INDUSTRIES_USER, payload: res.data})
    }
    catch(err)
    {
       const errors = err.response.data.errors;

       //Show the errors
       if(errors){errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))}
       dispatch({type: COMPLEMENTARYINFO_ERROR, payload: { msg: err.response.statusText, status: err.response.status}});
    }
}

export const getAllDevelopmentStages = () => async dispatch => {
    try{
        const res = await axios.get('/api/users/dev-stages');
        dispatch({type: GET_DEV_STAGES, payload: res.data})
    }
    catch(err){
        const errors = err.response.data.errors;

       //Show the errors
       if(errors){errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))}
       dispatch({type: COMPLEMENTARYINFO_ERROR, payload: { msg: err.response.statusText, status: err.response.status}});
    }
}

export const getAllAnalysisQuestions = () => async dispatch => {
    try{
        const res = await axios.get('/api/users/analysis-questions');
        dispatch({type: GET_ANALYSIS_QUESTIONS_PROJECT, payload: res.data})
    }
    catch(err){
        const errors = err.response.data.errors;

        //Show the errors
        if(errors){errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))}
        dispatch({type: COMPLEMENTARYINFO_ERROR, payload: { msg: err.response.statusText, status: err.response.status}});
    }
}

