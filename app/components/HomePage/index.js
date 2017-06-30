/**
 * Created by Murkrow on 6/9/2017.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";
import ListAstroObject from "../Commons/ListAstroObject/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from './HomeActions';
import {ScrollView} from "react-native";

class HomePage extends Component {

    constructor(props) {
        super(props);
        const {actions} = this.props;
        actions.fetchAstroAsync();
    }

    render() {
        const {home, action} = this.props;
        const {navigate} = this.props.navigation;

        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Bầu trời lúc này"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <ScrollView>
                    {this.renderList(home.planet)}
                </ScrollView>
            </PageWrapper>
        );
    }

    renderList(planet) {
        if (planet.hasOwnProperty("Sun")) {
            console.log(planet);
            let items = getItems(planet);
            return <ListAstroObject items={items}/>
        }
    }
}

const getItems = (planet) => {
    let items = [
        planet.Ascendant,
        planet.Sun,
        planet.Moon,
        planet.PurpleAir,
        planet.Mercury,
        planet.Mars,
        planet.Venus,
        planet.Jupiter,
        planet.Saturn,
        planet.Uranus,
        planet.Neptune,
        planet.Pluto,
        planet.MC,
        planet["true Node"],
        planet.SouthNode,
        planet.Chiron];
    items[0].isFirst = true;
    return items;
};

const rightButton = () => {
    return (<ButtonIcon
        icon="chart-pie-1"
        onPress={() => {
        }}/>);
};

const mapStateToProps = (state) => ({
    home: state.home,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

