/**
 * Created by murkrow on 6/10/17.
 */

import PageWrapper from "../Commons/Wrapper";
import React, { Component } from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import AccountBox from "./AccountBox";
import ListLog from "./ListLog";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./BankActions";
import { ScrollView, StyleSheet, Text } from "react-native";

const lodash = require('lodash');

class BankPage extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const { bank } = this.props;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Ngân quỹ"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()} />
                <AccountBox
                    bank={bank}
                />
                {this.renderList()}
            </PageWrapper>
        );
    }

    renderList() {
        const { bank } = this.props;
        if (!lodash.isEmpty(bank.transaction.data)) {
            let items = [];
            lodash.forEach(bank.transaction.data, function (value, key) {
                items.push(value);
            });
            return <ListLog items={items} />
        } else {
            return (<Text style={styles.empty}>
                Vẫn chưa có giao dịch
            </Text>);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        const { actions, profile } = this.props;
        let oldId = profile.data.id;
        let newId = nextProps.profile.data.id;
        if (newId !== oldId) {
            actions.fetchTransactionAsync(newId);
        }
    }
}

const rightButton = () => {
    return ({ title: '' });
};

const mapStateToProps = (state) => ({
    bank: state.bank,
    profile: state.profile
});

const styles = StyleSheet.create({
    empty: {
        alignItems: 'center',
        marginTop: 30,
        textAlign: 'center'
    }
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(BankPage);
