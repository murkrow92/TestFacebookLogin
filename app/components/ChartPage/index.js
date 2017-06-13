/**
 * Created by murkrow on 6/13/17.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";
import {Image, StyleSheet} from "react-native";
import Chart from "../../styles/images/bg.jpg";

export default class ChartPage extends Component {
    render() {

        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Bản đồ"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <Image source={Chart} style={styles.chart}/>
            </PageWrapper>
        );
    }
}

const rightButton = () => {
    return (<ButtonIcon icon="chart-pie-1" onPress={() => {
    }}/>);
};

const styles = StyleSheet.create({
    chart: {
        width: '100%',
        height: '100%'
    }

});
