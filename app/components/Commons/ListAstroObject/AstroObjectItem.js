/**
 * Created by murkrow on 6/9/17.
 */

import {Text, View, StyleSheet, Image, TouchableHighlight} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../../styles/colors";
import {APP_MARGIN} from "../../../styles/dimens";
import IOButtonIcon from "../TopNavigationBar/IOButtonIcon";
import fonts from "../../../styles/fonts";
import LineDivider from "../LineDivider";
import {mapSign, mapPlanetByName, mapViPlanetName, mapViSignName} from "../../../lib/map";
import {QUESTION_TYPE_COMBO} from "../../../lib/questions";

export default class AstroObjectItem extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let topBorderColor = this.props.item.isFirst ? 'transparent' : colors.LIST_TOP_BORDER;
        const {degrees, minutes, name, retrograde} = this.props.item;
        const sign = this.props.item.house;
        let content = degrees + "\xB0" + minutes;
        if (retrograde === "TRUE") {
            content = content + " " + "Nghịch hành";
        }

        return (
            <TouchableHighlight
                onPress={() => this.gotoDetail()}
                underlayColor='lightblue'>
                <View style={styles.wrapper}>
                    <LineDivider color={topBorderColor}/>
                    <View style={styles.container}>
                        <Image
                            resizeMode="contain"
                            source={mapPlanetByName(name)}
                            style={styles.icon}/>
                        <Image
                            resizeMode="contain"
                            source={mapSign(sign)}
                            style={styles.icon}/>
                        <View style={styles.contentContainer}>
                            <Text style={styles.title}>
                                <B>{mapViPlanetName(name)}</B> {mapViSignName(sign)}
                            </Text>
                            <Text style={styles.content}>{content}</Text>

                        </View>
                        <IOButtonIcon
                            name="ios-arrow-forward-outline"
                            onPress={() => this.gotoDetail()}/>
                    </View>
                    <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
                </View>
            </TouchableHighlight>
        )
    }

    gotoDetail() {
        const {degrees, minutes, name, retrograde} = this.props.item;
        const sign = this.props.item.house;
        const {navigate} = this.props;
        let content = degrees + "\xB0" + minutes;
        if (retrograde === "TRUE") {
            content = content + " " + "Nghịch hành";
        }
        navigate('Detail', {
            questionType: QUESTION_TYPE_COMBO,
            comboName: mapViPlanetName(name) + " " + mapViSignName(sign),
            comboDegree: content
        });
    }
}

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

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



