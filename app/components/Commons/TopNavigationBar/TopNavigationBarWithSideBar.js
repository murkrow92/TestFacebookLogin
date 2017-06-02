/**
 * Created by Murkrow on 5/31/2017.
 */


import NavigationBar from 'react-native-navbar';
import {TouchableHighlight, View} from "react-native";
import React, {Component, PropTypes} from "react";
import LineDivider from "../LineDivider";
import colors from "../../../styles/colors";
import Icon from "react-native-vector-icons/Ionicons";

export default class TopNavigationBarWithSideBar extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        onLeftButtonPress: PropTypes.func.isRequired
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
                fontWeight: 'normal'
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
                size={24}
                color={colors.BLUE}/>
        </TouchableHighlight>);
};

const rightButton = (props) => {
    if (typeof (props.rightButton) === "string") {
        return (
            <View style={{justifyContent: 'center', marginRight: 12}}>
                <Icon name={props.rightButton} size={24} color={colors.icon}/>
            </View>);
    } else {
        return props.rightButton;
    }
};

const styles = {
    container: {},
    button: {
        width: 36,
        justifyContent: 'center',
    },
    icon: {
        alignSelf: 'center'
    }
};




