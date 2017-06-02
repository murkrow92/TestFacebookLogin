/**
 * Created by Murkrow on 6/1/2017.
 */

import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import * as TForm from 'tcomb-form-native';
let Form = TForm.form.Form;

let Person = TForm.struct({
    date: TForm.Number,
    month: TForm.Number,
    year: TForm.Number,
    hour: TForm.Number,
    minute: TForm.Number,
    email: TForm.String,
    phone: TForm.Number
});

let options = {
    auto: 'placeholders',
    fields: {
        email: {
            label: 'Email',
            error: 'Không đúng định dạng Email'
        },
        phone: {
            label: 'Điện thoại',
            placeholder: 'Số điện thoại',
            error: 'Không đúng định dạng Số điện thoại'
        },
        date: {
            placeholder: 'Ngày'
        },
        month: {
            placeholder: 'Tháng'
        },
        year: {
            placeholder: 'Năm'
        } ,
        hour:{
            placeholder:'Giờ'
        },
        minute:{
            placeholder:'Phút'
        }
    }
};

export default class ProfileForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Form
                    ref="form"
                    type={Person}
                    options={options}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#ffffff',
    }
});