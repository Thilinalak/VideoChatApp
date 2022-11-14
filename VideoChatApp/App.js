// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React,{useState, useRef, useEffect}from 'react'
import { View ,StyleSheet} from 'react-native'
import {GettingCall} from './src/components/GettingCall'
import {Video} from './src/components/Video'
import {Call} from './src/components/Call'
import { MediaStream,EventOnAddStream, RTCIceCandidate, RTCPeerConnection, RTCSessionDescription } from 'react-native-webrtc'
import { Button } from './src/components/Button'
import Utils from './src/components/Utils'
import  firebase  from '@react-native-firebase/firestore'

export default App = () => {

  const [localStream, setLocalStream] = useState( new MediaStream()|null)
  const [remoteStream, setRemoteStream] = useState( new MediaStream()|null)
  const [gettingCall, setGettingCall] = useState(false)
  const pc = useRef(new RTCPeerConnection())
  const connecting = useRef(false)

  useEffect(()=>{

    const cReff = firebase().collection('meet').doc('chatId')

    const subscribe =  cReff.onSnapshot(snapShot=>{
      const data = snapShot.data()

      // onAnswer start the call
      if(pc.current && !pc.current.remoteDescription && data && data.answer){
        pc.current.setRemoteDescription(new RTCSessionDescription(data.answer))
      }

      // if there is offer for the chatID set getting call flag
      if(data && data.offer && !connecting.current){
        setGettingCall(true)
      }
    })

    // onDelete of collection call hangup
    // the other side has clicked on hangup
    const deleteSubscribe = cReff.collection('callee').onSnapshot(snapShot=>{
      snapShot.forEach(change=>{
        if(change.type == 'removed'){
          hangup()
        }
      })
    })

    return()=>{
      subscribe()
      deleteSubscribe()
    }
  },[])

  const configuration = {
    iceServers: [
      {
        urls: [
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };

  const setupWebrtc = async()=>{
    pc.current = new RTCPeerConnection(configuration)

    // Get audio and video for the Call
    const stream = await Utils.getStream()
    if(stream){
      setLocalStream(stream)
      pc.current.addStream(stream)
    }

    // Get the remote stream once it available
    pc.current.onaddstream = (EventOnAddStream)=>{
      setRemoteStream(EventOnAddStream.stream)
    }
  }

// startCall
  const startCall = async()=>{
    console.log('Calling');
    connecting.current = true

    try {
      // setup webrtc
    await setupWebrtc()

    // Document for Call
    const cRef =  firebase().collection('meet').doc('chatId')
    
    // Exchange the ICE candidates between caller and callee
    await helper(cRef)


    // Create Offer
      const offerDesc = await pc.current.createOffer()
      pc.current.setLocalDescription(offerDesc)

      const offer ={
        sdp: offerDesc.sdp,
        type: offerDesc.type,
      }

      cRef.set(offer)
    } catch (error) {
      console.log(error);
    }
    
  }

  const helper = async(cRef)=>{
    const candidateCollection = cRef.collection('caller')

    if(pc.current){

      // On new ICE Candidate add to firebase
      pc.current.onicecandidate = (e)=>{
        if(e.candidate){
          candidateCollection.add(e.candidate)
        }
      }
    }

    // Get the IceCandidate added to firestore and add candidate to local peer connection
    cRef.collection('callee').onSnapshot((snapShot) =>{
      snapShot.docChanges().forEach(change=>{
        if(change.type === 'added'){
          const candidate = new RTCIceCandidate(change.doc.data())
          pc.current.addIceCandidate(candidate)
        }
      })
    })
  }

  // Join
  const join  = async()=>{
    console.log('Joing to Call');
    connecting.current = true
    setGettingCall(false)

    try {
      const cRef =  firebase().collection('meet').doc('chatId')
      const offer = (await cRef.get()).data()?.offer;

      if(offer){
        // setup webrtc
        await setupWebrtc()

        // Exchange the IceCandidates
        // Check the parameters, 
        await helper(cRef)

        pc.current.setRemoteDescription(new RTCSessionDescription(offer))

        // Create answer for the call and update document with answer
        const answer =  await pc.current.createAnswer()
        pc.current.setLocalDescription(answer)

        const answerInfo ={
          answer:{
            sdp: answer.sdp,
            type: answer.type,
          }
        }
        cRef.update(answerInfo)
      }
    } catch (e) {
      console.log(e);
    }
  }

  // hangUp
  const hangup = async()=>{
    setGettingCall(false)
    connecting.current = false
    streamCleanUp()
    firestoreCleanUp()

    pc.current.close()
  }
  const streamCleanUp = async()=>{
    new MediaStream().getTracks().map(t=>t.stop())
    new MediaStream().release()
    setLocalStream(null)
    setRemoteStream(null)
    
  }
  const firestoreCleanUp = async()=>{
    const cRef =  firebase().collection('meet').doc('chatId')

    const calleeCandidates= await cRef.collection('callee').get()
    calleeCandidates.forEach(async(candidate)=>{
      await candidate.ref.delete()
    })
    const callerCandidates= await cRef.collection('caller').get()
    callerCandidates.forEach(async(candidate)=>{
      await candidate.ref.delete()
    })

    cRef.delete()
  }


  // displays new gettingCall Component
  if(gettingCall){
    return <GettingCall join={join} hangup={hangup}/>
  }

  // Displays local stream on calling
  // Displays both local and remote stream once call is connected
  if(localStream){
    return <Video hangup={hangup} localStream={localStream} remoteStream={remoteStream}/>
  }

  // Displays Call Button
  return (
    <View style={styles.container}>
      <Button onPress={startCall} color={'white'} iconName={'video'} btnBackgroundColor={'blue'} />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
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
