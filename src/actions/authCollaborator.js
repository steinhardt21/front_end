import axios from 'axios'
import {setAlert} from './alert'

import {
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_SUCCESS,
    LOGOUT_ADMIN,
    ADMIN_LOADED,
    ADMIN_AUTH_ERROR
} from './types'


// Load Admin
export const loadCollaborator = () => async dispatch => {
    try{
        console.log("collaborator 1 - load")

        const res = await axios.get('/api/admin/auth')

        console.log("collaborator 2")

        dispatch({
            type: ADMIN_LOADED,
            payload: res.data
        })
    }catch (err){
        dispatch({
            type: ADMIN_AUTH_ERROR
        })
    }
}


//Login Admin
export const loginAdmin = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    console.log("GOOOOOOOD")
    const body = JSON.stringify({email, password})

    try{

        const res = await axios.post('/api/admin/auth', body, config)
        
        console.log("MY toooooooken " + res.data)
        //console.log(res.data)

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: res.data
        })
        
        console.log("tokeeeeeeeeeen")
       // console.log(res.data)
        console.log("control")

        dispatch(loadCollaborator())

    }catch(err){
        
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: ADMIN_LOGIN_FAIL
        })
    }
}



//Register 
 export const registerAdmin = ({name, email, password}) => async dispatch => {
     const config = {
         headers: {
             'Content-Type': 'application/json'
         }
     }
     const body = JSON.stringify({name, email, password})

     try { 
         const res = await axios.post('/api/admin/register', body, config)
    
        //  dispatch({
        //      type: REGISTER_SUCCESS,
        //      payload: res.data
        //  })

        //  dispatch(loadCollaborator())
         
     }catch(err) {

         const errors = err.response.data.errors;
         if(errors){
             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
         }

         dispatch({
            // type: REGISTER_FAIL
         })
     }
 }



//Logout / Clear Profile
export const logout = () => dispatch => 
{
    dispatch({type:LOGOUT_ADMIN})
}