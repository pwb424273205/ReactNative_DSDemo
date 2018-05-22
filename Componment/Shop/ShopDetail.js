
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
  WebView,
} from 'react-native';


type Props = {};
export default class ShopDetail extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
        detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigaBarShop
          popToView = {()=>{this.goBackView()}}
          title = {this.props.title}
        />
      <WebView
        automaticallyAdjustContentInsets={true}
        source={{uri:this.state.detailUrl}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
      />
      </View>
    );
  }
  goBackView(){
    this.props.navigator.pop();
  }

}

class  NavigaBarShop extends Component {
  static defaultProps = {
    popToView:null,
    title:''
  }
  render(){
    return(
      <View style = {{height:64,flexDirection:'row',backgroundColor:'rgba(255,96,0,1.0)',justifyContent:'center',paddingTop: 20,alignItems:'center'}}>
        <TouchableOpacity onPress = {() =>{this.popToGoBack()}
        } style = {{position:'absolute',left:10,top:32}}>
          <Image source = {{uri:'icon_shop_local'}} style = {{width:23,height:23}}/>
        </TouchableOpacity>
        <Text style = {{fontSize:20,color:'white'}}>{this.props.title}</Text>
        <TouchableOpacity onPress = {() =>{

        }} style = {{position:'absolute',right:10,top:32}}>
        <Image source = {{uri:'icon_shop_search'}} style = {{width:23,height:23}}/>
        </TouchableOpacity>
      </View>
    )
  }

  popToGoBack(){
    if(this.props.popToView == null) return;
    this.props.popToView();
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e8e8e8',
  },


});
