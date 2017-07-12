/**
 * Created by murkrow on 6/13/17.
 */

import {Text, View, StyleSheet, Image, TouchableHighlight} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../styles/colors";
import {APP_MARGIN} from "../../styles/dimens";
import IOButtonIcon from "../Commons/TopNavigationBar/IOButtonIcon";
import fonts from "./../../styles/fonts";
import LineDivider from "../Commons/LineDivider";
import BlankProfile from "../../styles/images/blank_profile.png";

export default class FriendItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        const {byear, bmonth, bday, bhour, bminute, avatar} = this.props.data;
        const birthday = bday + "/" + bmonth + "/" + byear + " " + bhour + ":" + bminute;
        let picture = BlankProfile;
        if (avatar) {
            picture = {
                uri: avatar
            }
        }
        let date = new Date(byear, bmonth - 1, bday, bhour, bminute);

        return (
            <TouchableHighlight
                onPress={() => this.goDetail(date)}
                underlayColor='lightblue'>
                <View style={styles.wrapper}>
                    <LineDivider color={colors.LIST_TOP_BORDER}/>
                    <View style={styles.container}>
                        <Image source={picture} style={styles.icon}/>
                        <View style={styles.contentContainer}>
                            <Text style={styles.title}>{this.props.data.name }</Text>
                            <Text style={styles.content}>{birthday}</Text>
                        </View>
                        <IOButtonIcon
                            name="ios-arrow-forward-outline"
                            onPress={() => this.goDetail(date)}/>
                    </View>
                    <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
                </View>
            </TouchableHighlight>
        );
    }

    goDetail(date) {
        const {navigate} = this.props;
        navigate('Astro', {date: date});
    }
}

const styles = StyleSheet.create(
    {
        wrapper: {
            flexDirection: 'column'
        },
        container: {
            marginTop: 5,
            marginBottom: 5,
            alignItems: 'center',
            marginLeft: APP_MARGIN,
            flex: 1,
            flexDirection: 'row'

        },
        icon: {
            borderRadius: 5,
            marginRight: 10,
            width: 40,
            height: 40
        },
        contentContainer: {
            marginLeft: 5,
            flex: 1,
        },
        title: {
            fontFamily: fonts.OPEN_SAN,
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