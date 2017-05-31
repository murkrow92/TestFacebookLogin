/**
 * Created by Murkrow on 5/31/2017.
 */


import NavigationBar from 'react-native-navbar';
import {TouchableHighlight, View} from "react-native";
import React, {Component, PropTypes} from "react";
import LineDivider from "../LineDivider";
import colors from "../../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

export default class TopNavigationBarWithSideBar extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        rightButton: PropTypes.string.isRequired,
        onLeftButtonPress: PropTypes.func.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    tintColor={colors.toolbar}
                    title={title(this.props)}
                    leftButton={leftButton(this.props)}
                    rightButton={rightButton(this.props)}
                />
                <LineDivider/>
            </View>
        );
    }
}

const styles = {
    container: {},
};

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
        <TouchableHighlight onPress={() => props.onLeftButtonPress()} style={{justifyContent: 'center', marginLeft: 12}}>
            <Icon name='align-justify' size={24} color="white"/>
        </TouchableHighlight>);
};

const rightButton = (props) => {
    return (
        <View style={{justifyContent: 'center', marginRight: 12}}>
            <Icon name={props.rightButton} size={24} color="white"/>
        </View>);
};




