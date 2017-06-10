/**
 * Created by murkrow on 6/10/17.
 */

import PageWrapper from "../Commons/Wrapper";
import React, {Component} from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import {Text, View, StyleSheet} from "react-native";
import fonts from "../../styles/fonts";
import {APP_MARGIN} from "../../styles/dimens";
import ListPaymentMethod from "./ListPaymentMethod";
import colors from "../../styles/colors";

export default class PaymentPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        let item1 = {
            methodName: 'Nạp tiền bằng thẻ VISA/Master ',
            icon: "truck",
            onPress: () => {
                navigate("MethodTransfer");
            }
        };
        let item2 = {
            methodName: 'Chuyển khoản',
            icon: "cart-plus",
            onPress: () => {
                navigate("MethodTransfer");
            }
        };

        let items = [item1, item2];
        return (

            <PageWrapper>
                <TopNavigationBar
                    title="Nạp tiền"
                    onPress={() => navigate('DrawerOpen')}
                    rightButton={rightButton()}/>
                <Text style={styles.textPayMethod}> Bạn vui lòng chọn hình thức nạp tiền</Text>
                <ListPaymentMethod items={items}/>
            </PageWrapper>
        );
    }
}

const rightButton = () => {
    return ({
        title: ''
    });
};

const styles = StyleSheet.create(
    {
        textPayMethod: {
            color: colors.BLACK,
            marginLeft: APP_MARGIN,
            marginTop: 30,
            marginBottom: 10,
            fontSize: 13,
            fontFamily: fonts.HELVETICA

        }
    }
);
