/**
 * Created by Murkrow on 6/1/2017.
 */

import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import * as TForm from "tcomb-form-native";
import options from "./FormOptions";

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

