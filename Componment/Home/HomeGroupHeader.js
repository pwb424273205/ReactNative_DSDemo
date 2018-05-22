
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
  TouchableOpacity
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;

type Props = {};
export default class HomeGroupHeader extends Component<Props> {
  static defaultProps = {
    leftTitle:'',
    leftIcon:'',
    rightTitle:'',
  }
  render() {
    return (
      <TouchableOpacity onPress = {() =>{
        alert('ok')
      }}>
      <View style={styles.container}>
        <View style = {{flexDirection:'row',alignItems:'center',}}>
          <Image source = {{uri:this.props.leftIcon}} style = {{width:23*1.5,height:23*1.5,}}/>
          <Text style = {{marginLeft:10,color:'#666666',fontSize:16,fontWeight:'bold'}}>{this.props.leftTitle}</Text>
        </View>
        <View style = {{flexDirection:'row',alignItems:'center'}}>
          <Text style = {{marginRight:3,color:'#666666',fontSize:14}}>{this.props.rightTitle}</Text>
          <Image source = {{uri:'icon_cell_rightArrow'}} style = {{width:8, height:13,}}/>
        </View>
      </View>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    height:49,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:1,
    backgroundColor: 'white',
  },


});
