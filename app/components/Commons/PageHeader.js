/**
 * Created by Murkrow on 5/23/2017.
 */

import React, {Component, PropTypes} from "react";
import {Image, Text, View} from "react-native";
import colors from "../../styles/colors";
import Sun from "../../styles/images/ic_sun.png";

export default class PageHeader extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{margin: 16}}
                    source={Sun}
                />
                <Text style={styles.logo.title}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = {
    logo: {
        title: {
            fontSize: 24,
            fontWeight: 'normal',
            textAlignVertical: 'center',
            textAlign: 'center',
            flex: 1,
            color: colors.textTitle
        }
    }
};