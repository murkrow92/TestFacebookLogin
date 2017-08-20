/**
 * Created by murkrow on 6/10/17.
 */

import PageWrapper from "../Commons/Wrapper";
import React, { Component } from "react";
import TopNavigationBar from "../Commons/TopNavigationBar/index";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import fonts from "../../styles/fonts";
import { APP_MARGIN } from "../../styles/dimens";
import ListPaymentMethod from "./ListPaymentMethod";
import ListProduct from "./ListProduct";
import colors from "../../styles/colors";
import InAppBilling from "react-native-billing";
import { PRODUCT_IDS } from "../../lib/Environment";
import lodash from "lodash";

export default class PaymentPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<PageWrapper>
				<TopNavigationBar
					title="Nạp tiền"
					onPress={() => navigate("DrawerOpen")}
					rightButton={rightButton()}
				/>
				<Text style={styles.textPayMethod}>
					Bạn vui lòng chọn hình thức nạp tiền
				</Text>
				<ListPaymentMethod navigate={navigate} />
				<ScrollView>
					<ListProduct items={this.state.items} />
				</ScrollView>
			</PageWrapper>
		);
	}

	componentDidMount() {
		InAppBilling.getProductDetailsArray(PRODUCT_IDS)
			.then(details => {
				console.log(details);
				this.setState({
					items: details
				});
			})
			.catch(error => console.log(error));
	}
}

const rightButton = () => {
	return {
		title: ""
	};
};

const styles = StyleSheet.create({
	textPayMethod: {
		color: colors.BLACK,
		marginLeft: APP_MARGIN,
		marginTop: 30,
		marginBottom: 10,
		fontSize: 13,
		fontFamily: fonts.HELVETICA
	}
});
