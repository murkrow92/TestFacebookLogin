/**
 * Created by Murkrow on 5/23/2017.
 */

import TopNavigationBarWithBack from "../Commons/TopNavigationBar/TopNavigationBarWithBack";
import React, {Component} from "react";
import PageWrapper from "../Commons/Wrapper";
import PageHeader from "../Commons/PageHeader";
import {Image, View} from "react-native";
import Sagittarius from "../../styles/images/ic_sagittarius.png";

export default class OurAstrologersPage extends Component {
    render() {
        return (
            <PageWrapper>
                <TopNavigationBarWithBack title="Our Astrologers"/>
                <PageHeader title="Our Astrologers"/>
                <View style={styles.container}>
                    <Image source={Sagittarius}/>
                </View>
            </PageWrapper>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};