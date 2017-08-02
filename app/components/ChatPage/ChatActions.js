/**
 * Created by murkrow on 7/3/17.
 */

import {API} from "../../lib/API";

export const ACTION_FETCH_CONVERSATION_SUCCESS = "fetch_conversation_success";
export const ACTION_NEW_CONVERSATION_SUCCESS = "add_conversation_success";
import {AsyncStorage} from "react-native";

const api = new API();

const fetchConversationSuccess = (conversation) => ({
    type: ACTION_FETCH_CONVERSATION_SUCCESS,
    conversation
});

export const fetchConversationAsync = (conversationId) => (dispatch, getState) =>
    (api.fetchConversation(conversationId).then(
        response => {
            AsyncStorage.setItem('conversation' + conversationId, JSON.stringify(response));
            dispatch(fetchConversationSuccess(response));
        },
        error => {
            AsyncStorage.getItem('conversation' + conversationId).then(
                value => {
                    if (value === null) {
                        return Promise.resolve();
                    }
                    dispatch(fetchConversationSuccess(JSON.parse(value)));

                },
                error => {
                    alert("error: " + error.message);
                }
            );

        }));

const addConversationSuccess = (conversation) => ({
    type: ACTION_NEW_CONVERSATION_SUCCESS,
    conversation
});

export const addConversationAsync = (userId, message) => (dispatch, getState) =>
    (api.addConversation(userId, message).then(
        response => {
            dispatch(addConversationSuccess(response));
        },
        error => {
            console.log(error);
        }
    ));