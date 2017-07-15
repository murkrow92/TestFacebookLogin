/**
 * Created by murkrow on 7/15/17.
 */

import {FRIEND_FORM_CHANGE, SAVE_NEW_FRIEND} from "./AddFriendAtions";
import {combineReducers} from "redux";


const addFriendReducer = (state = {}, action) => {
    switch (action.type) {
        case FRIEND_FORM_CHANGE:
            return onChange(state, action.key, action.value);
        case SAVE_NEW_FRIEND:
            return save(state, action.friend);
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

const save = (state, friend) => {
    return state;
};

export default combineReducers({
    friend: addFriendReducer
});