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
  ScrollView,
  Dimensions,
} from 'react-native';
import CommonIconCell from './CommonIconCell'

var ScreenWidth = Dimensions.get('window').width;
var mineData = require('./mindData.json')

type Props = {};
export default class Mine extends Component<Props> {
  render() {
    return (
      <ScrollView
        contentContainerStyle = {styles.container}
        // contentInset = {{top:-200}}
        // contentOffset = {{y:200}}
        >

        <View>
          {/* <View style = {{height:200 ,  backgroundColor:'rgba(255,255,255,0.3)'}}></View> */}
          <HeaderTop/>
          <HeaderBottom/>
          <CommonIconCell
            leftTitle ='我的订单'
            rightTitle = '查看全部订单'
            leftIconName = 'collect'
          />
          <MineMindView/>
        </View>

        <View style = {{marginTop:10}}>
          <CommonIconCell
            leftTitle ='我的钱包'
            rightTitle = '账户余额:¥100.00'
            leftIconName = 'draft'
          />
          <CommonIconCell
            leftTitle ='抵用券'
            rightTitle = '0'
            leftIconName = 'like'
          />
        </View>

        <View style = {{marginTop:10}}>
          <CommonIconCell
            leftTitle ='积分商城'
            leftIconName = 'card'
          />
        </View>

        <View style = {{marginTop:10}}>
          <CommonIconCell
            leftTitle ='今日推荐'
            leftIconName = 'new_friend'
            rightIconName = 'me_new'
          />
        </View>

        <View style = {{marginTop:10}}>
          <CommonIconCell
            leftTitle ='我要合作'
            leftIconName = 'pay'
            rightTitle = '轻松开店,招财进宝'
          />
        </View>

      </ScrollView>
    );
  }
}

class HeaderBottom extends Component{
  render(){
    return(
      <View style = {{flexDirection:'row',backgroundColor:'rgba(255,96,0,1.0)',}}>
        {this.renderHeaderBottomItem()}
      </View>
    )
  }

  renderHeaderBottomItem(){
    var bottomArr = [];
    var bottomData = [{'number':'100',title:'优惠券'},{'number':'3',title:'评价'},{'number':'3',title:'收藏'}]
    for (var i = 0; i < bottomData.length; i++) {
      var data = bottomData[i]
      bottomArr.push(
        <View key = {i} style = {{width:(ScreenWidth/3)+1,
          height:50,
          backgroundColor:'rgba(255,255,255,0.3)',
          justifyContent:'center',
          alignItems:'center',
          borderRightWidth:1,
          borderRightColor:'white',
        }}>
          <Text style = {{color:'white'}}>{data.number}</Text>
          <Text style = {{color:'white',marginTop:3}}>{data.title}</Text>
        </View>
      );
    }
    return bottomArr;
  }
}

class BottomItem extends Component{
  render(){
    return{

    }
  }
}

class HeaderTop extends Component{
  render(){
    return(
      <View style = {{height:120,backgroundColor:'rgba(255,96,0,1.0)',flexDirection:'row',paddingTop:20,alignItems:'center',paddingTop:20}}>
        <Image source = {{uri:'see'}} style = {{width:70,height:70,borderRadius:35,marginLeft:20, borderWidth:3,borderColor:'rgba(205,205,205,0.5)',}}/>
        <Text style = {{marginLeft:8,color:'white',fontWeight:'bold',fontSize:20}}>吃鸡大兄弟</Text>>
        <Image source = {{uri:'avatar_vip'}} style = {{marginLeft:3,width:18,height:18,borderRadius:9}}/>
        <Image source={{uri:'icon_cell_rightArrow'}} style = {{width:8,height:13,position:'absolute',right:10,top:60}}/>
      </View>
    )
  }
}

class MineMindView extends Component{
  render(){
    return(
      <View style = {styles.mineMindView}>
        {this.renderAllItem()}
      </View>
    )
  }
  renderAllItem(){
    var itemArr = [];
    for (var i = 0; i < mineData.length; i++) {
      var data = mineData[i];
      itemArr.push(
        <ItemView
          key = {i}
          iconImage = {data.icon}
          title = {data.title}
        />
      );
    }
    return  itemArr;
  }
}

class ItemView extends Component {
  static defaultProps = {
    iconImage:'',
    title:'',
  }
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <View style = {{marginTop:12,marginBottom:12,width:ScreenWidth/4, alignItems: 'center'}}>
        <Image source = {{uri:this.props.iconImage}} style = {{width:66/1.5, height:49/1.5}}/>
        <Text style = {{textAlign:'center',marginTop:5,color:'#666666'}}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  mineMindView:{
    flexDirection :'row',
    // alignItems :'center',
    backgroundColor:'white',
    // justifyContent: 'space-around',
  }
});
