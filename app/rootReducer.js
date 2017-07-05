/**
 * Created by Murkrow on 4/23/2017.
 */

import {combineReducers} from 'redux';
import appReducer from "./appReducer";
import profileReducer from "./components/ProfilePage/ProfileReducer";
import homeReducer from "./components/HomePage/HomeReducer";
import sidebarReducer from "./components/Sidebar/SideBarReducer";
import chatReducer from "./components/ChatPage/ChatReducer";
import notificationReducer from "./components/NotificationPage/NotifictionReducer";
import detailReducer from "./components/DetailPage/DetailReducer";

export default combineReducers({
    app: appReducer,
    profile: profileReducer,
    home:homeReducer,
    sidebar:sidebarReducer,
    notifications:notificationReducer,
    chat:chatReducer,
    detail:detailReducer
});