
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
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

var ScreenWidth = Dimensions.get('window').width;

import HomeGroupHeader from './HomeGroupHeader'

var shop_Data = require('../../LocalData/XMG_Home_D5.json')


type Props = {};
export default class HomeShopCenter extends Component<Props> {
  static defaultProps = {
    popToHomeView:null,
  }
  render() {
    return (
      <View style={styles.container}>
        <HomeGroupHeader
          leftTitle  = '购物中心'
          leftIcon = 'gw'
          rightTitle = {shop_Data.tips}
        />

        <ScrollView
            style={styles.scrollViewStyle}
            horizontal={true} // 横向
            showsHorizontalScrollIndicator={false}
            >
            {this.renderAllItem()}
        </ScrollView>
      </View>
    );
  }

  renderAllItem(){
    var itemArr = [];
    var shopData = shop_Data.data;
    for (var i = 0; i < shopData.length; i++) {
       var  data =  shopData[i]
       itemArr.push(
         <ShopCenterItem
           shopImage = {data.img}
           shopSale = {data.showtext.text}
           shopName = {data.name}
           detailurl = {data.detailurl}
           popToShopCenter = {(url,title) => {this.popToHome(url,title)}}
           key={i}
         />
       )
    }
    return itemArr;
  }

   popToHome(url,title){
     if(this.props.popToHomeView == null) return;
     this.props.popToHomeView(url,title);
   }
}

class ShopCenterItem extends Component{

  static defaultProps = {
    shopImage: '',
    shopSale:'',
    shopName: '',
    detailurl:'',
    popToShopCenter:null,
  }
    render(){
      return(
        <TouchableOpacity onPress = {() =>this.clickItem(this.props.detailurl,this.props.shopName)}>
        <View style = {{margin:10,}}>
          <Image source = {{uri:this.props.shopImage}} style = {{width:ScreenWidth/3-20,height:(ScreenWidth/3-20)/1.2,borderRadius:8}}/>
          <Text style = {styles.textStyle}>{this.props.shopSale}</Text>
          <Text style = {{color:'#666666',marginTop:8,fontSize:14}}>{this.props.shopName}</Text>
        </View>
        </TouchableOpacity>
      )
    }

    clickItem(url,title){
      if(this.props.detailurl == null) return;
      this.props.popToShopCenter(url,title);
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    backgroundColor:'#e8e8e8'
  },
  scrollViewStyle:{
    backgroundColor:'white',
    // marginTop:1,
    // padding:10,
  },
  textStyle:{
    backgroundColor:'orange',
    position:'absolute',
    top:(ScreenWidth/3-20)/1.2 -30,
    color:'white',
  }

});
