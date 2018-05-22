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
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';

import HomeDetail from './HomeDetail'
import HomeTopView from './HomeTopView'
import HomeMiddleView from './HomeMiddleView'
import HomeMidBottomView from './HomeMidBottomView'
import HomeShopCenter from './HomeShopCenter'
import HomeYouLike from './HomeYouLike'
import ShopDetail from '../Shop/ShopDetail'

var ScreenWidth = Dimensions.get('window').width;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        <ScrollView>
          <HomeTopView/>
          <HomeMiddleView/>
          <HomeMidBottomView
            popTopHome={(data)=>{this.pushToDetail(data)}}
          />
        <HomeShopCenter
          popToHomeView = {(url,title) =>{this.pushToShopDetail(url,title)}}
        />
        <HomeYouLike/>
        </ScrollView>
      </View>
    );
  }


  renderNavBar(){
    return(
     <View style = {styles.navbarStyle}>
           <TouchableOpacity onPress = {()=>{alert('点击了')}}>
              <Text style = {styles.textStyle}>长沙</Text>
           </TouchableOpacity>
           <TextInput
            placeholder = '输入商品,商圈,等'
            style = {styles.inputStyle}
          />
          <View style = {styles.imgStyle}>
           <TouchableOpacity onPress = {()=>{alert('点击了')}}>
             <Image source = {{uri:'icon_homepage_message'}} style = {styles.navleftImag}/>
           </TouchableOpacity>
           <TouchableOpacity onPress = {()=>{alert('点击了')}}>
             <Image source = {{uri:'icon_homepage_scan'}} style = {styles.navrightImag}/>
           </TouchableOpacity>

         </View>
    </View>
  )
}

  dealUrl(url){
    return url.replace('imeituan://www.meituan.com/web/?url=', '');
  }

  pushToShopDetail(url,title){
    alert(title);
    this.props.navigator.push({
      component:ShopDetail,
      title : '商品详情',
      passProps:{'url':this.dealUrl(url),'title':title},
    })
  }

  pushToDetail(data){
    alert(data);
    this.props.navigator.push({
      component:HomeDetail,
      title : '详情页'
    })}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  navbarStyle:{
    height:Platform.OS == 'ios'? 64 :44,
    backgroundColor:'rgba(255,96,0,1.0)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
  },
  textStyle:{
    marginTop:20,
    color:'white',
  },
  inputStyle:{
    width:ScreenWidth *0.7,
    height:36,
    backgroundColor:'white',
    marginTop:Platform.OS == 'ios'? 20 :0,
    borderRadius:15,
    paddingLeft:15,
  },
  imgStyle:{
    marginTop:Platform.OS == 'ios'? 20 :0,
    height:44,
    // backgroundColor:'blue',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:2,
  },
  navleftImag:{
    width:28,
    height:28,
  },
  navrightImag:{
    marginLeft:6,
    width:28,
    height:28,
  },
});
