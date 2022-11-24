import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'


export const Signup = () => {
  return (
    <View style={styles.container}>
      <View >
      <Text style={styles.signupText}>Signup</Text>

      </View >
      <View style={styles.textFieldContainer}>
        <TextField iconName={'person'} name={'first name'} placeHolder={'First Name'} />
        <View style={styles.inputField}>
        <TextField iconName={'person'} name={'last name'} placeHolder={'Last Name'} />
        </View>
        <View style={styles.inputField}>
        <TextField iconName={'mail'} name={'email'} placeHolder={'E-mail Address'}  />
        </View>
        <View style={styles.inputField}>
        <TextField iconName={'lock-closed'} name={'password1'} placeHolder={'Password'} secureTextEntry={true} />
        </View>
        <View style={styles.inputField}>
        <TextField iconName={'lock-closed'} name={'password2'} placeHolder={'Re-enter Password'} secureTextEntry={true} />
        </View>
        </View>
        <View style={styles.btnContainer}>
          <Button btnTitle={'Signup'} btnBackgroundColor={'#206af5'}/>
        </View>
         <Text style={{marginTop:10,textDecorationLine:'underline'}}>Already Signup?</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding: 30,
  },
  inputField:{
    marginTop:-40
  },
  signupText:{
    marginTop:-30,
     color:'#206af5',
     fontSize:30,
     fontWeight:'bold'
  },
  textFieldContainer:{
    paddingTop:60,

  },
  btnContainer:{
    paddingTop:20,
    
  }
})