/**
 * Created by Murkrow on 5/23/2017.
 */

import {DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";
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
import React from "react";
import Sidebar from "./components/Sidebar/index";
import AwesomeIcon from "./components/Commons/Icons/AwesomeIcon";
import MaterialCommunityIcon from "./components/Commons/Icons/MaterialCommunityIcon";
import IOIcon from "./components/Commons/Icons/IOIcon";
import colors from "./styles/colors";

export const PayRoute = StackNavigator({
    Payment: {
        screen: PaymentPage
    },
    MethodTransfer: {
        screen: MethodTransferPage
    }
}, {
    headerMode: 'none'
});

export const BottomPage = TabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => (<AwesomeIcon
                color={tintColor}
                name="home"
                size={24}/>)
        }
    },
    Notification: {
        screen: NotificationPage,
        navigationOptions: {
            tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => (<MaterialCommunityIcon
                color={tintColor}
                name="earth"
                size={24}/>)
        }
    },
    Profile: {
        screen: ProfilePage,
        navigationOptions: {
            tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => (<MaterialCommunityIcon
                color={tintColor}
                name="account"
                size={24}/>)
        }
    },
    Bank: {
        screen: BankPage,
        navigationOptions: {
            tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => (<IOIcon
                color={tintColor}
                name="ios-cash-outline"
                size={24}/>)
        }
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: colors.BLUE,
        inactiveTintColor:colors.DARKER_GREY,
        indicatorStyle: {
            backgroundColor: 'transparent'
        },
        swipeEnabled: true,
        showLabel: false,
        showIcon: true,
        style: {
            borderWidth: 1,
            backgroundColor: 'white',
            height: 48,
            borderColor: colors.LIST_BOTTOM_BORDER
        }

    }
});

const ContentPage = DrawerNavigator({

    Bottom: {screen: BottomPage},
    Profile: {screen: ProfilePage},
    Chart: {screen: ChartPage},
    Notification: {screen: NotificationPage},
    Friend: {screen: FriendPage},
    Question: {screen: QuestionPage},
    Detail: {screen: DetailPage},
    Payment: {screen: PayRoute},
    Home: {screen: HomePage},
    Bank: {screen: BankPage},
    Chat: {screen: ChatPage},
    About: {screen: AboutPage},
    OurAstrologers: {screen: OurAstrologersPage},
    Tutorial: {screen: TutorialPage},
    Setting: {screen: SettingPage},
    Purchase: {screen: PurchasePage}
}, {
    contentComponent: props => <Sidebar content={props}/>
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