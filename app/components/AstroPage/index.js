import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import ButtonIcon from "../Commons/TopNavigationBar/ButtonIcon";
import ListAstroObject from "../Commons/ListAstroObject/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from './AstroActions';
import {ScrollView} from "react-native";

const lodash = require('lodash');

class AstroPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {astro} = this.props;
        const {navigate} = this.props.navigation;
        let title = "Toạ độ";
        return (
            <PageWrapper>
                <TopNavigationBar
                    title={title}
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <ScrollView>
                    {this.renderList(astro.planet, navigate)}
                </ScrollView>
            </PageWrapper>
        );
    }

    renderList(planet, navigate) {
        if (planet.hasOwnProperty("Sun")) {
            let items = getItems(planet);
            return <ListAstroObject
                navigate={navigate}
                items={items}/>
        }
    }

    componentDidMount() {
        const {actions} = this.props;
        const {params} = this.props.navigation.state;
        actions.fetchAstroAtDateAsync(params.date);
    }
}

const getItems = (planet) => {
    return [
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
};

const rightButton = () => {
    return (<ButtonIcon
        icon="chart-pie-1"
        onPress={() => {
        }}/>);
};

const mapStateToProps = (state) => ({
    astro: state.astro,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(AstroPage);