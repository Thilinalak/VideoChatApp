import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const WaitingParticipant = () => {
  return (
    <View style={styles.conatainer}>
        <Text style={styles.nameText}>Thilina Lakshan</Text>
        <TouchableOpacity style={styles.touchableBtn}>

        <Text style={styles.admitText}>Admit</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    conatainer:{
        height:55,
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5
    },
    nameText:{
        marginLeft:20,
        color:'black',
        fontWeight:'600',
        fontSize:15
    },
    admitText:{
        color:'#FFF',
        fontWeight:'700'
    },
    touchableBtn:{
        alignItems:'center',
        justifyContent:'center',
        height:30,
        width:70,
        backgroundColor:'#269920',
        marginRight:10,borderRadius:10
    }
})
