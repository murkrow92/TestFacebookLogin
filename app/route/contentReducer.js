import {ACTION_UPDATE_CONVERSATION} from "./ContentActions";
import { combineReducers } from "redux";

const contentReducer = (state, action) => {
    return state;
}

export default combineReducers({
    chat: contentReducer
});