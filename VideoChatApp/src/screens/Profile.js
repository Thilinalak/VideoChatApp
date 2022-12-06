import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { ProflleText } from '../components/ProflleText'
export const Profile = () => {
  return (
        <View style={styles.constainer}>
           
            <View style={styles.detailCard}>
            <View style={styles.imageContainer}>
                <Image style={styles.profileImage} source={require('../assets/images/profile-icon.png')} />                
            <Text style={{marginTop:25, fontSize:18 ,color:'black'}}>My Profile</Text>
            </View>
            <View style={styles.textContainer}>
                <ProflleText titleText={'First Name'} text={'Alex'} iconName={'person'}/>
                <View style={styles.textPosition}>
                <ProflleText titleText={'Last Name'} text={'Halse'} iconName={'person'}/>
                </View>
                <View style={styles.textPosition}>
                <ProflleText titleText={'Email Address'} text={'Alec@gmail.com'} iconName={'mail'}/>
                </View>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer:{
      flex:1,
      backgroundColor:'#5389fc',
      alignItems:'center'
    },
    imageContainer:{
        marginTop:-80,
        alignItems:'center'
    },
    profileImage:{
        width:130,
        height:130,
        borderRadius:100,
        borderWidth:1,
        borderColor:'#0d4bd1',
        elevation:15
    },
    detailCard:{
        backgroundColor:'#fff',
        height:'75%',
        width:'90%',
        borderRadius:20,
        elevation:15,
        marginTop:90,
    },
    textContainer:{
        marginLeft:25,
        marginRight:25,
        marginTop:40,
    },
    textPosition:{
        marginTop:8
    }
})