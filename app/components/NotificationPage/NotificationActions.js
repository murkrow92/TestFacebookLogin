/**
 * Created by murkrow on 7/3/17.
 */


import {API} from "../../lib/API";
export const FETCH_NOTIFICATIONS = "fetch_notifications";
import {AsyncStorage} from "react-native";

const api = new API();

const fetchNotifications = (notifications) => ({
    type: FETCH_NOTIFICATIONS,
    notifications
});

export const fetchNotificationsAsync = () => (dispatch, getState) =>
    (api.fetchNotifications().then(
        response => {
            AsyncStorage.setItem('notifications', JSON.stringify(response));
            dispatch(fetchNotifications(response));
        },
        error => {
            AsyncStorage.getItem('notifications').then(
                value => {
                    if (value === null) {
                        return Promise.resolve();
                    }
                    dispatch(fetchNotifications(JSON.parse(value)));

                },
                error => {
                    alert("error: " + error.message);
                }
            );

        }));
