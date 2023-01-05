import React, { useEffect, useState } from 'react'
import {BackHandler, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'
import {useToast} from 'react-native-toast-notifications'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'



export const Signin = ({navigation}) => {

  useEffect(()=>{
      const backhandler  = BackHandler.addEventListener('hardwareBackPress', ()=> BackHandler.exitApp())
      return () => backhandler.remove()
  },[])

  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const toast = useToast()

  const showToast = (message, type) =>{
    toast.show(message, {
      type: type,
      placement: "bottom",
      duration: 2000,
      offset: 30,
      animationType: "zoom-in",
    });
  }

  const onSignin = () =>{
    if(username.trim().length == 0 || password.trim().length == 0){
      showToast("Both Fields are Required !", "danger")
      
    }else{
      axios.post('http://localhost:4000/api/signin',
      {username, password}).then(async response =>{
        if(response.data.status === "SUCCESS"){
          try {
            await AsyncStorage.setItem('UserData', JSON.stringify(response.data.user))
          navigation.navigate('BottomTabBar')
            
          } catch (err) {
            console.log(err);
          }
        }else{ showToast(response.data.error, "danger")}
    })
    .catch(err => console.log(err))
  }
  }
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.signinText}>Signin</Text>
      </View >
        <TextField onChange={val => setUsername(val)} iconName={'person'} name={'username'} placeHolder={'Username'} />
        <View style={styles.inputField}>
        <TextField onChange={val => setPassword(val)} iconName={'lock-closed'} name={'password'} placeHolder={'Password'} secureTextEntry={true} />
        </View>
        <View>
          <Button onPress={onSignin} btnTitle={'Signin'} btnBackgroundColor={'#206af5'}/>
        </View>
      <Text onPress={()=> navigation.navigate('Signup')} style={{marginTop:10,textDecorationLine:'underline'}}>Create new account</Text>

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