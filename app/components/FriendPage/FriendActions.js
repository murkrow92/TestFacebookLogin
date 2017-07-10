/**
 * Created by murkrow on 7/10/17.
 */

import {API} from "../../lib/API";
import {AsyncStorage} from "react-native";

export const FETCH_FRIEND = "fetch_friend";

const api = new API();

const fetchFriend = (friends) => ({
    type: FETCH_FRIEND,
    friends
});

export const fetchFriendAsync = () => (dispatch, getState) =>
    (api.fetchFriend().then(
        response => {
            AsyncStorage.setItem('friends', JSON.stringify(response));
            dispatch(fetchFriend(response));
        },
        error => {
            AsyncStorage.getItem('friends').then(
                value => {
                    if (value === null) {
                        return Promise.resolve();
                    }
                    dispatch(fetchFriend(JSON.parse(value)));

                },
                error => {
                    alert("error: " + error.message);
                }
            );
            console.log(error);
        }));

