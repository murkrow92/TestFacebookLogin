/**
 * Created by murkrow on 7/15/17.
 */

import {FRIEND_FORM_CHANGE, SAVE_FRIEND_SUCCESS, SAVE_FRIEND_FAILED} from "./AddFriendAtions";
import {combineReducers} from "redux";


const addFriendReducer = (state = {}, action) => {
    switch (action.type) {
        case FRIEND_FORM_CHANGE:
            return onChange(state, action.key, action.value);
        case SAVE_FRIEND_SUCCESS:
            return onSuccess(state, action.friend);
        case SAVE_FRIEND_FAILED:
            return onFailed(state);
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

const onSuccess = (state, friend) => ({
    ...state,
    saved: true
});

const onFailed = (state) => ({
    ...state,
    saved: false
});
export default combineReducers({
    friend: addFriendReducer
});