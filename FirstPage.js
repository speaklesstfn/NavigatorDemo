/**
 * Created by tfn on 2016/12/29.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Alert, TextInput,} from 'react-native';

import SecondPage from './SecondPage';

export default class FirstPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputString: '',
            resultString: '',
        };
    }

    render() {
        console.log('result from SecondPage is :' + this.state.resultString);
        return <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <TouchableHighlight style={styles.touchable} onPress={this.onPushPressed.bind(this)}>
                <Text style={styles.text}>点击进入下一个界面</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchable} onPress={this.onPopPressed.bind(this)}>
                <Text style={styles.text}>点击返回上一个界面</Text>
            </TouchableHighlight>

            <TextInput
                style={styles.textInput}
                underlineColorAndroid={'transparent'}
                placeholder={'请输入一个数字'}
                onChange={this.onInputChange.bind(this)}
            />


        </View>;
    }

    onPushPressed() {
        let _this = this;
        let {navigator}=this.props;
        if (navigator) {
            navigator.push(
                {
                    title: 'second',
                    component: SecondPage,
                    params: {
                        num: this.state.inputString,
                        getResult: function (result) {
                            _this.setState({resultString: result});
                        }
                    }
                }
            );
        }
    }

    onPopPressed() {
        let {navigator}=this.props;
        if (navigator) {
            if (navigator.getCurrentRoutes().length <= 1) {
                Alert.alert('不能再退后了，到头了！');
            } else {
                navigator.pop();
            }
        }
    }

    onInputChange(event) {
        this.setState({inputString: event.nativeEvent.text});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        height: 30,
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 20,
        backgroundColor: '#48BBEC',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#48BBEC',

    },
    text: {
        height: 20,
        fontSize: 15,
        alignItems: 'center',
    },
    textInput: {
        marginTop: 20,
        height: 30,
        marginHorizontal: 20,
        fontSize: 20,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
});
