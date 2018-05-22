
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
  Dimensions,
  TouchableOpacity,
} from 'react-native';

var ScreenWidth = Dimensions.get('window').width;
var topMidData = require('../../LocalData/HomeTopMiddleLeft.json')

type Props = {};
export default class HomeMiddleView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {this.renderLeftView()}
        <View>
        {this.renderRightView()}
        </View>
      </View>
    );
  }
  renderLeftView(){
    var data = topMidData.dataLeft[0];
    return(
      <TouchableOpacity onPress= {()=>{alert("OK")}}>
      <View style = {{width:ScreenWidth*0.5,height:119,backgroundColor:'white',marginRight:1,alignItems:'center',justifyContent:'center'}}>
        <Image source = {{uri:data.img1}} style = {{width:120,height:30,resizeMode:'contain',}}/>
        <Image source = {{uri:data.img2}} style = {{width:120,height:30,resizeMode:'contain',}}/>
        <Text style = {{color:'#999999',}}>{data.title}</Text>
        <View style = {{flexDirection:'row',marginTop:5}}>
          <Text style = {{color:'blue',marginRight:5,}}>{data.price}</Text>
          <Text style = {{color:'orange',backgroundColor:'yellow',}}>{data.sale}</Text>
        </View>
      </View>
     </TouchableOpacity>
    )
  }

  renderRightView(){
    var itemArr = [];
    var data = topMidData.dataRight;
    for (var i = 0; i < data.length; i++) {
      var itemData = data[i];
      itemArr.push(
        <MiddCommonView key = {i}
          title = {itemData.title}
          subTitle = {itemData.subTitle}
          Icon = {itemData.rightImage}
          titleColor = {itemData.titleColor}
        />
      )
    }
    return itemArr;
  }
}

export class MiddCommonView extends Component {
  static defaultProps ={
    title:'',
    subTitle:'',
    Icon:'',
    titleColor:'',
    tplurl: '',
    callBackClickCell: null
  }
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <TouchableOpacity onPress= {()=>this.clickCell(this.props.tplurl)}>
      <View style = {{width:ScreenWidth/2 - 1,
        height:59,
        marginBottom:1,
        marginRight:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
      }}>
        <View>
          <Text style = {{fontSize:18,fontWeight:'bold',color:this.props.titleColor}}>{this.props.title}</Text>
          <Text style = {{fontSize:12,fontWeight:'bold',color:'#999999',marginTop:5}}>{this.props.subTitle}</Text>
        </View>
        <Image source = {{uri:this.props.Icon}} style = {{width:64,height:43,}}/>
      </View>
      </TouchableOpacity>
    )
  }

  // 点击了cell
  clickCell(data){
    // 判断处理
    if (this.props.callBackClickCell == null) return;
   // 执行回调函数
   this.props.callBackClickCell(data);
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#e8e8e8',
  },
});
