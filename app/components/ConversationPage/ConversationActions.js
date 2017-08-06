

import {API} from "../../lib/API";
export const FETCH_CONVERSATION_SUCCESS = "com.fetch.conversations.success";
import {AsyncStorage} from "react-native";

const api = new API();

const fetchConversationSuccess = (conversations) => ({
    type: FETCH_CONVERSATION_SUCCESS,
    conversations
});

export const fetchConversationsAsync = () => (dispatch, getState) =>
    (api.fetchConversations().then(
        response => {
            console.log(response);
            AsyncStorage.setItem('conversations', JSON.stringify(response));
            dispatch(fetchConversationSuccess(response));
        },
        error => {
            console.log(error);
            AsyncStorage.getItem('conversations').then(
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