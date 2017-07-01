/**
 * Created by murkrow on 6/12/17.
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import Sun from "../../styles/images/planet/Sun.png";
import Aries from "../../styles/images/signs/1.png";

export default class ComboBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const params = this.props.params;
        return (
            <View style={styles.container}>
                <View style={styles.comboBox}>
                    <Image
                        resizeMode="contain"
                        source={params.source1}
                        style={styles.combo1}/>
                    <Image
                        resizeMode="contain"
                        source={params.source2}
                        style={styles.combo2}/>
                </View>
                <Text style={styles.comboName}>{params.comboName}</Text>
                <Text style={styles.comboDegree}>{params.comboDegree}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    comboBox: {
        marginTop: 15,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    combo1: {
        width: 50,
        height: 50,
        marginRight: 15
    },
    combo2: {
        width: 50,
        height: 50
    },
    comboName: {
        marginTop: 10,
        color: colors.BLACK,
        fontSize: 13,
        fontFamily: fonts.OPEN_SAN

    },
    comboDegree: {
        marginTop: 10,
        color: colors.LABEL,
        fontSize: 13,
        fontFamily: fonts.OPEN_SAN
    }
});