import { ListView, View } from "react-native";
import React, { Component, PropTypes } from "react";
import ProductItem from "./ProductItem";

export default class ListProduct extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired
	};

	constructor(props) {
		super(props);
	}

	render() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		const dataSource = ds.cloneWithRows(this.props.items);

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
	return <ProductItem data={rowData} />;
};

const styles = {
	container: {}
};
