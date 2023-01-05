import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  Feather  from 'react-native-vector-icons/Feather'
 

export const People = () => {
  return (
    <View style={styles.conatainer}>
        <Text style={styles.nameText}>Thilina Lakshan</Text>
        <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.touchableBtn}>
                {/* <Feather name="mic" color={'#fff'} size={20}/> */}
                <Feather name="mic-off" color={'#fff'} size={20}/>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.touchableBtn}>
                <Feather name="video" color={'#fff'} size={20}/>
                {/* <Feather name="video-off" color={'#fff'} size={20}/> */}

            </TouchableOpacity>
        </View>

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
    buttonContainer:{
        flexDirection:'row',
        marginRight:20
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
        height:40,
        width:40,
        borderRadius:100,
        backgroundColor:'#206af5',
        marginHorizontal:5
    }
})
