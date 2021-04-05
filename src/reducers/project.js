import {
    GET_PROJECTS,
    PROJECT_ERROR,
    UPDATE_LIKES,
    DELETE_PROJECT,
    ADD_PROJECT,
    GET_PROJECT,
    GET_PROJECTS_SHOWCASE,
    GET_PROJECT_SHOWCASE,
    GET_PROJECTS_OF_THE_USER,
    GET_PROJECT_DEV_STAGES,
    GET_PROJECT_INDUSTRIES,
    ADD_CALL_PROJECT,
    GET_CALLS,
    GET_CALL_INFORMATION,
    GET_USER_CALLS,
    GET_PUBLIC_CALLS,
    GET_OWNER_PROJECT
} from '../actions/types'

const initialState = {
    projects:[],
    call_project: null,
    project: null,
    loading: true,
    industries: [],
    dev_stages: [],
    projectsOfTheUser: [],
    loadingIndustries: true,
    calls:[],
    publicCalls: [],
    loadingPublicCalls: true,
    userCalls: [],
    call: null,
    error: {},
    loadingShowcase: true,
    loadingCall: true,
    loadingUserCalls: true,
    owner: null
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_PROJECT:
            return{
                ...state,
                project: payload,
                loading: false
            };
        case GET_OWNER_PROJECT: 
          return {
            ...state,
            owner: payload,
            loading:false
          }
        case GET_USER_CALLS:
            return{
                ...state,
                userCalls: payload,
                loading: false,
                loadingUserCalls: false
            };
        case GET_PROJECT_SHOWCASE:
            return{
                ...state,
                project: payload,
                loading: false
            };
        case GET_PROJECTS_OF_THE_USER:
            return{
                ...state,
                projectsOfTheUser: payload,
                loading: false
            }
        case GET_PUBLIC_CALLS:
            return {
                ...state,
                publicCalls: payload,
                loadingPublicCalls: false
            }
        case GET_PROJECTS:
            return{
                ...state,
                projects:payload,
                loading: false
            };
        case GET_PROJECTS_SHOWCASE:
            return{
                ...state,
                projects: payload,
                loadingShowcase: false
            };
        case ADD_PROJECT:
            return{
                ...state,
                project: payload,
                loading: false
            };
        case GET_CALLS:
            return{
                ...state,
                calls: payload,
                loading: false
            };
        case GET_CALL_INFORMATION:
            return{
                ...state,
                call: payload,
                loading: false,
                loadingCall: false
            }
        case DELETE_PROJECT:
            return{
                ...state,
                // returns all the projects expect from the one that matches
                projects: state.projects.filter(project => project._id !== payload),
                loading: false
            };
        case ADD_CALL_PROJECT:
            return{
                ...state,
                call_project: payload,
                loading: false
            }
        case PROJECT_ERROR:
            return{
                ...state,
                projects:payload,
                loading: false
            };
        case UPDATE_LIKES:
            return{
                ...state,
                projects: state.projects.map(project => project._id === payload.id ? {...project, likes: payload.likes} : project),
                loading: false
            };
        case GET_PROJECT_INDUSTRIES:
            return{
                ...state,
                industries: payload,
                loadingIndustries: false
            };
        default:
            return state;
    }
}