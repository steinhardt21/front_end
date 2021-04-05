import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    GET_PROFILES,
    GET_INDUSTRIES_PROFILE
  } from '../actions/types';
  
  const initialState = {
    profile: null,
    industries: [],
    profiles: [],
    loading: true,
    loadingIndustries: true,
    error: {}
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PROFILE:
      case UPDATE_PROFILE:
        return {
          ...state,
          profile: payload,
          loading: false
        };
      case GET_INDUSTRIES_PROFILE:
        return{
          ...state,
          industries: payload,
          loadingIndustries: false
        }
      case GET_PROFILES:
          return{
            ...state,
            profiles: payload,
            loading: false
          }
      case PROFILE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          profile: null
        };
      case CLEAR_PROFILE:
        return{
          ...state,
          profile: null,
          loading: false,
          industries: []
        };
      default:
        return state;
    }
  }