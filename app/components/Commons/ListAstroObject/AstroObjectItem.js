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
import {mapSign, mapPlanetByName, mapViPlanetName, mapViSignName} from "../../../lib/map";

export default class AstroObjectItem extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }


    // let item1 = {content: "23 \xB0 16' 22''", title: 'Mặt trời Bạch Dương', sign: 1, planet: 1};
    // let item2 = {content: "23 \xB0 16' 22''", title: 'Sao Thuỷ Kim Ngưu', sign: 2, planet: 2};
    // let item3 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 3, planet: 3};
    // let item4 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 3, planet: 12};
    // let item5 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 2, planet: 3};
    // let item6 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 5, planet: 8};
    // let item7 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 7, planet: 3};
    // let item8 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 8, planet: 7};
    // let item9 = {content: "23 \xB0 16' 22''", title: 'Mặt trăng Bọ Cạp', sign: 3, planet: 9};


    render() {
        let topBorderColor = this.props.item.isFirst ? 'transparent' : colors.LIST_TOP_BORDER;
        const degrees = this.props.item.degrees;
        const minutes = this.props.item.minutes;
        const sign = this.props.item.house;
        const name = this.props.item.name;
        const content = degrees + "\xB0" + minutes;

        return (
            <View style={styles.wrapper}>
                <LineDivider color={topBorderColor}/>
                <View style={styles.container}>
                    <Image source={mapPlanetByName(name)} style={styles.icon}/>
                    <Image source={mapSign(sign)} style={styles.icon}/>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>
                            <B>{mapViPlanetName(name)}</B> {mapViSignName(sign)}
                        </Text>
                        <Text style={styles.content}>{content}</Text>

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

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const styles = StyleSheet.create(
    {
        wrapper: {
            flexDirection: 'column'
        },
        container: {
            marginTop: 5,
            marginBottom: 5,
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
            marginLeft: 5,
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



