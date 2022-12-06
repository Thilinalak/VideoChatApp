import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RTCView } from 'react-native-webrtc'
import  Feather  from 'react-native-vector-icons/Feather'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
 
export const MeetingScreen = () => {
  return (
    <View style={styles.conatainer}>
        <RTCView style={styles.video}/>
        <RTCView style={styles.localVideo}/>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.touchableBtn}>
                {/* <Feather name="mic" color={'red'} size={20}/> */}
                <Feather name="mic-off" color={'red'} size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableBtn}>
                <MaterialCommunityIcons name="phone-hangup" color={'red'} size={20}/>

            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableBtn}>
                <Feather name="video" color={'red'} size={20}/>
                {/* <Feather name="video-off" color={'red'} size={20}/> */}

            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    conatainer:{
        flex:1
    },
    buttonContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        marginBottom:50,
        alignContent:'space-between'
    },
    video:{
        position:'absolute',
        width:'100%',
        height:'100%',backgroundColor:'blue'
    },
    localVideo:{
        width:120,
        height:140,
        backgroundColor:'black',
        
    },
    touchableBtn:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        height:50,
        width:50,
        backgroundColor:'#fff',
        marginHorizontal:5
    }
    
})
