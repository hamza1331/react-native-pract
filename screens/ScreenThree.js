import React from 'react'
import { Text,View,Button } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default class ThirdScreen extends React.Component{
    static navigationOptions={
        tabBarLabel:'Screen 3',
        drawerIcon:({tintColor})=>{
            return(
                <MaterialIcons
                name='polymer'
                size={24}
                style={{color:tintColor}}
                >
                </MaterialIcons>
            )
        }
    }
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Text style={{
                fontSize:30,
                color:'blue'
            }}>
                Screen 3
            </Text>
            <Button
            onPress={()=>this.props.navigation.openDrawer()}
            title='Navigate to Drawer'
            />
            </View>
        )
    }
}