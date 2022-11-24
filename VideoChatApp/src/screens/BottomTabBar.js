import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  {MyDrawer}  from '../components/MyDrawer';
import  {MyMeetingScreen}  from './MyMeetingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export const BottomTabBar = () => {
  return (
    
    <Tab.Navigator 
    initialRouteName='MyDrawer'
    screenOptions={
  
    ({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === "My Meeting") {
          iconName = focused ? 'people' : 'people-outline';
        } 
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#206af5',
      tabBarInactiveTintColor: 'black',
      tabBarInactiveBackgroundColor:'white',
      headerShown: false,
      tabBarStyle:{
        position: 'absolute',
        height:55,
        marginTop:10,
      },
      tabBarLabelStyle: {
        fontSize: 13,
        fontWeight:'600',
        marginBottom:10
      },
      
    })}
      >
    
      <Tab.Screen name="Home" component={MyDrawer}/>
      <Tab.Screen name="My Meeting" component={MyMeetingScreen}/>
    </Tab.Navigator>
  )
}
