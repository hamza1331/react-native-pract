import React from 'react'
import { Button,Text,Platform,ScrollView,StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'
import ScreenThree from './screens/ScreenThree'
import ScreenFour from './screens/FourthScreen'
const DrawerExample = createDrawerNavigator({
    First:{
        path:'/',
        screen:ScreenOne
    },
    Second:{
        path:'/sent',
        screen:ScreenTwo
    },
    ScreenThree:{
        path:'/third',
        screen:ScreenThree
    },
    ScreenFour:{
        screen:ScreenFour,
        path:'/fourth'
    }
},
{
    drawerPosition:'left',
    initialRouteName:'First',
    contentOptions:{
        activeTintColor:'red'
    }
})
export default DrawerExample