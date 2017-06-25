/**
 * Created by murkrow on 6/17/17.
 */


import {FORM_CHANGE, GET_PROFILE_FROM_LOCAL, REQUEST_SAVE} from "./ProfileActions";
import {combineReducers} from "redux";
import {AsyncStorage} from "react-native";

const formState = {};

const profileReducer = (state = formState, action) => {
    switch (action.type) {
        case REQUEST_SAVE:
            return save(state, action.profile);
        case FORM_CHANGE:
            return onChange(state, action.key, action.value);
        case GET_PROFILE_FROM_LOCAL:
            let result = JSON.parse(action.profile);
            return result.profile;
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
    let result = JSON.stringify(profile);
    AsyncStorage.setItem('profile', result);
    return profile.profile;
};

export default combineReducers({
    profile: profileReducer
});