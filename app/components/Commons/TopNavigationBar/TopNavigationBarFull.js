/**
 * Created by Murkrow on 5/26/2017.
 */

import NavigationBar from 'react-native-navbar';
import {View} from "react-native";
import React, {Component, PropTypes} from "react";
import LineDivider from "../LineDivider";
import colors from "../../../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

export default class TopNavigationBarFull extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        leftButton: PropTypes.string.isRequired,
        rightButton: PropTypes.string.isRequired
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
        <View style={{justifyContent: 'center', marginLeft: 12}}>
            <Icon name={props.leftButton} size={24} color="white"/>
        </View>);
};

const rightButton = (props) => {
    return (
        <View style={{justifyContent: 'center', marginRight: 12}}>
            <Icon name={props.rightButton} size={24} color="white"/>
        </View>);
};
