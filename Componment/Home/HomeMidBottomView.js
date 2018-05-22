
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
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import {MiddCommonView,} from './HomeMiddleView';

var TopData = require('../../LocalData/HomeTopMiddle.json');
var BottomData = require('../../LocalData/XMG_Home_D4.json');
var ScreenWidth = Dimensions.get('window').width;

type Props = {};
export default class HomeMidBottomView extends Component<Props> {

  static defaultProps = {
    popTopHome: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <MidBottomTop/>
        <View style={styles.bottom}>
          {this.renderBottom()}
        </View>
      </View>
    );
  }

  renderBottom(){
    var itemArr = [];
    var dataArray = BottomData.data;
    for (var i = 0; i < dataArray.length; i++) {
      var data = dataArray[i];
      itemArr.push(
        <MiddCommonView
          key = {i}
          title = {data.maintitle}
          Icon = {this.dealImageUrl(data.imageurl)}
          subTitle = {data.deputytitle}
          titleColor = {data.typeface_color}
          tplurl={data.tplurl}
          callBackClickCell = {(data)=>this.popToTopView(data)}
        />
      )
    }
    return itemArr;
  }

  // 继续往父级界面传递数据
  popToTopView(data){
   // 继续执行回调函数
   this.props.popTopHome(data);
  }

  dealImageUrl(url){
    if (url.search('w.h') == -1) {
      return url;
    } else {
      return url.replace('w.h','64.43');
    }
  }
}

var dataArr = TopData.data;
var data = dataArr[0];

class MidBottomTop extends Component{
  render(){
    return(
      <TouchableOpacity onPress = {() =>{
        alert('ok')
      }}>
      <View style = {{width:ScreenWidth,
        height:59,
        marginBottom:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      }}>
        <View style = {{marginLeft:10}}>
          <Text style = {{fontSize:18,fontWeight:'bold',color:'rgba(255,96,0,1.0)'}}>{data.title}</Text>
          <Text style = {{fontSize:12,fontWeight:'bold',color:'#999999',marginTop:5}}>{data.subTitle}</Text>
        </View>
        <Image source = {{uri:data.image}} style = {{width:120,height:43,marginRight:10}}/>
      </View>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
  },
  bottom:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  top:{

  },

});
