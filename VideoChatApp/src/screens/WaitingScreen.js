import React from 'react'
import {StyleSheet, Text, View } from 'react-native'

export const WaitingScreen = () => {
  return (
    <View style={styles.conatainer}>
        <Text style={styles.text}>Please wait for Host start the meeting...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    conatainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'black',
        fontSize:25, marginTop:-300
    }
})
