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
import HomePage from "./components/HomePage/index";
import BankPage from "./components/BankPage/index";
import PaymentPage from "./components/PaymentPage/index";
import MethodTransferPage from "./components/PaymentPage/MethodTransferPage/index";
import DetailPage from "./components/DetailPage/index";
import QuestionPage from "./components/QuestionPage/index";
import FriendPage from "./components/FriendPage/index";
import NotificationPage from "./components/NotificationPage/index";
import ChartPage from "./components/ChartPage/index";

const PayRoute = StackNavigator({
    Payment: {
        screen: PaymentPage
    },
    MethodTransfer: {
        screen: MethodTransferPage
    }
}, {
    headerMode: 'none'
});

const ContentPage = DrawerNavigator({
    Chart:{screen:ChartPage},
    Notification: {screen: NotificationPage},
    Friend: {screen: FriendPage},
    Question: {screen: QuestionPage},
    Detail: {screen: DetailPage},
    Payment: {screen: PayRoute},
    Home: {screen: HomePage},
    Bank: {screen: BankPage},
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
    Content: {
        screen: ContentPage,
    }
}, {
    headerMode: 'none'
});

export default AppRoute;