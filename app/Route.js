/**
 * Created by Murkrow on 5/23/2017.
 */

import {DrawerNavigator, StackNavigator} from "react-navigation";
import AboutPage from "./components/AboutPage/index";
import OurAstrologersPage from "./components/OurAstrologersPage/index";
import TutorialPage from "./components/TutorialPage/index";
import SettingPage from "./components/SettingPage/index";
import ChatPage from "./components/ChatPage/index";
import PurchasePage from "./components/PurchasePage/index";
import LoginPage from "./components/LoginPage/index";
import ProfilePage from "./components/ProfilePage/index";

const HomePage = DrawerNavigator({
    Profile: {screen: ProfilePage},
    Chat: {screen: ChatPage},
    About: {screen: AboutPage},
    OurAstrologers: {screen: OurAstrologersPage},
    Tutorial: {screen: TutorialPage},
    Setting: {screen: SettingPage},
    Purchase: {screen: PurchasePage}
});

const AppRoute = StackNavigator({
    Login: {
        screen: LoginPage,
    },
    Home: {
        screen: HomePage,
    }
}, {
    headerMode: 'none'
});

export default AppRoute;