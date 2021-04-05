import axios from 'axios'
import {setAlert} from './alert'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_UPDATED,
    USER_ERROR
} from './types'


// Load User
export const loadUser = () => async dispatch => {
     try{
        const res = await axios.get('/api/auth')

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    }catch(err){

        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const updateUser = (formData) => async dispatch => {
    try{
        console.log(formData)
        const config = {headers:{'Content-Type' : 'application/json'}}
        const res = await axios.post('/api/users/update', formData, config)
        console.log('res ' + res)

        dispatch({type: USER_UPDATED, payload: res.data})
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){ errors.forEach(error => dispatch(setAlert(error.msg,'danger')))}

        dispatch({type: USER_ERROR,
        payload:{msg: err.response.statusText, status: err.response.status}})
    }
}

//Register User
export const register = ({Name , Surname, EmailRegister, Password_1, history}, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({Name, Surname, EmailRegister, Password_1})

    console.log("Registration ----")
    console.log(body)

    try { 
        const res = await axios.post('/api/users', body, config)
    
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())

        if(id !== undefined){history.push(`/newversion/create-profile/${id}`)}
        else{history.push(`/newversion/create-profile`)}
        // history.push(`/newversion/list-projects/${id}`)
        
    }catch(err) {

        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: REGISTER_FAIL
        })
    }
}

//Login User
export const login = (email, password, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password})

    try { 
        const res = await axios.post('/api/auth', body, config)
    
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())

        
    }catch(err) {

        // const errors = err.response.data.errors;
        console.log(err)
        // if(errors){
        //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        // }

        dispatch({
            type: LOGIN_FAIL
        })
    }
}

//Logout / Clear Profile
export const logout = () => dispatch => 
{
    dispatch({type:LOGOUT})
}
