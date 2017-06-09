/**
 * Created by Murkrow on 5/24/2017.
 */

import {Text, View} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TutorialItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        const rowIndex = this.props.data.rowIndex;
        return (
            <View style={containerStyle(rowIndex)}>
                <View style={styles.iconContainer}>
                    <Icon size={50} name={this.props.data.label}/>
                </View>
                <View style={textContainerStyle(rowIndex)}>
                    <Text>{this.props.data.content}</Text>
                </View>
            </View>);
    }
}

const containerStyle = (rowIndex) => {
    let flexDirection = "row";
    if (rowIndex % 2 === 0) {
        flexDirection = "row-reverse";
    }
    return (
        {
            flex: 1,
            flexDirection: flexDirection,
            marginTop: 8,
            marginBottom: 8,
        }
    );
};

const textContainerStyle = (rowIndex) => {
    let justifyContent = "flex-end";
    if (rowIndex % 2 === 0) {
        justifyContent = "flex-start";
    }
    return (
        {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: justifyContent
        }
    );
};

const styles = {
    iconContainer: {},
};
