import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator, TabNavigator } from "react-navigation";
import AboutPage from "../components/AboutPage/index";
import ChatPage from "../components/ChatPage/index";
import PurchasePage from "../components/PurchasePage/index";
import ProfilePage from "../components/ProfilePage/index";
import HomePage from "../components/HomePage/index";
import BankPage from "../components/BankPage/index";
import PaymentPage from "../components/PaymentPage/index";
import MethodTransferPage from "../components/PaymentPage/MethodTransferPage/index";
import DetailPage from "../components/DetailPage/index";
import QuestionPage from "../components/QuestionPage/index";
import FriendPage from "../components/FriendPage/index";
import NotificationPage from "../components/NotificationPage/index";
import AstroPage from "../components/AstroPage/index";
import ChartPage from "../components/ChartPage/index";
import Sidebar from "../components/Sidebar/index";
import AwesomeIcon from "../components/Commons/Icons/AwesomeIcon";
import MaterialCommunityIcon from "../components/Commons/Icons/MaterialCommunityIcon";
import IOIcon from "../components/Commons/Icons/IOIcon";
import colors from "../styles/colors";
import AddFriendPage from "../components/FriendPage/AddFriendPage/index";
import ConversationPage from "../components/ConversationPage/index";
import * as actions from "./ContentActions";
import { APP_CLUSTER, APP_AUTH_ENDPOINT, APP_KEY } from "../lib/Environment";
import Pusher from 'pusher-js/react-native';

const pusher = new Pusher(APP_KEY, {
    cluster: APP_CLUSTER,
    encrypted: true,
    authEndpoint: APP_AUTH_ENDPOINT
});

Pusher.logToConsole = true;

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

const NotificationRoute = StackNavigator({
    Notification: {
        screen: NotificationPage
    },
    Conversation: {
        screen: ConversationPage
    },

    Chat: {
        screen: ChatPage
    }

}, {
        headerMode: 'none'
    });

const HomeRoute = StackNavigator({
    Home: { screen: HomePage },
    Detail: { screen: DetailPage },
    Chart: { screen: ChartPage },
    Friend: { screen: FriendPage },
    AddFriend: { screen: AddFriendPage },
    Astro: { screen: AstroPage }

}, {
        headerMode: 'none'
    });

const BottomRoute = TabNavigator({
    Home: {
        screen: HomeRoute,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                (<AwesomeIcon
                    color={tintColor}
                    name="home"
                    size={24} />)
        }
    },
    Notification: {
        screen: NotificationRoute,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                (<MaterialCommunityIcon
                    color={tintColor}
                    name="earth"
                    size={24} />)
        }
    },
    Profile: {
        screen: ProfilePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                (<MaterialCommunityIcon
                    color={tintColor}
                    name="account"
                    size={24} />)
        }
    },
    Bank: {
        screen: BankPage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                (<IOIcon
                    color={tintColor}
                    name="ios-cash-outline"
                    size={24} />)
        }
    }
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: colors.BLUE,
            inactiveTintColor: colors.DARKER_GREY,
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

const ContentComponent = DrawerNavigator({
    Bottom: { screen: BottomRoute },

}, {
        contentComponent: props => <Sidebar content={props} />
    });

class ContentPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<ContentComponent />);
    }

    componentDidMount(prevProps, prevStates) {
        this.registerChannel();
    }

    registerChannel() {
        const { id } = this.props.profile.data;
        if (!id) {
            return;
        }
        const encrypted = md5("vnAstro" + id);
        const channel = pusher.subscribe("private-" + encrypted);
        channel.bind('chat', this.pusherCallback.bind(this));
    }

    pusherCallback(data) {
        console.log(data);
        const { actions } = this.props;
        actions.updateConversation();
    }
}

const mapStateToProps = (state) => ({
    content: state.content,
    profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
