import {React,View,StyleSheet, TextInput,} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const TextField = ({onChange, iconName , placeHolder, name, secureTextEntry, keyboardType}) => {
  return (
    <View style={styles.container}>
        <Ionicons style={styles.iconStyle} name={iconName} color='#1934cf' size={20} />
        <TextInput onChangeText={onChange} style={styles.textInputStyle} name={name} 
        placeholder={placeHolder} secureTextEntry={secureTextEntry} keyboardType={keyboardType} 
        underlineColorAndroid="transparent" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      width:320,
      height:50,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderRadius:50,
      backgroundColor:'#fff',
      margin:25
    },
    iconStyle:{
      marginLeft:17
    },
    textInputStyle:{
        flex:1,
        paddingTop:10,
        paddingRight:20,
        marginLeft:10,
        fontSize:18,
        borderRadius:50,
        backgroundColor: '#fff',
    }
})
