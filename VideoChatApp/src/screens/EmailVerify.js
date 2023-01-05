import React, { useState } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'
import {useToast} from 'react-native-toast-notifications'
import axios from 'axios' 
import { log } from 'react-native-reanimated'


export const EmailVerify = ({navigation, route}) => {

  console.log(route.params);
  const [otpCode, setOtpCode] = useState('')
  const toast = useToast()

  const onVerify = () =>{
    if(otpCode.trim().length == 0 ){
      toast.show("Please enter OTP Code that we sent to your email address", {
        type: "danger",
        placement: "bottom",
        duration: 6000,
        offset: 30,
        animationType: "zoom-in",
      });
    }else{
      axios.post('http://localhost:4000/api/verifyOtp',{otpCode})
      .then(response =>{
        
      })
      .catch(e => console.log(e))
      // navigation.navigate('Signin') 
    }
  }
  const onResentOTP = () =>{
    
      axios.get('http://localhost:4000/api/resendOtp')
      .then(response =>{

      })
      .catch(e => console.log(e))
    
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.emailText}>Email verification</Text>
      </View >
      <View>
      <Text>We have sent OTP code to your email address, Please enter that  code</Text>
      </View >
        <TextField onChange={val => setOtpCode(val)} name={'otp code'} placeHolder={'Enter OTP code'} />
        <View>
          <Button onPress={onVerify} btnTitle={'Verify'} btnBackgroundColor={'#206af5'}/>
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