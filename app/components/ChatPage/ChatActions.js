/**
 * Created by murkrow on 7/3/17.
 */

import {API} from "../../lib/API";
export const FETCH_CONVERSATION = "fetch_conversation";
import {AsyncStorage} from "react-native";

const api = new API();

const fetchConversation = (conservation) => ({
    type: FETCH_CONVERSATION,
    conservation
});

export const fetchConversationAsync = (conversationId) => (dispatch, getState) =>
    (api.fetchConversation(conversationId).then(
        response => {
            AsyncStorage.setItem('conservation' + conversationId, JSON.stringify(response));
            dispatch(fetchConversation(response));
        },
        error => {
            AsyncStorage.getItem('conservation' + conversationId).then(
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