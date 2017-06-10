/**
 * Created by murkrow on 6/10/17.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import AccountBox from "./AccountBox";
import ListLog from "./ListLog";

export default class BankPage extends Component {
    render() {
        let item1 = {content: "Ngày 20/11/2016 lúc 20h10", title: 'Đặt câu hỏi cho Giảng viên Đoàn Phúc Bảo', change: -50000, isFirst: true};
        let item2 = { title: 'Sao Thuỷ Kim Ngưu', change: -50000};
        let item3 = {content: "Ngày 20/11/2016 lúc 20h10", title: 'Mặt trăng Bọ Cạp', change: -50000};
        let item4 = {content: "", title: 'Mở quyền tạo thêm nhiều bản đồ cho bạn bè', change: 50000};
        let item5 = {content: "", title: 'Mặt trăng Bọ Cạp', change: 100000};
        let item6 = {content: "Ngày 20/11/2016 lúc 20h10", title: 'Mở quyền tạo thêm nhiều bản đồ cho bạn bè', change: 50000};
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
}

const rightButton = () => {
    return ({
        title: ''
    });
};
