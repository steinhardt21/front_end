import{
    GET_PROJECT_INDUSTRY,
    PROJECT_INFO_ERROR
} from '../actions/types'


const initialState = {
    industry: null,
    loading: true,
    error:{}
}

export default function(state = initialState, action){
    const{type, payload} = action;

    switch(type){
        case GET_PROJECT_INDUSTRY:
            return{
                ...state,
                industry: payload,
                loading: false
            };
        case PROJECT_INFO_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}