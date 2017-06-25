/**
 * Created by murkrow on 6/17/17.
 */


import {FORM_CHANGE, REQUEST_SAVE} from "./ProfileActions";
import {combineReducers} from "redux";
import {AsyncStorage} from "react-native";

const formState = {};

const profileReducer = (state = formState, action) => {
    switch (action.type) {
        case REQUEST_SAVE:
            return save(state, action.profile);
        case FORM_CHANGE:
            return onChange(state, action.key, action.value);
        default:
            return loadFromLocal();
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
    return profile;
};

const loadFromLocal = async () => {
    try {
        let tmp = await AsyncStorage.getItem('profile');
        return JSON.parse(tmp);
    } catch (err){
        alert("error: " + err);
        return {};
    }
};

export default combineReducers({
    profile: profileReducer
});