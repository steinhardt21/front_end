import {
    ADMIN_ERROR,
    GET_USERS_GENERAL_DATA,
    GET_CALLS_GENERAL_DATA,
    GET_USERS,
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
} from '../actions/types'

const initialState = {
    usersGeneralData: [],
    users: [],
    loading: true,
    positions: [],
    industries: [],
    dev_stages:[],
    analysis_questions:[],
    error: {},
    pendingProjects: [],
    callsGeneralData: [],
    candidaturesGeneralData: [],
    loadingPendingProjects: true
}

export default function (state = initialState, action)
{
    const{type, payload} = action
    
    switch(type){
        case GET_USERS:
            return{
                ...state,
                users: payload,
                loading: false
            };
        case ADMIN_ERROR:
            return{
                ...state,
                users: null, 
                loading: false
            };
        case GET_POSITIONS:
            return {
                ...state,
                positions: payload,
                loading: false
            };
        case GET_INDUSTRIES:
            return{
                ...state,
                industries: payload,
                loading: false
            };
        case GET_PENDING_PROJECTS:
            return {
              ...state,
              pendingProjects: payload,
              loadingPendingProjects: false
            };
        case ADD_POSITION:
            return{
                ...state,
                positions: [payload, ...state.positions],
                loading: false
            };
        case ADD_INDUSTRY:
            return{
                ...state,
                industries: [payload, ...state.industries],
                loading: false
            };
        case GET_DEV_STAGES:
            return{
                ...state,
                dev_stages: payload,
                loading: false
            };
        case ADD_DEV_STAGE:
            return{
                ...state,
                dev_stages: [payload, ...state.dev_stages],
                loading: false
            };
        case ADD_ANALYSIS_QUESTION:
            return{
                ...state,
                analysis_questions:[payload, ...state.analysis_questions],
                loading:false
            };
        case GET_ANALYSIS_QUESTIONS:
            return{
                ...state,
                analysis_questions: payload,
                loading: false
            }
        case GET_USERS_GENERAL_DATA:
            return{
                ...state,
                usersGeneralData: payload,
                loading: false
            }
        case GET_CALLS_GENERAL_DATA:
            return {
                ...state,
                callsGeneralData: payload,
                loading: false
            }
        case GET_CANDIDATURES_GENERAL_DATA:
            return {
                ...state,
                candidaturesGeneralData: payload,
                loading: false
            }
        case UPDATE_STATE_PROJECT:
          return {
            ...state,
            loading: false
          }
        default: 
            return state;
    };
}