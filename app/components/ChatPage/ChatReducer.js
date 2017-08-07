/**
 * Created by murkrow on 7/3/17.
 */


import { combineReducers } from "redux";
import {
    ACTION_FETCH_CONVERSATION_SUCCESS,
    ACTION_NEW_CONVERSATION_SUCCESS,
    ACTION_ON_TEXT_CHANGE
} from "./ChatActions";

const chatReducer = (state = { text: '' }, action) => {
    switch (action.type) {
        case ACTION_FETCH_CONVERSATION_SUCCESS:
            return {
                ...state,
                ...action.conversation.data,
                needFetch: false
            };
        case ACTION_NEW_CONVERSATION_SUCCESS:
            return {
                ...state,
                ...action.conversation.data,
                needFetch: true,
                text: ''
            };
        case ACTION_ON_TEXT_CHANGE:
            return {
                ...state,
                text: action.text
            }

        default:
            return state;
    }
};


export default combineReducers({
    messages: chatReducer
});