/**
 * Created by murkrow on 6/8/17.
 */

import React, {Component, PropTypes} from 'react';
import config from '../../styles/font_config.json';
import colors from '../../styles/colors';
import {createIconSetFromFontello} from 'react-native-vector-icons';
const BaseIcon = createIconSetFromFontello(config);

export default class Icon extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
    };

    render() {
        return (
            <BaseIcon
                name={this.props.name}
                size={this.props.size}
                color={colors.icon}/>
        );
    }
}
