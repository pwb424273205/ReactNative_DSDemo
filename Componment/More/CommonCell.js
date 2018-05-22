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
  Switch,
} from 'react-native';


type Props = {
  title:string,
  image:string,
  isSwitch:boolean,
  rightTitle:string,
};


// CommonCell.defaultP
export default class CommonCell extends Component<Props> {


  static defaultProps = {
    title:'标题',
    image:null,
    isSwitch:false,
    rightTitle:'',
  }

    constructor(props){
      super(props)
      this.state = {
        isOn:false,
      }
    }

  render() {
    return (
      <TouchableOpacity onPress = {()=>{
        alert('点击了')
      }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.title}
        </Text>
        {this.renderRight()}
      </View>
     </TouchableOpacity>
    );
  }

  renderRight(){
      if(this.props.isSwitch){
        return(
             <Switch value = {this.state.isOn == true}
               onValueChange = {()=>{
                 this.setState(
                  {isOn: !this.state.isOn}
               )}}
               style = {{marginRight:10}}/>
           )
      }else {
        return(
            <View style = {{flexDirection:'row',alignItems: 'center'}}>
              {this.rightTitle()}
              <Image source={{uri:'icon_cell_rightArrow'}} style = {{width:8,height:13,marginRight:10}}/>
            </View>
      )}
  }

  rightTitle(){
    if (this.props.rightTitle.length > 0) {
      return(
        <Text style = {{color:'#3d3d3d',marginRight:5,}}>{this.props.rightTitle}</Text>
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
  welcome: {
    color:'#3d3d3d',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 10,
  },

});
