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
            alert("Đã lưu thành công");
            return save(state, action.profile);
        case FORM_CHANGE:
            return onChange(state, action.key, action.value);
        case GET_PROFILE_FROM_LOCAL:
            return {
                ...state,
                ...action.profile
            };
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
        ...state,
        profile: profile
    };
};

export default combineReducers({
    profile: profileReducer
});