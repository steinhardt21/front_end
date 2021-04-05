import {
    GET_USER,
    USER_ERROR,
    SAVE_CONTACT_USER
} from '../actions/types'

const initialState = {
    error:{},
    loading: true,
    user: null,
    users: [],
    usercontact: null
}

export default function(state = initialState, action) {
  const{type, payload} = action

  switch(type){
    case GET_USER:
      return {
        ...state,
        users: [payload, ...state.users],
        loading: false
      }
  case USER_ERROR:
    return {
      ...state,
      loading: false,
      users: payload
    }
  case SAVE_CONTACT_USER: 
    return {
      ...state,
      usercontact: payload
    }
  default:
    return state;
  }
}
