/**
 * Created by murkrow on 7/3/17.
 */

import { API } from "../../lib/API";

export const ACTION_FETCH_CONVERSATION_SUCCESS = "fetch_conversation_success";
export const ACTION_NEW_CONVERSATION_SUCCESS = "add_conversation_success";
export const ACTION_ON_TEXT_CHANGE = "action.chat.text.change";
import { AsyncStorage } from "react-native";

const api = new API();

const fetchConversationSuccess = (conversation) => ({
    type: ACTION_FETCH_CONVERSATION_SUCCESS,
    conversation
});

export const fetchConversationAsync = (conversationId) => (dispatch, getState) =>
    (api.fetchConversation(conversationId).then(
        response => {
            const responseString = JSON.stringify(response);
            AsyncStorage.setItem('conversation' + conversationId, responseString);
            dispatch(fetchConversationSuccess(response));
        },
        error => {
            AsyncStorage.getItem('conversation' + conversationId).then(
                value => {
                    if (value === null) {
                        return Promise.resolve();
                    }
                    const conversation = JSON.parse(value);
                    dispatch(fetchConversationSuccess(conversation));

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

export const addConversationAsync = (message) => (dispatch, getState) =>
    (api.addConversation(message).then(
        response => {
            dispatch(addConversationSuccess(response));
        },
        error => {
            console.log(error);
        }
    ));

export const onChangeText = (text) => ({
    type: ACTION_ON_TEXT_CHANGE,
    text
});