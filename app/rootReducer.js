/**
 * Created by Murkrow on 4/23/2017.
 */

import {combineReducers} from 'redux';
import appReducer from "./appReducer";
import profileReducer from "./components/ProfilePage/ProfileReducer";

export default combineReducers({
    app: appReducer,
    profile: profileReducer
});