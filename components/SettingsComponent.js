import React, { Component } from 'react'
import { Text, View,Button,Image } from 'react-native'
const backgroundColor='#e97600'
export default class SettingsComponent extends Component {
    static navigationOptions=({navigation})=>{
        const {params ={}} = navigation.state
        let tabBarLabel='Settings'
        const tabBarIcon=()=>{
            <Image
            source={require('./icons/settings.png')}
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
        <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}> This is Settings Screen </Text>
      </View>
    )
  }
}