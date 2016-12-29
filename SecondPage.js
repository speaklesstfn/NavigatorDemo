/**
 * Created by tfn on 2016/12/29.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Alert,} from 'react-native';

export default class SecondPage extends Component {

    render() {
        console.log('number from FirstPage is :' + this.props.num);
        return <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <TouchableHighlight style={styles.touchable} onPress={this.onPushPressed.bind(this)}>
                <Text style={styles.text}>点击进入下一个界面</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchable} onPress={this.onPopPressed.bind(this)}>
                <Text style={styles.text}>点击返回上一个界面</Text>
            </TouchableHighlight>
        </View>;
    }

    onPushPressed() {
        Alert.alert('不能再往前了，到头了！');
    }

    onPopPressed() {
        //通过在当前页操作上一页的回调方法实现数据回传
        if (this.props.getResult) {
            let number = Number(this.props.num);
            let result = number + 65;
            this.props.getResult(result);
        }

        let {navigator}=this.props;
        if (navigator) {
            if (navigator.getCurrentRoutes().length <= 1) {
                Alert.alert('不能再退后了，到头了！');
            } else {
                navigator.pop();
            }
        }
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

    },
    text: {
        height: 20,
        fontSize: 15,
        alignItems: 'center',
    },
});
