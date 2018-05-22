
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
  TouchableOpacity
} from 'react-native';


type Props = {
  leftIconName:string,
  leftTitle:string,
  rightIconName:string,
  rightTitle:string,
};
export default class CommonIconCell extends Component<Props> {

  static defaultProps = {
    leftIconName:'',
    leftTitle:'',
    rightIconName:'',
    rightTitle:'',
  }
  constructor(props){
    super(props)
  }

  render() {
    return (
      <TouchableOpacity onPress = {()=>{
        alert('点击了')
      }}>
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Image source = {{uri:this.props.leftIconName}} style = {{width:24,height:24,marginLeft:10,marginRight:10,borderRadius:12}}/>
          <Text style={styles.leftText}>{this.props.leftTitle}</Text>
        </View>
        {this.renderRight()}
      </View>
      </TouchableOpacity>
    );
  }

  renderRight(){
    return(
      <View style={styles.rightView}>
        {this.renderRightContent()}
        <Image source = {{uri:'icon_cell_rightArrow'}} style = {{width:8,height:13,marginLeft:3,marginRight:10}}/>
      </View>
    )
  }

  renderRightContent(){
    if (this.props.rightIconName.length == 0) {
      return(
        <Text style={styles.rightText}>{this.props.rightTitle}</Text>
      )
    }else {
      return(
        <Image source ={{uri:this.props.rightIconName}} style = {{width:24,height:13}}/>
      )
    }
  }

}

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderBottomColor:'#dddddd',
    borderBottomWidth:0.3,
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftView:{
    flexDirection:'row',
    alignItems: 'center',
    // backgroundColor:'red',
  },
  rightView:{
    flexDirection:'row',
    alignItems: 'center',
    // backgroundColor:'blue',
  },
  leftText:{
    color:'#3d3d3d',
    fontSize: 16,
  },
  rightText:{
    color:'#666666',
    fontSize: 12,
  }

});
