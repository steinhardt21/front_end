import {
    GET_POSITIONS_USER,
    COMPLEMENTARYINFO_ERROR,
    GET_INDUSTRIES_USER,
    GET_DEV_STAGES,
    GET_ANALYSIS_QUESTIONS_PROJECT
} from '../actions/types'

const initialState = {
    positions: [],
    industries: [],
    dev_stages:[],
    loading: true,
    analysis_questions: [],
    error: {}
}

export default function(state = initialState, action) {
    const{type, payload} = action;

    switch(type){
        case GET_POSITIONS_USER:
            return{
                ...state,
                positions: payload,
                loading: false
            };
        case GET_INDUSTRIES_USER:
            return{
                ...state,
                industries: payload,
                loading:false
            };
        case GET_DEV_STAGES:
            return{
                ...state,
                dev_stages: payload,
                loading:false
            };
        case COMPLEMENTARYINFO_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
                positions: null,
                industries: null
            };
        case GET_ANALYSIS_QUESTIONS_PROJECT:
            return{
                ...state,
                analysis_questions: payload,
                loading:false
            };
        default:
            return state;
    }
}