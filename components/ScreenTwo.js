import React, { Component } from 'react'
import { View,Text,Button } from 'react-native'
import { connect } from "react-redux";
import { changeText } from "./store/actions/actions";
class ScreenTwo extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:18}}>Screen Two</Text>
        <Text> {this.props.text}</Text>
        <Button title='Change Text' onPress={()=>{
          this.props.changeText()
        }}/>
      </View>
    )
  }
}

function mapStateToProps(state){
  return({
      text:state.rootReducer.text
  })
}

function mapActionToProps(dispatch) {
  return ({
      // closeModal: () => {
      //     dispatch(closeModal())
      // }
      changeText:()=>{
        dispatch(changeText())
    }
  })
}

export default connect(mapStateToProps,mapActionToProps)(ScreenTwo)