import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'


export const EmailVerify = () => {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.emailText}>Email verification</Text>
      </View >
      <View>
      <Text>We have sent OTP code to your email address, Please enter that  code</Text>
      </View >
        <TextField name={'otp code'} placeHolder={'Enter OTP code'} />
        <View>
          <Button btnTitle={'Verify'} btnBackgroundColor={'#206af5'}/>
        </View>

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
  emailText:{
    marginTop:-100,
     color:'#206af5',
     fontSize:30,
     fontWeight:'500'
  },
})