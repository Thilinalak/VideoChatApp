import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {People} from '../components/People';

export const PeopleTabScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Peoples</Text>
      </View>
      <View>
        <ScrollView style={styles.participantContainer}>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
          <View style={{marginTop: 5, marginBottom: 5}}>
            <People />
          </View>
        </ScrollView>
      </View>
      <View style={styles.shareLinkSection}>
        <TouchableOpacity style={styles.copyLinkButton}>
          <Text style={styles.shareLinkText}>Copy Invite Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar: {
    height: 55,
    width: '100%',
    backgroundColor: '#5389fc',
    justifyContent: 'center',
    paddingLeft: 25,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  participantContainer: {
    height: '83%',
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  shareLinkSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderTopColor: 'grey',
  },
  copyLinkButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '80%',
    borderRadius: 50,
    backgroundColor: '#0c57c7',
  },
  shareLinkText: {
    color: '#fff',
    fontWeight: '500',
  },
});
