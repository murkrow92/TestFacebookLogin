/**
 * Created by murkrow on 6/10/17.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import AccountBox from "./AccountBox";
import ListLog from "./ListLog";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "./BankActions";
import {ScrollView} from "react-native";

const lodash = require('lodash');

class BankPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        const {bank} = this.props;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Ngân quỹ"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <AccountBox
                    bank={bank}
                />
                <ScrollView>
                    {this.renderList()}
                </ScrollView>

            </PageWrapper>
        );
    }

    renderList() {
        const {bank} = this.props;
        if (!lodash.isEmpty(bank.transaction)) {
            let items = [];
            lodash.forEach(bank.transaction.data, function (value, key) {
                items.push(value);
            });
            return <ListLog items={items}/>
        }
    }

    componentWillUpdate(nextProps, nextState) {
        const {actions, profile} = this.props;
        let oldId = profile.data.id;
        let newId = nextProps.profile.data.id;
        if (newId !== oldId) {
            actions.fetchTransactionAsync(newId);
        }
    }
}

const rightButton = () => {
    return ({title: ''});
};

const mapStateToProps = (state) => ({
    bank: state.bank,
    profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(BankPage);
