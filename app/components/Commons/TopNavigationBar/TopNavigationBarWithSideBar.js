/**
 * Created by Murkrow on 5/31/2017.
 */


import NavigationBar from 'react-native-navbar';
import {Text, TouchableHighlight, View} from "react-native";
import React, {Component, PropTypes} from "react";
import LineDivider from "../LineDivider";
import colors from "../../../styles/colors";
import Icon from "react-native-vector-icons/Ionicons";
import fonts from "../../../styles/fonts";

export default class TopNavigationBarWithSideBar extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        onLeftButtonPress: PropTypes.func.isRequired,
        rightButtonType:PropTypes.string.isRequired,
        rightButton:PropTypes.string.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    tintColor={colors.TOOLBAR}
                    title={title(this.props)}
                    leftButton={leftButton(this.props)}
                    rightButton={rightButton(this.props)}
                />
                <LineDivider/>
            </View>
        );
    }
}

const title = (props) => {
    return ({
            title: props.title,
            tintColor: colors.topBarTitle,
            style: {
                fontWeight: 'normal',
                fontSize: 13
            }
        }
    );
};

const leftButton = (props) => {
    return (
        <TouchableHighlight
            onPress={() => props.onLeftButtonPress()}
            style={styles.button}
            underlayColor={colors.LIGHT_BLUE}>
            <Icon
                style={styles.icon}
                name='ios-menu-outline'
                size={20}
                color={colors.BLUE}/>
        </TouchableHighlight>);
};

const rightButton = (props) => {
    if (props.rightButtonType === "icon") {
        return (
            <View style={{justifyContent: 'center', marginRight: RIGHT_BUTTON_MARGIN_RIGHT}}>
                <Icon name={props.rightButton} size={20} color={colors.icon}/>
            </View>);
    } else {
        return (
            <Text style={styles.rightButton}>{props.rightButton}</Text>
        );
    }
};

const RIGHT_BUTTON_MARGIN_RIGHT = 12;

const styles = {
    container: {
        height: 32
    },
    button: {
        width: 32,
        justifyContent: 'center',
    },
    icon: {
        alignSelf: 'center'
    },
    rightButton: {
        alignSelf:'center',
        marginRight:RIGHT_BUTTON_MARGIN_RIGHT,
        color:colors.BLUE,
        fontSize: 13,
        fontFamily: fonts.OPEN_SAN
    }
};






