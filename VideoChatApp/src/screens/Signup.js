import React, {  useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'
import {useToast} from 'react-native-toast-notifications'
import axios from 'axios'
import {IP_ADDRESS} from '@env'


export const Signup = ({navigation}) => {


  const [firstName , setFirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [mobile , setMobile] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmPassword , setconfirmPassword] = useState('')

  const toast = useToast()

  const  isValidEmail = (emailaddress) =>{
    return /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g.test(emailaddress);
  }

  const showToast = (textMessage, type)=>{
    toast.show(textMessage, {
      type: type,
      placement: "bottom",
      duration: 2000,
      offset: 30,
      animationType: "zoom-in",
    });
  }

  const onSubmit = () =>{
    
    if(firstName.trim().length == 0 || lastName.trim().length == 0 || mobile.trim().length == 0 ||
      email.trim().length == 0 || password.trim().length == 0 || confirmPassword.trim().length == 0
    ){
      showToast("All Field(s) are Required !", "danger")
    }else if(!isValidEmail(email)){
      showToast("Please enter valid email address !", "danger")
      
    }else if(password !== confirmPassword){
      showToast("Passwords are not matching !", "danger")

    }else{
      axios.post(`http://${IP_ADDRESS}:4000/api/signup/`,
        {firstName, lastName, mobile, email, password,confirmPassword}
      ).then(response =>{
        console.log('res', response.data);
        response.data.status === "SUCCESS" ? navigation.navigate('EmailVerify', {userData : response.data.data}) : showToast(response.data.message, "danger")

      }).catch(e=>
        console.log(e)
      )
    }

  }

  return (
    <View style={styles.container}>
      <View >
      <Text style={styles.signupText}>Signup</Text>

      </View >
      <View style={styles.textFieldContainer}>
        <TextField iconName={'person'}  onChange={val => setFirstName(val)}  name={'first name'} placeHolder={'First Name'} />
        <View style={styles.inputField}>
        <TextField iconName={'person'} onChange={val => setLastName(val)} name={'last name'} placeHolder={'Last Name'} />
        </View>
        <View style={styles.inputField}>
        <TextField iconName={'phone-portrait'} onChange={val => setMobile(val)} name={'mobile'} placeHolder={'Mobile'}  />
        </View>
        <View style={styles.inputField}>
        <TextField iconName={'mail'} onChange={val => setEmail(val)} name={'email'} placeHolder={'E-mail Address'}  />
        </View>
        <View style={styles.inputField}>
        <TextField iconName={'lock-closed'} onChange={val => setPassword(val)} name={'password'} placeHolder={'Password'} secureTextEntry={true} />
        </View>
        <View style={styles.inputField}>
        <TextField iconName={'lock-closed'} onChange={val => setconfirmPassword(val)}  name={'confirmPassword'} placeHolder={'Re-enter Password'} secureTextEntry={true} />
        </View>
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={()=> onSubmit()} btnTitle={'Signup'} btnBackgroundColor={'#206af5'}/>
        </View>
         <Text onPress={()=> navigation.navigate('Signin')} style={{marginTop:10,textDecorationLine:'underline'}}>Already Signup?</Text>

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
    marginTop:-50,
     color:'#206af5',
     fontSize:30,
     fontWeight:'bold'
  },
  textFieldContainer:{
    paddingTop:35,

  },
  btnContainer:{
    paddingTop:20,
    
  }
})