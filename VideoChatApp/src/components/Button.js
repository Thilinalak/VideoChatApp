import {React,View,TouchableOpacity,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Button = ({onPress, style,iconName,color,btnBackgroundColor}) => {
  return (
    <View>
        <TouchableOpacity style={[{backgroundColor:btnBackgroundColor},styles.button]} onPress={onPress}>
            <Icon name={iconName} color={color}size={20}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
      width:60,
      height:60,
      padding:10,
      elevation:10,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:100

    }
})
