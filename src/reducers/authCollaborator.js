import {
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_SUCCESS,
    LOGOUT_ADMIN,
    ADMIN_LOADED,
    ADMIN_AUTH_ERROR
} from '../actions/types'


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    collaborator: null
} 

export default function(state = initialState, action)
{
    const{type, payload} = action;

    switch(type)
    {
        case ADMIN_LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case ADMIN_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                collaborator: payload
            }
        case ADMIN_LOGIN_FAIL:
        case ADMIN_AUTH_ERROR:
        case LOGOUT_ADMIN:
            localStorage.removeItem('token')

            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}