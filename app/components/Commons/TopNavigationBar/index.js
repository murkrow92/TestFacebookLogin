/**
 * Created by Murkrow on 5/18/2017.
 */

import NavigationBar from 'react-native-navbar';
import {View} from "react-native";
import React, {Component, PropTypes} from "react";
import LineDivider from "../LineDivider";
import colors from "../../../styles/colors";
import ButtonIcon from "./ButtonIcon";
import NormalTitle from "./NormalTitle";

export default class TopNavigationBar extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        rightButton: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired
    };

    render() {
        const leftButtonConfig = this.props.leftButton ? this.props.leftButton : createButton("menu", this.props.onPress);
        return (
            <View style={styles.container}>
                <NavigationBar
                    tintColor={colors.BACKGROUND_APP}
                    title={createTitle(this.props.title)}
                    rightButton={this.props.rightButton}
                    leftButton={leftButtonConfig}
                />
                <LineDivider/>
            </View>
        );
    }
}

const createTitle = (title) => {
    return <NormalTitle title={title}/>
};

const createButton = (icon, onPress) => {
    return (<ButtonIcon icon={icon} onPress={onPress}/>)
};


const styles = {
    container: {
        flex: 1,
    },
};

