/**
 * Created by murkrow on 7/3/17.
 */

import {API} from "../../lib/API";
export const FETCH_CONSERVATION = "fetch_conservation";
import {AsyncStorage} from "react-native";

const api = new API();

const fetchConservation = (conservation) => ({
    type: FETCH_CONSERVATION,
    conservation
});

export const fetchConservationAsync = (conversationId) => (dispatch, getState) =>
    (api.fetchConversation(conversationId).then(
        response => {
            AsyncStorage.setItem('conservation' + conversationId, JSON.stringify(response));
            dispatch(fetchConservation(response));
        },
        error => {
            AsyncStorage.getItem('conservation' + conversationId).then(
                value => {
                    if (value === null) {
                        return Promise.resolve();
                    }
                    dispatch(fetchConservation(JSON.parse(value)));

                },
                error => {
                    alert("error: " + error.message);
                }
            );

        }));