// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SplashScreen } from './src/screens/SplashScreen'
import { Signin } from './src/screens/Signin'
import { Signup } from './src/screens/Signup'
import { MeetingScreen } from './src/screens/MeetingScreen'
import { PreviewScreen } from './src/screens/PreviewScreen'
import { WaitingScreen } from './src/screens/WaitingScreen'
import { EmailVerify } from './src/screens/EmailVerify'
import { BottomTabBar} from './src/components/BottomTabBar'
import { MeetingBottomTabs} from './src/components/MeetingBottomTabs'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ToastProvider } from 'react-native-toast-notifications'

import { MyDrawer } from './src/components/MyDrawer'
import { SendbirdCalls } from '@sendbird/calls-react-native';

SendbirdCalls.initialize("D2ADBF43-48D5-4581-9655-DA570E761BF5");

const Stack = createNativeStackNavigator();

export default App = () => {

  return (
    <ToastProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='Signin' component={Signin}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='EmailVerify' component={EmailVerify}/>
        <Stack.Screen name='BottomTabBar' component={BottomTabBar}/>
        <Stack.Screen name='PreviewScreen' component={PreviewScreen}/>
        <Stack.Screen name='WaitingScreen' component={WaitingScreen}/>
        <Stack.Screen name='MeetingBottomTabs' component={MeetingBottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ToastProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})




















// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
