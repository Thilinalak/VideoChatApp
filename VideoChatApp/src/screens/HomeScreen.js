import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeScreen = () => {
  return (
    <View style={styles.constainer}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    constainer:{
      flex:1,
      position:'absolute'
    }
})