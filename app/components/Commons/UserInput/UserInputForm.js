import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableHighlight, Text, KeyboardAvoidingView} from 'react-native';
calculator = require('../../../../calc');

export default class UserInputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: "",
            month: "",
            year: "",
            result: "",
            showResult: false
        };
    }

    onCalculatePressed() {
        let date = this.state.date;
        let month = this.state.month;
        let year = this.state.year;
        let result = calculator.calc(date, month, year);
        this.setState({result: result, showResult: true});
    }


    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <TextInput
                        placeholder="Ngày" style={styles.input}
                        keyboardType="numeric"
                        onChangeText={(text) => this.setState({date: text})}
                        selectionColor="lightblue"
                        onSubmitEditing={() => this.monthInput.focus()}/>
                    <TextInput
                        placeholder="Tháng" style={styles.input}
                        keyboardType="numeric"
                        onChangeText={(text) => this.setState({month: text})}
                        onSubmitEditing={() => this.yearInput.focus()}
                        selectionColor="lightblue"
                        ref={(input) => this.monthInput = input}/>
                    <TextInput
                        onChangeText={(text) => this.setState({year: text})}
                        placeholder="Năm" style={styles.input}
                        keyboardType="numeric"
                        selectionColor="lightblue"
                        returnKeyType="go"
                        ref={(input) => this.yearInput = input}/>
                    <View style={{alignItems: "center"}}>
                        <TouchableHighlight
                            underlayColor="lightblue"
                            onPress={this.onCalculatePressed.bind(this)}
                            style={styles.buttonContainer}>
                            <Text
                                style={styles.buttonText}>
                                Tính thử phát
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.result}>
                        {
                            this.state.showResult &&
                            <Text>Tử khí của bạn: {this.state.result}</Text>
                        }

                    </View>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        paddingHorizontal: 10,
        marginBottom: 20,
        opacity: 0.7,
        height: 40,
        backgroundColor: 'white'
    },
    buttonContainer: {
        width: 100,
        alignItems: "center",
        paddingVertical: 10,
        opacity: 0.6,
        backgroundColor: "white"
    },
    buttonText: {
        textAlign: "center",

    },
    result: {
        marginTop: 10
    }


});

