/**
 * Created by murkrow on 6/17/17.
 */


import {REQUEST_SAVE} from "./ProfileActions";
import {combineReducers} from "redux";

const formState = {};

const profileReducer = (state = formState, action) => {
    switch (action.type) {
        case REQUEST_SAVE:
            alert('Hello World');
            return {
                ...state
            };
        default:
            return state;
    }
};

export default combineReducers({
    profile: profileReducer
});