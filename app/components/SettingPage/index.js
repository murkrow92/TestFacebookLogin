/**
 * Created by Murkrow on 5/24/2017.
 */

import TopNavigationBarWithBack from "../Commons/TopNavigationBar/TopNavigationBarWithBack";
import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import {Alert, Image, Text, View} from "react-native";
import SettingsList from 'react-native-settings-list';
import colors from "../../styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SettingPage extends Component {
    constructor() {
        super();
        this.onValueChange = this.onValueChange.bind(this);
        this.state = {switchValue: false};
    }

    render() {
        return (
            <PageWrapper>
                <TopNavigationBarWithBack title="Setting"/>
                <View style={{backgroundColor: '#EFEFF4', flex: 1}}>
                    <View style={{backgroundColor: '#EFEFF4', flex: 1}}>
                        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                            <SettingsList.Header headerStyle={{marginTop: 15}}/>
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                hasSwitch={true}
                                switchState={this.state.switchValue}
                                switchOnValueChange={this.onValueChange}
                                hasNavArrow={false}
                                title='Airplane Mode'
                            />
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                title='Wi-Fi'
                                titleInfo='Bill Wi The Science Fi'
                                titleInfoStyle={styles.titleInfoStyle}
                                onPress={() => Alert.alert('Route to Wifi Page')}
                            />
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                title='Blutooth'
                                titleInfo='Off'
                                titleInfoStyle={styles.titleInfoStyle}
                                onPress={() => Alert.alert('Route to Blutooth Page')}
                            />
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                title='Cellular'
                                onPress={() => Alert.alert('Route To Cellular Page')}
                            />
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                title='Personal Hotspot'
                                titleInfo='Off'
                                titleInfoStyle={styles.titleInfoStyle}
                                onPress={() => Alert.alert('Route To Hotspot Page')}
                            />
                            <SettingsList.Header headerStyle={{marginTop: 15}}/>
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                title='Notifications'
                                onPress={() => Alert.alert('Route To Notifications Page')}
                            />
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                title='Control Center'
                                onPress={() => Alert.alert('Route To Control Center Page')}
                            />
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                title='Do Not Disturb'
                                onPress={() => Alert.alert('Route To Do Not Disturb Page')}
                            />
                            <SettingsList.Header headerStyle={{marginTop: 15}}/>
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                title='General'
                                onPress={() => Alert.alert('Route To General Page')}
                            />
                            <SettingsList.Item
                                icon={<Icon size={50} name="rocket"/>}
                                title='Display & Brightness'
                                onPress={() => Alert.alert('Route To Display Page')}
                            />
                        </SettingsList>
                    </View>
                </View>
            </PageWrapper>
        );
    }

    onValueChange(value) {
        this.setState({switchValue: value});
    }
}

const styles = {
    header: {
        color: colors.BORDER_GREY
    },
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_APP
    }
};