import React, { useEffect } from 'react'
import {Image, StyleSheet, Text, View } from 'react-native'

export const SplashScreen = ({navigation}) => {


  useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('Signin')
    },500)
  },[])

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/video-call.png')}/>
        <Text style={styles.text}>Video Chat App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  text:{
    color:'#206af5',
    fontSize:16,
    fontWeight:'600',
    marginTop:-10
  },
  logo:{
    width:130,
    height:130,
    marginTop:-50
  }
})