import React, { Component, PropTypes } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { APP_MARGIN } from "../../styles/dimens";
import InAppBilling from "react-native-billing";

export default class ProductItem extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired
	};

	render() {
		const { data } = this.props;
		console.log(data);
		return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.title}>
						{data.title}
					</Text>
					<Text style={styles.description}>
						{data.description}
					</Text>
				</View>
				<TouchableHighlight onPress={() => this.purchase()}>
					<Text style={styles.priceText}>
						{data.priceText}
					</Text>
				</TouchableHighlight>
			</View>
		);
	}

	purchase() {
		const { data } = this.props;
		InAppBilling.subscribe(data.productId);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: APP_MARGIN,
		paddingRight: APP_MARGIN,
		alignItems: "center",
		paddingTop: 8,
		paddingBottom: 8,
		flex: 1,
		flexDirection: "row"
	},
	textContainer: {
		flex: 1,
		flexDirection: "column"
	},
	title: {
		fontFamily: fonts.HELVETICA,
		fontSize: 18,
		color: colors.BLACK
	},
	description: {
		marginTop: 6,
		fontFamily: fonts.HELVETICA,
		fontSize: 13
	},
	priceText: {
		fontFamily: fonts.HELVETICA,
		fontSize: 18,
		color: "white",
		paddingBottom: 10,
		paddingTop: 10,
		paddingLeft: 14,
		paddingRight: 14,
		backgroundColor: colors.BLUE,
		textAlignVertical: "center"
	}
});
