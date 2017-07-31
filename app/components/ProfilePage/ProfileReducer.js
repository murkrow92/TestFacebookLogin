/**
 * Created by murkrow on 6/17/17.
 */


import {
    ACTION_FETCH_PROFILE_SUCCESS,
    ACTION_FORM_DATA_CHANGE,
    ACTION_LOAD_SAVED_PROFILE,
    ACTION_SAVE_SUCCESS
} from "./ProfileActions";
import {combineReducers} from "redux";
import {AsyncStorage} from "react-native";

const formState = {};

const profileReducer = (state = formState, action) => {
    switch (action.type) {
        case ACTION_SAVE_SUCCESS:
            alert("Đã lưu thành công");
            return save(state, action.profile);
        case ACTION_FORM_DATA_CHANGE:
            return onChange(state, action.key, action.value);
        case ACTION_LOAD_SAVED_PROFILE:
            return {
                ...state,
                ...action.profile
            };
        case ACTION_FETCH_PROFILE_SUCCESS:
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
    data: profileReducer
});