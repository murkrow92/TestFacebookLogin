/**
 * Created by murkrow on 7/3/17.
 */


import {combineReducers} from "redux";
import {FETCH_CONVERSATION} from "./ChatActions";

const chatReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CONVERSATION:
            console.log(action);
            return {
                ...state,
                ...action.conversation.data.messages
            };
        default:
            return state;
    }
};


export default combineReducers({
    messages: chatReducer
});