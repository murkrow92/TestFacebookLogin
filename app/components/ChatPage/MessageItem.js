/**
 * Created by Murkrow on 5/27/2017.
 */


import {Image, Text, View} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../styles/colors";
import Profile from "../../styles/images/profile.jpg";
import Sagittarius from "../../styles/images/ic_sagittarius.png";

export default class MessageItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        const dt = this.props.data.datetime;
        const user = this.props.data.user;
        const content = this.props.data.content;
        const isSystem = (user === "System");
        return (
            <View style={containerStyle(isSystem)}>
                <Image style={styles.avatar} source={profileStyle(isSystem)}/>
                <View style={styles.textContainer}>
                    <Text style={styles.datetimeText}> {dt} by {user} </Text>
                    <View style={contentContainerStyle(isSystem)}>
                        <Text style={contentStyle(isSystem)}>{content}</Text>
                    </View>
                </View>
            </View>);
    }
}

const containerStyle = (isSystem) => {
    let flexDirection = "row";
    if (!isSystem) {
        flexDirection = "row-reverse";
    }
    return (
        {
            marginTop: 2,
            marginBottom: 2,
            flexDirection: flexDirection
        }
    );

};

const profileStyle = (isSystem) => {
    if (isSystem) {
        return Sagittarius;
    } else {
        return Profile
    }
};

const contentContainerStyle = (isSystem) => {
    let bgColor = 'LIGHT_BLUE';
    let marginLeft = 24;
    let marginRight = 0;
    if (isSystem) {
        marginLeft = 0;
        marginRight = 24;
        bgColor = colors.TEXT_GREY;
    }

    return (
        {
            marginTop: 4,
            marginLeft: marginLeft,
            marginRight: marginRight,
            paddingTop: 6,
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 6,
            backgroundColor: bgColor,
            borderRadius: 20,
            alignItems: 'flex-start'
        }
    );
};

const contentStyle = (isSystem) => {
    let color = 'white';
    if (isSystem) {
        color = 'black';
    }
    return {
        color: color
    }
};


const styles = {
    container: {
        marginTop: 2,
        marginBottom: 2,
        flexDirection: 'row'
    },
    textContainer: {
        paddingLeft: 6,
        paddingRight: 6,
        flexDirection: 'column'
    },
    datetimeText: {
        color: colors.TEXT_GREY
    },

    contentContainer: {
        marginTop: 4,
        marginRight: 24,
        paddingTop: 6,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 6,
        backgroundColor: colors.TEXT_GREY,
        borderRadius: 20,
        alignItems: 'flex-start'
    },
    content: {

        color: 'black'
    },

    avatar: {
        alignSelf: 'flex-end',
        borderWidth: 1,
        width: 14,
        height: 14,
        borderRadius: 100,
    }
};




