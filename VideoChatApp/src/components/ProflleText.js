import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const ProflleText = ({titleText, text, iconName}) => {
  return (
    <View >
        <Text style={styles.titleText}>{titleText}</Text>
        <View style={styles.textArea}>
        <Text style={styles.text}>{text}</Text>
        <Ionicons name={iconName} size={20} color={'#215cdb'} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:11
    },
    text:{
        color:'black',fontWeight:'500'
    },
    textArea:{
        flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
        width:'100%',
        height:45,
        backgroundColor:'#ededed',
        paddingLeft:12,
        paddingRight:13,
        marginTop:5,
        borderRadius:2
    }
})
