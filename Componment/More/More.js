/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import CommonCell from './CommonCell'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class More extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <NavigatBar/>

        <ScrollView>
          <View style = {{marginTop :10}}>
            <CommonCell title = '扫一扫'/>
          </View>

          <View style = {{marginTop :10}}>
            <CommonCell title = '省流量模式' isSwitch = {true}/>
            <CommonCell title = '消息提醒'/>
            <CommonCell title = '邀请好友'/>
            <CommonCell title = '清空缓存' rightTitle = '1.99M'/>
          </View>

          <View style = {{marginTop :10}}>
            <CommonCell title = '联系我们'/>
            <CommonCell title = '意见反馈'/>
            <CommonCell title = '支付帮助'/>
            <CommonCell title = '网络诊断'/>
            <CommonCell title = '问卷调查'/>
            <CommonCell title = '关于码团'/>
            <CommonCell title = '我要应聘'/>
          </View>

          <View style = {{marginTop :10}}>
            <CommonCell title = '精品应用'/>
            <CommonCell title = '版本信息'/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class NavigatBar extends Component{
  render(){
    return(
      <View style = {styles.navStyle}>
        <Text style = {styles.textStyle}>更多</Text>
        <TouchableOpacity style = {styles.rightStyle}>
          <Image source = {{uri:'icon_mine_setting'}} style = {styles.imgStyle}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#e8e8e8',
  },
  navStyle:{
    height:Platform.OS == 'ios' ? 64 :44,
    backgroundColor:'rgba(255,96,0,1.0)',
    flexDirection:'row',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent:'center',
  },
  textStyle:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  },
  imgStyle:{
    // marginRight:10,
    // position:'absolute',
    width:28,
    height:28
  },
  rightStyle:{
    position:'absolute',
    right:10,
    top:26,
  }

});
