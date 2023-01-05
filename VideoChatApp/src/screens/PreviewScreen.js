import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Button} from '../components/Button';
import {SendbirdCalls} from '@sendbird/calls-react-native';
import messaging from '@react-native-firebase/messaging';

export const PreviewScreen = ({route, navigation}) => {
  const [localStream, setLocalStream] = useState();
  const [localAudioStream, setLocalAudioStream] = useState();
  const [videoButton, setVideoButton] = useState(true);
  const [micButton, setMicButton] = useState(true);

  const onVideoButtonPress = () => {
    if (videoButton == true) {
      startLocalStream();
      setVideoButton(false);
    } else {
      setLocalStream(null);
      setVideoButton(true);
    }
  };
  const onMicButtonPress = async () => {
    if (micButton == true) {
      setMicButton(false);
    } else {
      try {
        setLocalAudioStream();
        setMicButton(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const startLocalStream = async () => {};
  const getNormlCall = async () => {
    try {
      // Authenticate
      SendbirdCalls.authenticate({
        userId: '2ba5a611-5706-480a-a90c-930125a4af95',
        accessToken: 'c23d138c762b60e86d63bef73db312a401a787b9',
      })
        .then(user => {
          // The user has been authenticated successfully
          console.log(
            `${JSON.stringify(user)} user has been authenticated successfully`,
          );

          dialSendBird();
        })
        .catch(error => {
          console.log(error);
        });

      // Update FCM push token
      if (Platform.OS === 'android') {
        const fcmToken = await messaging().getToken();
        await SendbirdCalls.registerPushToken(fcmToken);
        // The FCM Push Token has been registered successfully
      }
    } catch (e) {
      console.log(e);
    }
  };

  const dialSendBird = async () => {
    let callOptions = {
      audioEnabled: true,
      videoEnabled: true,
      frontCamera: true,
    };

    const callProps = await SendbirdCalls.dial(
      '2ba5a611-5706-480a-a90c-930125a4af955',
      false,
      callOptions,
    );
    console.log('callProps.callId ', callProps.callId);
    const directCall = await SendbirdCalls.getDirectCall(callProps.callId);
    directCall.addListener({
      // ...
    });
  };

  const onStartMeeting = async () => {
    try {
      // Authenticate
      SendbirdCalls.authenticate({
        userId: '2ba5a611-5706-480a-a90c-930125a4af95',
        accessToken: 'c23d138c762b60e86d63bef73db312a401a787b9  ',
      })
        .then(user => {
          // The user has been authenticated successfully
          console.log(
            `${JSON.stringify(user)} user has been authenticated successfully`,
          );
        })
        .catch(error => {
          console.log(error);
        });

      const room = await SendbirdCalls.createRoom({
        roomType: SendbirdCalls.RoomType.SMALL_ROOM_FOR_VIDEO,
      });
      // Create room succeeded
      console.log('ROOM_STATUS ', room.state);
      console.log('ROOM_ID ', room.roomId);

      await room.enter({
        videoEnabled: true,
        audioEnabled: true,
      });
      // User has successfully entered
    } catch (e) {
      console.log(e);
    }
    // navigation.navigate('MeetingBottomTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prepareText}>Get prepare to meeting</Text>
      <View style={styles.localVideo}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onMicButtonPress}
          style={styles.touchableBtn}>
          <Feather
            name={micButton ? 'mic-off' : 'mic'}
            color={'#fff'}
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onVideoButtonPress}
          style={styles.touchableBtn}>
          <Feather
            name={videoButton ? 'video-off' : 'video'}
            color={'#fff'}
            size={20}
          />
        </TouchableOpacity>
      </View>
      {route.params.host !== 'HOST' ? (
        <View style={styles.position}>
          <TextInput
            style={styles.textField}
            placeholder="Please Enter your name"
          />
        </View>
      ) : null}

      <View style={styles.position}>
        <Button
          onPress={getNormlCall}
          btnTitle={route.params.host === 'HOST' ? 'Start' : 'Join Meeting'}
          btnBackgroundColor={'#206af5'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  localVideo: {
    backgroundColor: 'black',
    width: '100%',
    height: 350,
    marginTop: 30,
    borderWidth: 1,
  },
  trcView: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignContent: 'space-between',
  },
  touchableBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 50,
    width: 50,
    backgroundColor: '#2e76f2',
    marginHorizontal: 5,
  },
  prepareText: {
    marginTop: 25,
    color: '#206af5',
    fontWeight: '600',
  },
  position: {
    marginTop: 25,
  },
  textField: {
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
