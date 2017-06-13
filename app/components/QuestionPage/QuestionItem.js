/**
 * Created by murkrow on 6/13/17.
 */

import {Text, View, StyleSheet} from "react-native";
import React, {Component, PropTypes} from "react";
import LineDivider from "../Commons/LineDivider";
import colors from "../../styles/colors";
import {APP_MARGIN} from "../../styles/dimens";
import fonts from "../../styles/fonts";
import {QUESTION_TYPE_COMBO, QUESTION_TYPE_QUESTION} from "../../lib/questions";
import ComboBox from "./ComboBox";
import Icon from "../Commons/Icons/Icon";
import IOButtonIcon from "../Commons/TopNavigationBar/IOButtonIcon";


export default class QuestionItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <LineDivider color={colors.LIST_TOP_BORDER}/>
                <View style={styles.container}>
                    <View style={styles.iconBox}>
                        {this.renderIcon()}
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{this.props.data.title }</Text>
                        <Text style={styles.content}>{this.props.data.content}</Text>
                    </View>
                    <IOButtonIcon
                        color={colors.BLUE}
                        name="ios-arrow-forward-outline"
                        onPress={() => {
                            this.props.data.onPress();
                        }}/>

                </View>
                <LineDivider color={colors.LIST_BOTTOM_BORDER}/>
            </View>
        );
    }

    renderIcon() {
        let type = this.props.data.type;
        if (type === QUESTION_TYPE_COMBO) {
            return <ComboBox/>

        } else if (type === QUESTION_TYPE_QUESTION) {
            return <Icon size={28} name="chart-pie-1"/>;
        }

    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column'
    },
    container: {
        paddingLeft: 15,
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'

    },
    iconBox: {
        width: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentContainer: {
        marginLeft: APP_MARGIN,
        flex: 1,
    },
    title: {
        fontFamily: fonts.OPEN_SAN,
        fontSize: 13,
        color: colors.BLACK
    },
    content: {
        fontFamily: fonts.REGULAR,
        fontSize: 11,
        marginTop: 5,
        color: colors.LABEL
    }
});
