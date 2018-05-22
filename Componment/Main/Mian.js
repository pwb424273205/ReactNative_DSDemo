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
} from 'react-native';

import Home from '../Home/Home';
import Mine from '../Mine/Mine';
import More from '../More/More';
import Shop from '../Shop/Shop';
import TabNavigator from 'react-native-tab-navigator'

import {Navigator} from 'react-native-deprecated-custom-components'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {

};
export default class Main extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
      selectTab : 'home'
    }
  }

  render() {
    return (
    <TabNavigator>
      {this.renderTabarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
      {this.renderTabarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
      {this.renderTabarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
      {this.renderTabarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
    </TabNavigator>
    );
  }

  renderTabarItem(title,icon,selectIcon,selectTab,componentName,component){
    return(
      <TabNavigator.Item
        title = {title}
        selectedTitleStyle = {styles.selectedTitleStyle}
        selected = {this.state.selectTab === selectTab}
        onPress = {()=> {this.setState({selectTab : selectTab})}}
        renderIcon = {()=> <Image source = {{uri:icon}} style = {styles.iconStyle}/>}
        renderSelectedIcon = {()=> <Image source = {{uri:selectIcon}} style = {styles.iconStyle}/>}
        >
          <Navigator
            initialRoute = {{name:componentName,component:component}}
            configureScene ={()=>{
                return Navigator.SceneConfigs.PushFromRight;
              }
            }
            renderScene = {(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.passProps} navigator = {navigator}/>;
              }
            }
        />
      </TabNavigator.Item>
    )
  }

}

const styles = StyleSheet.create({
  iconStyle:{
    width:Platform.OS === 'ios' ? 30 : 25,
    height:Platform.OS === 'ios' ? 30 : 25,
  },
  selectedTitleStyle:{
    color:'orange',
  }
});
