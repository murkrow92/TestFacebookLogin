/**
 * Created by murkrow on 6/9/17.
 */

import {Text, View, StyleSheet, Image} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../../styles/colors";
import {APP_MARGIN} from "../../../styles/dimens";
import IOButtonIcon from "../TopNavigationBar/IOButtonIcon";
import fonts from "../../../styles/fonts";
import LineDivider from "../LineDivider";
import {mapSign, mapPlanet} from "../../../lib/map";

export default class AstroObjectItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        let topBorderColor = this.props.data.isFirst ? 'transparent' : colors.LIST_TOP_BORDER;
        return (
            <View style={styles.wrapper}>
                <LineDivider color={topBorderColor}/>
                <View style={styles.container}>
                    <Image source={mapPlanet(this.props.data.planet)} style={styles.icon}/>
                    <Image source={mapSign(this.props.data.sign)} style={styles.icon}/>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{this.props.data.title }</Text>
                        <Text style={styles.content}>{this.props.data.content}</Text>

                    </View>
                    <IOButtonIcon
                        name="ios-arrow-forward-outline"
                        onPress={() => {
                        }}/>
                </View>
                <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        wrapper: {
            flexDirection: 'column'
        },
        container: {
            marginTop:5,
            marginBottom:5,
            alignItems: 'center',
            marginLeft: APP_MARGIN - 5,
            flex: 1,
            flexDirection: 'row'

        },
        icon: {
            marginRight: 10,
            width: 30,
            height: 30
        },
        contentContainer: {
            marginLeft:5,
            flex: 1,
        },
        title: {
            fontFamily: fonts.HELVETICA,
            fontSize: 13,
            color: colors.BLACK
        },
        content: {
            fontFamily: fonts.OPEN_SAN,
            fontSize: 13,
            marginTop: 8,
            color: colors.LABEL
        }
    }
);



