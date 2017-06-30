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
        let items = this.props.items;
        if (items.length > 0){
            items[0].isFirst = true;
        }


        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(items),
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => renderRow(rowData)}
                />
            </View>
        );
    }
}

const renderRow = (rowData) => {
    return (<AstroObjectItem item={rowData}/>)
};

const styles = {
    container: {}
};