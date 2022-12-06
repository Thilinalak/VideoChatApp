import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { WaitingParticipant } from '../components/WaitingParticipant'

export const WaitingPeopleTabScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Waiting Participants</Text>
      </View>
      <View>
        <ScrollView style={styles.participantContainer}>

        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        <View style={{marginTop:5,marginBottom:5}}>
          <WaitingParticipant/>
        </View>
        
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  titleBar:{
    height:55,
    width:'100%',
    backgroundColor:'#5389fc',
    justifyContent:'center',paddingLeft:25
  },
  title:{
    color:'#fff',
    fontSize:18
  },
  participantContainer:{
    paddingTop:5,
    paddingLeft:15,
    paddingRight:15,
  }


})