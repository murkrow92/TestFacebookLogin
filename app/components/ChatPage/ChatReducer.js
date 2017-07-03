/**
 * Created by murkrow on 7/3/17.
 */


import {combineReducers} from "redux";
import {FETCH_CONSERVATION} from "./ChatActions";

const chatReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CONSERVATION:
            console.log(action);
            return {
                ...state,
                ...action.notifications.data
            };
        default:
            return state;
    }
};


export default combineReducers({
    conservation: chatReducer
});