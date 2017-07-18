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

class BankPage extends Component {
    render() {
        const {bank} = this.props;
        console.log(bank);

        let item1 = {
            content: "Ngày 20/11/2016 lúc 20h10",
            title: 'Đặt câu hỏi cho Giảng viên Đoàn Phúc Bảo',
            change: -50000,
            isFirst: true
        };
        let item2 = {title: 'Sao Thuỷ Kim Ngưu', change: -50000};
        let item3 = {content: "Ngày 20/11/2016 lúc 20h10", title: 'Mặt trăng Bọ Cạp', change: -50000};
        let item4 = {content: "", title: 'Mở quyền tạo thêm nhiều bản đồ cho bạn bè', change: 50000};
        let item5 = {content: "", title: 'Mặt trăng Bọ Cạp', change: 100000};
        let item6 = {
            content: "Ngày 20/11/2016 lúc 20h10",
            title: 'Mở quyền tạo thêm nhiều bản đồ cho bạn bè',
            change: 50000
        };
        let item7 = {content: "", title: 'Mặt trăng Bọ Cạp', change: -50000};
        let item8 = {content: "", title: 'Mặt trăng Bọ Cạp', change: -50000};
        let item9 = {content: "", title: 'Mặt trăng Bọ Cạp', change: 50000};

        let items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
        const {navigate} = this.props.navigation;
        return (
            <PageWrapper>
                <TopNavigationBar
                    title="Ngân quỹ"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <AccountBox/>
                <ListLog items={items}/>

            </PageWrapper>
        );
    }

    componentWillUpdate(nextProps, nextState) {
        const {actions, profile} = this.props;
        let oldId = profile.profile.id;
        let newId = nextProps.profile.profile.id;
        if (newId !== oldId) {
            actions.fetchTransactionAsync(newId);
        }
    }
}

const rightButton = () => {
    return ({
        title: ''
    });
};

const mapStateToProps = (state) => ({
    bank: state.bank,
    profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(BankPage);
