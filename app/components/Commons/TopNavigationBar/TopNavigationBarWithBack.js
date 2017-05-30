/**
 * Created by Murkrow on 5/22/2017.
 */
import NavigationBar from 'react-native-navbar';
import {View} from "react-native";
import React, {Component, PropTypes} from "react";
import LineDivider from "../LineDivider";
import colors from "../../../styles/colors";

export default class TopNavigationBarWithBack extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    tintColor={colors.toolbar}
                    title={titleConfig(this.props)}
                    leftButton={leftButtonConfig}
                />
                <LineDivider/>
            </View>
        );
    }
}

const styles = {
    container: {
    },
};

const leftButtonConfig = {
    title: 'Back',
    tintColor: 'white'
};

const titleConfig = (props) => {
    return ({
            title: props.title,
            tintColor: colors.topBarTitle,
            style: {
                fontWeight: 'normal'
            }
        }
    );
};

