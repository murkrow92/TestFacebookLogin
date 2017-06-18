/**
 * Created by murkrow on 6/17/17.
 */


import {FORM_CHANGE, REQUEST_SAVE} from "./ProfileActions";
import {combineReducers} from "redux";

const formState = {};

const profileReducer = (state = formState, action) => {
    switch (action.type) {
        case REQUEST_SAVE:
            alert('Hello World');
            return {
                ...state
            };
        case FORM_CHANGE:
            return onChange(state, action.key, action.value);
        default:
            return state;
    }
};

const onChange = (state, key, value) => {
    return {
        ...state,
        [key]: value
    };
};

export default combineReducers({
    profile: profileReducer
});