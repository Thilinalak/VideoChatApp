import React, { useState }  from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from './Button'
import {mediaDevices, MediaStream, RTCView} from 'react-native-webrtc'

const ButtonContainer = ({hangup})=>{
    return(
        <View style={styles.btnContainer}>
            <Button btnBackgroundColor={'red'} iconName={'phone'} color={'white'} onPress={hangup} />
    </View>
    )
}

export const Video = ({
    hangup,
    localStream,
    remoteStream,
}) => {

    // const [localStream ,setLocalStream] = useState(new MediaStream())
    // const [remoteStream ,setRemoteStream] = useState(new MediaStream())


    // onCall just display the local Stream
    if(localStream && !remoteStream){
        return <View style={styles.container}>
            <RTCView streamURL={localStream.toURL()} objectFit={'cover'} mirror
            style={styles.video}/>
            <ButtonContainer hangup={hangup} />
        </View>
    }
    // once call connected it will display the local Stream  on top of remote stream
    if(localStream && !remoteStream){
        return <View style={styles.container}>
            <RTCView streamURL={remoteStream.toURL()} objectFit={'cover'} mirror
            style={styles.videoLocal}/>
            <ButtonContainer hangup={hangup} />
        </View>
    }
  return  <ButtonContainer hangup={hangup} />
}

const styles = StyleSheet.create({
    btnContainer:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:60
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    video:{
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    videoLocal:{
        position:'absolute',
        width:150,
        height:150,
        top:0,
        left:20,
        elevation:10,
    }
})