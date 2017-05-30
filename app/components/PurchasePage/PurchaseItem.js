/**
 * Created by Murkrow on 5/26/2017.
 */

import {Text, View} from "react-native";
import React, {Component, PropTypes} from "react";
import colors from "../../styles/colors";

export default class PurchaseItem extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    render() {
        const title = this.props.data.title;
        const price = this.props.data.price;
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.priceBox}>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                </View>
            </View>);
    }
}

const styles = {
    container: {
        height: 120,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 8,
        marginTop: 8,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFA500'
    },
    titleContainer: {
        paddingRight: 80,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 18,
        color: 'white'
    },
    priceContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    priceBox:{
        backgroundColor:'green',
        padding:8,
        borderRadius:8
    },
    price: {
        fontSize: 30,
        color: 'white'
    }
};
