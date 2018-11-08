import React, { Component } from 'react'
import { Text, View,Button,Image } from 'react-native'
const backgroundColor='#964f8e'
export default class CloudComponent extends Component {
    static navigationOptions=({navigation})=>{
        const {params ={}} = navigation.state
        let tabBarLabel='Cloud'
        const tabBarIcon=()=>{
            <Image
            source={require('./icons/cloud.png')}
            style={{width:26,height:26,tintColor:backgroundColor}}
            >

            </Image>
        }
        return {tabBarLabel,tabBarIcon}
    }
  render() {
    return (
      <View
      style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:backgroundColor
      }}
      >
        <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}> This is Cloud Screen </Text>
      </View>
    )
  }
}