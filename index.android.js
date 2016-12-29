/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
} from 'react-native';

import FirstPage from './FirstPage';

export default class NavigatorDemo extends Component {
    render() {
        return (
            <Navigator
                style={styles.container}

                // initialRoute是初始化的路由信息，在这里我们可以自定义任何想要的属性，比如我这里定义了一个
                // title和component属性，title用于识别当前的路由，类似id的作用，component表示当前导航器
                // 显示的组件信息，也是一个场景
                initialRoute={{title:'first',component:FirstPage}}

                // configureScene是用来配置不同场景跳转时的动画信息的
                // 默认返回的是Navigator.SceneConfigs.PushFromRight
                configureScene={(route,routeStack) => Navigator.SceneConfigs.FloatFromRight}

                // renderScene是导航器组件最重要的属性，它用来定义当前显示的组件
                // 我们就是在这里返回需要显示的组件
                // 调用的参数一个是route路由，一个是navigator导航器，路由中含有我们前面定义的initialRoute中的属性
                // 导航器是返回的当前的导航器对象，主要用来跳转时push和pop使用
                // 函数返回一个我们需要渲染的场景（组件）
                renderScene={(route,navigator)=>{
                    return (
                        // 我们要渲染第场景使用route.component，直接使用我们初始化路由时定义的component属性
                        // 避免了因为不同的场景而在这里进行switch判断或if判断
                        <route.component {...route.params} title={route.title} navigator={navigator}/>
                    );
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
