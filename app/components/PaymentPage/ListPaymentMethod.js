/**
 * Created by murkrow on 6/10/17.
 */

import { ListView, View } from "react-native";
import React, { Component, PropTypes } from "react";
import PaymentMethodItem from "./PaymentMethodItem";

export default class ListPaymentMethod extends Component {
	constructor(props) {
		super(props);
		const { navigate } = this.props;
		let item1 = {
			methodName: "Nạp tiền bằng thẻ VISA/Master ",
			icon: "truck",
			onPress: () => {
				navigate("MethodTransfer");
			}
		};
		let item2 = {
			methodName: "Chuyển khoản",
			icon: "cart-plus",
			onPress: () => {
				navigate("MethodTransfer");
			}
		};

		let items = [item1, item2];
		this.state = {
			items: items
		};
	}

	render() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		const dataSource = ds.cloneWithRows(this.state.items);

		return (
			<View style={styles.container}>
				<ListView
					dataSource={dataSource}
					renderRow={rowData => renderRow(rowData)}
				/>
			</View>
		);
	}
}

const renderRow = rowData => {
	return <PaymentMethodItem data={rowData} />;
};

const styles = {
	container: {}
};
