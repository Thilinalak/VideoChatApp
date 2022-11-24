import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screens/HomeScreen';
import {Profile} from '../screens/Profile';
import {SignoutDialog} from '../components/SignoutDialog';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{drawerInactiveTintColor:'#333',drawerLabelStyle: {marginLeft: -20, fontWeight: '500'}}}
      drawerContent={props => <CustomeDrawer {...props} />}>
      <Drawer.Screen
        options={{
          headerTitle: '',
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
        name="Home "
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen options={{
        drawerIcon:({color})=>(<Ionicons name='log-out-outline' size={22} color={color}/>)
      }} name='Sign Out' component={SignoutDialog}/>
    </Drawer.Navigator>
  );
};

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
const CustomeDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#fff'}}>
        <ImageBackground
          source={require('../assets/images/bground.jpg')}
          style={{padding: 25, marginTop: -5}}>
          <Image
            source={require('../assets/images/profile-icon.png')}
            style={styles.profileImage}
          />
          <Text style={styles.nameStyle}>Alex Hales</Text>
          <Text style={styles.emailStyle}>alexhales@gmail.com</Text>
        </ImageBackground>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  nameStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: 'white',
    fontWeight: '700',
  },
  emailStyle: {
    fontSize: 13,
    color: 'white',
    fontWeight: '500',
  },
});
