import {
    CREATE_CANDIDACY,
    CANDIDACY_ERROR,
    GET_CANDIDATES,
    UPDATE_STATUS_CANDIDACY,
    GET_CANDIDATURES_USER,
    GET_CANDIDACIES_OF_THE_USER,
    GET_CANDIDATES_CALL,
    GET_CANDIDATURE,
    UPDATE_CANDIDACY,
    UPDATE_STATUS_CANDIDACY_BY_OWNER,
    GET_CANDIDATES_CALL_SUMMARY
} from '../actions/types'

const initialState = {
    candidacy: null,
    candidacies: [],
    userCandidacies: [],
    candidatesProject: [],
    candidature: null,
    loading: true,
    error: {},
    userCandidaciesLoading: true,
    candidatesProjectLoading: true,
    candidacyLoading: true,
    loadingUpdateStatus: true,
    candidatesSummary: [],
    loadCandidatesSummary: true
}

export default function(state = initialState, action) {
    const{type, payload} = action

    switch(type){
        case CREATE_CANDIDACY:
            return {
                ...state,
                candidacy: payload,
                loading: false
            };
            case GET_CANDIDATES_CALL_SUMMARY:
                return{
                    ...state,
                    candidatesSummary: [...state.candidatesSummary, payload],
                    loadCandidatesSummary: false
                };
            case CANDIDACY_ERROR:
                return{
                    ...state,
                    candidacies:null,
                    loading: false
                };
            case GET_CANDIDACIES_OF_THE_USER:
                return{
                    ...state,
                    loading: false,
                    userCandidaciesLoading: false,
                    userCandidacies: payload
                };
            case UPDATE_STATUS_CANDIDACY_BY_OWNER:
                return {
                    ...state,
                    loading: false,
                    candidacy: payload,
                    loadingUpdateStatus: false
                };
            case GET_CANDIDATES_CALL:
                return{
                    ...state,
                    candidatesProject: payload,
                    candidatesProjectLoading: false,
                    loading: false
                };
            case GET_CANDIDATES:
                return{
                    ...state,
                    candidacies:payload,
                    loading: false
                };
            case UPDATE_STATUS_CANDIDACY:
                return{
                    ...state, 
                    candidacy: payload,
                    loading: false
                };
            case GET_CANDIDATURE:
                return {
                    ...state,
                    candidature: payload,
                    candidacyLoading: false
                };
            case UPDATE_CANDIDACY:
                return {
                    ...state,
                    candidature: payload,
                    candidacyLoading: false
                }
            case GET_CANDIDATURES_USER:
                return{
                    ...state,
                    candidacies: payload,
                    loading: false
                };
            default:
                return state;
    }
} 