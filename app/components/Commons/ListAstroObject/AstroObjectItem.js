/**
 * Created by murkrow on 6/9/17.
 */

import {Text, View, StyleSheet, Image} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../../styles/colors";
import Sun from "../../../styles/images/planet/Sun.png";
import Aries from "../../../styles/images/signs/1.png";
import {APP_MARGIN} from "../../../styles/dimens";

export default class AstroObjectItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={Sun} style={styles.icon}/>
                <Image source={Aries} style={styles.icon}/>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems:'center',
            height:64,
            marginLeft:APP_MARGIN - 5,
            marginRight:APP_MARGIN - 5,
            flex: 1,
            flexDirection: 'row'

        },
        icon:{
            marginRight:10,
            width:30,
            height:30
        }
    }
);



