import {React, } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button } from './Button'

export const GettingCall = ({
hangup, join
}) => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/bbimage.jpg')} style={styles.image}/>
        <View style={styles.btnContainer}>
            <View style={{marginRight:50}}>
            <Button onPress={join} iconName={'phone'} color={'white'} btnBackgroundColor={'#07b310'}/>
            </View>
            <View style={{marginBottom:50}}>
            <Button onPress={hangup} iconName={'phone'} color={'white'} btnBackgroundColor={'red'}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center'
    },
    image:{
        position:'absolute',
        width:'100%',
        height:'100%'
    },
    btnContainer:{
        flexDirection:'row',
        bottom:20
    }
  })
