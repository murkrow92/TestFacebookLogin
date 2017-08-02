/**
 * Created by Murkrow on 5/27/2017.
 */


import {Image, Text, View} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../styles/colors";
import SystemProfile from "../../styles/images/ic_launcher.png";

export default class MessageItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        const {data, profile} = this.props;
        profile.userId = "2";
        const user = data.user_id;
        console.log(user);
        const content = data.content;
        const isSystem = (user === profile.userId);
        return (
            <View style={containerStyle(isSystem)}>
                <Image style={styles.avatar} source={profileStyle(isSystem, profile)}/>
                <View style={styles.textContainer}>
                    <View style={contentContainerStyle(isSystem, profile)}>
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

const profileStyle = (isSystem, profile) => {
    if (isSystem) {
        return SystemProfile;
    } else {
        return {
            uri: profile.picture.data.url
        }
    }
};

const contentContainerStyle = (isSystem) => {
    let bgColor = '#0084ff';
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
    avatar: {
        alignSelf: 'flex-end',
        borderWidth: 1,
        width: 14,
        height: 14,
        borderRadius: 100,
    }
};




