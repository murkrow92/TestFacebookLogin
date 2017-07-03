/**
 * Created by murkrow on 7/3/17.
 */

import {API} from "../../lib/API";
export const FETCH_CONVERSATION = "fetch_conversation";
import {AsyncStorage} from "react-native";

const api = new API();

const fetchConversation = (conversation) => ({
    type: FETCH_CONVERSATION,
    conversation
});

export const fetchConversationAsync = (conversationId) => (dispatch, getState) =>
    (api.fetchConversation(conversationId).then(
        response => {
            AsyncStorage.setItem('conversation' + conversationId, JSON.stringify(response));
            dispatch(fetchConversation(response));
        },
        error => {
            AsyncStorage.getItem('conversation' + conversationId).then(
                value => {
                    if (value === null) {
                        return Promise.resolve();
                    }
                    dispatch(fetchConversation(JSON.parse(value)));

                },
                error => {
                    alert("error: " + error.message);
                }
            );

        }));