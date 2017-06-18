/**
 * Created by murkrow on 6/17/17.
 */


import {FORM_CHANGE, REQUEST_SAVE} from "./ProfileActions";
import {combineReducers} from "redux";

const formState = {};

const profileReducer = (state = formState, action) => {
    switch (action.type) {
        case REQUEST_SAVE:
            return save(state ,action.profile);
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

const save = (state, profile) => {
    return {
        profile
    };
};

export default combineReducers({
    profile: profileReducer
});