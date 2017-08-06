import {combineReducers} from "redux";
import {FETCH_CONVERSATION_SUCCESS} from "./ConversationActions";

const conversationReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CONVERSATION_SUCCESS:
            return {
                ...state
            };
        default:
            return state;
    }
};


export default combineReducers({
    list: conversationReducer
});