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
    }

    render() {
        const {actions, sidebar} = this.props;
        const {navigate} = this.props.content.navigation;

        return ( <View style={styles.container}>
            <AccountBox
                picture={this.getPicture()}
                name={sidebar.user.name}
                navigate={navigate}/>
            <DrawerItem
                onPress={() => {
                }}
                account="500.000 đ"
                title="Ngân quỹ"
            />
            <DrawerItem
                onPress={() => navigate('Chat')}
                button="plus-circled"
                title="Tạo câu hỏi"
            />
            <DrawerTitle
                onPress={() => {
                }}
                title="Bản đồ sao"
            />
            <DrawerItem
                onPress={() => navigate('Chart')}
                title="Của tôi"
            />
            <DrawerItem
                onPress={() => navigate('Friend')}
                title="Của bạn bè"
            />
        </View> );
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.getLocalProfileAsync();
    }

    getPicture() {
        const {actions, sidebar} = this.props;
        let picture = BlankProfile;
        if (typeof(sidebar.user.picture) === "object") {
            picture = {
                uri: sidebar.user.picture.data.url
            };
        }
        return picture;
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

