import {SET_ALERT, REMOVE_ALERT} from "../actions/types"

const initialState = []

export default function(state = initialState, action){

    const {type, payload} = action

    switch(type)
    {
        case SET_ALERT: 
            return [...state, payload]; // in this way we add the new allert in the queue
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}