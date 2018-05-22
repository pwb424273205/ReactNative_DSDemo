
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
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';
var TopMun = require('../../LocalData/TopMenu.json')
var ScreenWidth = Dimensions.get('window').width;
type Props = {};

export default class HomeTopView extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
      pageIndex:0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal = {true}
          pagingEnabled = {true}
          showsHorizontalScrollIndicator = {false}
          onMomentumScrollEnd = {this.onScrollAnimationEnd.bind(this)}
          >
          {this.renderSubView()}
        </ScrollView>
        <View style={styles.indicator}>
          {this.renderIndicator()}
        </View>
      </View>
    );
  }

  renderIndicator(){
    var indcatorArr = [],style;
    var indArr = TopMun.data;
    for (var i = 0; i < indArr.length; i++) {
        style = (i === this.state.pageIndex) ? {color:'rgba(255,96,0,1.0)'}:{color:'#e8e8e8'};
        indcatorArr.push(
          <Text key = {i} style ={[{fontSize:18},style]}>&bull;</Text>
        )
    }
    return indcatorArr;
  }

  onScrollAnimationEnd(e){
    var currentPage = Math.floor(e.nativeEvent.contentOffset.x/ScreenWidth);
     this.setState({pageIndex : currentPage})
  }

  renderSubView(){
    var itemArr = [];
    var topArr = TopMun.data;
    for (var i = 0; i < topArr.length; i++) {
      itemArr.push(
        <ListHader dataArray = {topArr[i]} key = {i} />
    )}
    return itemArr;
  }
}

export class ListHader extends Component {
  static defaultProps ={
    dataArray:[],
  }
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
    this.state = {
       dataSource : ds.cloneWithRows(this.props.dataArray)
     }
  }
  render(){
    return(
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.rendreRow}
        contentContainerStyle = {styles.listView}
        scrollEnabled = {false}
      />
    )
  }
  rendreRow(rowData){
    return(
      <TouchableOpacity onPress = {()=>{
        alert('0')
      }}>
      <View style = {styles.cellItem}>
        <Image source = {{uri:rowData.image}} style = {{width:52,height:52}}/>
        <Text style = {{color:'#666666',marginTop:3}}>{rowData.title}</Text>
      </View>
     </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    marginBottom:10,
  },
  indicator:{
    flexDirection:'row',
    justifyContent:'center',
  },
  listView:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:ScreenWidth,
  },
  cellItem:{
    width:ScreenWidth/5,
    height:ScreenWidth/5,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  }
});
