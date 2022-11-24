import {React,View,TouchableOpacity,StyleSheet, Text} from 'react-native'

export const Button = ({onPress, btnTitle,btnBackgroundColor}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={[{backgroundColor:btnBackgroundColor},styles.button]} onPress={onPress}>
            <Text style={styles.btnTitleStyle}>{btnTitle}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'center'
  },
    button:{
      width:270,
      height:45,
      padding:10,
      elevation:10,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:100

    },
    btnTitleStyle:{
      color:'white',
      fontSize:17,
      fontWeight:'700'      
    }
})
