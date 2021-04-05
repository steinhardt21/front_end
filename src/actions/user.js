import axios from 'axios'
import {setAlert} from './alert'

import {
    GET_USER,
    USER_ERROR,
    SAVE_CONTACT_USER
} from './types'

const config = { headers: {'Content-Type' : 'application/json'}}

export const getUser = userId => async dispatch => {
    try {
        // console.log(userId)
        const res = await axios.get(`/api/users/${userId}`)

        dispatch({
            type:GET_USER,
            payload: res.data
        })
    } catch(err)
    {
        dispatch({
            type: USER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
          });
    }
}

export const registerEmailUser = (contactUser) => async dispatch => {
  try{
    const response = await axios.post('/api/users/contactuser', contactUser, config)
    dispatch({
      type: SAVE_CONTACT_USER,
      payload: response.data
    })  
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    })
  }
}