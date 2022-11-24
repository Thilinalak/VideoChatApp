import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'


export const Signin = () => {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.signinText}>Signin</Text>
      </View >
        <TextField iconName={'person'} name={'username'} placeHolder={'Username'} />
        <View style={styles.inputField}>
        <TextField iconName={'lock-closed'} name={'password'} placeHolder={'Password'} secureTextEntry={true} />
        </View>
        <View>
          <Button btnTitle={'Signin'} btnBackgroundColor={'#206af5'}/>
        </View>
      <Text style={{marginTop:10,textDecorationLine:'underline'}}>Create new account</Text>

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
  signinText:{
    marginTop:-100,
     color:'#206af5',
     fontSize:30,
     fontWeight:'bold'
  },
})