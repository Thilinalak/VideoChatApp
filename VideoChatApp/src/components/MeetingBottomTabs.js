import React from 'react'
import { MeetingScreen } from '../screens/MeetingScreen'
import { ChatTabScreen } from '../screens/ChatTabScreen'
import { PeopleTabScreen } from '../screens/PeopleTabScreen' 
import { WaitingPeopleTabScreen } from '../screens/WaitingPeopleTabScreen' 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


export const MeetingBottomTabs = () => {
  return (
    <Tab.Navigator  barStyle={{backgroundColor:'black'}}>
        <Tab.Screen options={{
          tabBarLabel: 'Meeting',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }} name='Meeting' component={MeetingScreen}/>
        <Tab.Screen  options={()=>({
          hea:'fdfdf',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
            ),
        })} name='Chat' component={ChatTabScreen}/>
          <Tab.Screen options={{
            tabBarLabel: 'People',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-details" color={color} size={26} />
            ),
          }}  name='People' component={PeopleTabScreen}/>
          <Tab.Screen options={{
            tabBarLabel: 'Waiting People',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-multiple-plus" color={color} size={26} />
            ),
          }}  name='WaitingPeopleScreen' component={WaitingPeopleTabScreen}/>
    </Tab.Navigator>
  )
}
