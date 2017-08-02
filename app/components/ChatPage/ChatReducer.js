/**
 * Created by murkrow on 7/3/17.
 */


import {combineReducers} from "redux";
import {ACTION_FETCH_CONVERSATION_SUCCESS, ACTION_NEW_CONVERSATION_SUCCESS} from "./ChatActions";

const chatReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_FETCH_CONVERSATION_SUCCESS:
            return {
                ...state,
                ...action.conversation.data
            };
        case ACTION_NEW_CONVERSATION_SUCCESS:
            return {
                ...state,
                ...action.conversation.data
            };

        default:
            return state;
    }
};


export default combineReducers({
    messages: chatReducer
});