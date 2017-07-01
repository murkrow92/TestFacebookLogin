/**
 * Created by murkrow on 6/13/17.
 */

import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import AccountBox from "./AccountBox";
import DrawerItem from "./DrawerItem";
import DrawerTitle from "./DrawerTitle";
import {bindActionCreators} from "redux";
import * as actions from "./SideBarAction";
import {connect} from "react-redux";
import BlankProfile from "../../styles/images/blank_profile.png";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        const {actions} = this.props;
        actions.getLocalProfileAsync();
    }

    render() {
        const {actions, sidebar} = this.props;
        const {navigate} = this.props.content.navigation;
        let picture = BlankProfile;
        if (typeof(sidebar.user.picture) === "object"){
            picture = {
                uri: sidebar.user.picture.data.url
            };
        }

        console.log(sidebar);
        return ( <View style={styles.container}>
            <AccountBox
                picture={picture}
                name={sidebar.user.name}
                navigate={navigate}/>
            <DrawerItem
                navigate={navigate}
                account="500.000 đ"
                title="Ngân quỹ"
            />
            <DrawerItem
                navigate={navigate}
                button="plus-circled"
                title="Tạo câu hỏi"
            />
            <DrawerTitle
                navigate={navigate}
                title="Bản đồ sao"
            />
            <DrawerItem
                navigate={navigate}
                title="Của tôi"
            />
            <DrawerItem
                navigate={navigate}
                title="Của bạn bè"
            />
        </View> );


    }
}

const styles = StyleSheet.create({
    container: {}
});

const mapStateToProps = (state) => ({
    sidebar: state.sidebar,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

