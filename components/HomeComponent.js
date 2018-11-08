/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
HomeComponent is a "tab"
*/
import React, { Component } from 'react';
// import { Info } from '../screenNames';
import {
    Text, View, Image,Button
} from 'react-native';
const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {    
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Home';   
        let tabBarIcon = () => (
            <Image
                source={require('./icons/home.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );    
        return { tabBarLabel, tabBarIcon };
    }
    render() {        
        return (<View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                This is Home Screen
            </Text>
           
        </View>);
    }
}