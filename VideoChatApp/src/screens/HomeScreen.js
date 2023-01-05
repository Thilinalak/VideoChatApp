import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {BackHandler, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HomeScreen = ({navigation}) => {

  useFocusEffect(
    React.useCallback(()=>{
      const backhandler = BackHandler.addEventListener('hardwareBackPress',()=> BackHandler.exitApp())
      return () => backhandler.remove()
    },[])
  )

  const onStartNewMeeting = ()=>{
    navigation.navigate('PreviewScreen',{host:"HOST"})
  }

  return (
    <View style={styles.constainer}>
      <View style={styles.welcomeText}>
        <Text style={[styles.textStyle, {fontWeight: '400'}]}>Hi, Welcome</Text>
      </View>
      <View style={styles.btnPosition}>
        <TouchableOpacity onPress={onStartNewMeeting} style={styles.btnCard}>
          <Ionicons name="add-sharp" size={40} color={'#fff'} />
          <Text style={styles.textStyle}>Start New Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5389fc',
  },
  btnCard: {
    elevation: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '90%',
    backgroundColor: '#1854de',
    borderRadius: 25,
  },
  welcomeText: {
    alignItems: 'center',
    marginTop: 60,
  },
  textStyle: {
    color: '#fff',
    fontSize: 17,
  },
  btnPosition: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#f0f3fa',
    marginTop: 200,
    paddingBottom: 110,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
