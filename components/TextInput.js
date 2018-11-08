import React, { Component } from 'react'
import { TextInput,StyleSheet,Text,Keyboard,ImageBackground } from 'react-native'
import { changeText } from "./store/actions/actions";
import {connect} from 'react-redux'
import { Container,Button } from "native-base";
class TextInputExample extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            pw:'',
            KeyboardText:''
        }
    }
    componentWillMount(){
        this.KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow',()=>{
            this.setState({
                KeyboardText:'keyboard shown'
            })
        })
        this.KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide',()=>{
            this.setState({
                KeyboardText:'keyboard hidden'
            })
        })
        this.setState({
            email:'',pw:''
        })
    }
    componentWillUnmount(){
        this.KeyboardDidShowListener.remove()
        this.KeyboardDidHideListener.remove()
    }
    render() {
        return (
            <Container style={{padding:20,marginTop:50}}>
            <TextInput style={styles.TextInput} 
            keyboardType='email-address'
            autoFocus={true}
            placeholder='Enter Email Address'
            returnKeyType="done"
            onChangeText={text=>{
                this.setState({
                    email:text
                })
            }}
            value={this.state.email}
            underlineColorAndroid='transparent'
            />
            <Text>{this.state.KeyboardText}</Text>
            <TextInput style={styles.TextInput}
            placeholder='Enter Password'
            onChangeText={text=>{
                this.setState({
                    pw:text
                })
            }}
            value={this.state.pw}
            underlineColorAndroid='transparent'
            secureTextEntry={true}
            />
            <Text style={{fontSize:18}}>
                {this.props.text}
            </Text>
            <Button info rounded full small onPress={()=>{
                this.props.history.push('/second')
            }}>
                <Text style={{fontSize:18}}>
                    Submit
                </Text>
            </Button>
        </Container>
    )
  }
}
const styles=StyleSheet.create({
    TextInput:{
        height:25,
        margin:10,
        padding:5,
        borderColor:'gray',
        borderWidth:1
    }
})

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

export default connect(mapStateToProps,mapActionToProps)(TextInputExample)