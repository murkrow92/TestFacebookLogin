/**
 * Created by murkrow on 7/10/17.
 */


import {FETCH_FRIEND} from "./FriendActions";
import {combineReducers} from "redux";

const friendReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_FRIEND:
            return {
                ...state,
                ...action.friends.data
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

const save = (state, friend) => {
    return state;
};

export default combineReducers({
    friend: friendReducer
});