/**
 * Created by murkrow on 6/9/17.
 */

import {ListView, View} from "react-native";
import React, {Component, PropTypes} from "react";
import AstroObjectItem from "./AstroObjectItem";

export default class ListAstroObject extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        let items = this.props.items;
        if (items.length > 0) {
            items[0].isFirst = true;
        }
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(items);
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={dataSource}
                    renderRow={(rowData) => renderRow(rowData, this.props.navigate)}
                />
            </View>
        );
    }
}

const renderRow = (rowData, navigate) => {
    return (<AstroObjectItem
        navigate={navigate}
        item={rowData}/>)
};

const styles = {
    container: {}
};