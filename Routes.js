import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import { connect } from "react-redux";
import TextInput from './components/TextInput'
import ScreenTwo from './components/ScreenTwo'
class Routes extends React.Component {
  render() {
    return (
      <NativeRouter >
        <View>
            <Route exact path='/' component={TextInput}/>
            <Route path='/second' component={ScreenTwo}/>
        </View>
      </NativeRouter>
    );
  }
}
export default connect(()=>({}),()=>({}))(Routes)