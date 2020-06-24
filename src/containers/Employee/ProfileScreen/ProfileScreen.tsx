import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import CustomImage from '@common/Image';
import Color from '@constants/Color';
import HeaderComponent from '@common/HeaderComponent';
import React from 'react';

const checkIcon = require('@assets/Icons/check.png');
const profileIcon = require('@assets/user.png');
const settingIcon = require('@assets/reset.png');
const logoutIcon = require('@assets/logout.png');
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent type="BACK" title="My Profile" />
      {renderUserInfo()}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Image source={profileIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={settingIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Reset password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={logoutIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <Text />
    </SafeAreaView>
  );
};

const renderUserInfo = () => {
  return (
    <>
      <ImageBackground
        source={{
          uri:
            'https://firebasestorage.googleapis.com/v0/b/restaurant-management-5b904.appspot.com/o/1592983949079?alt=media&token=d97f9ef8-0421-4a9a-9694-74a3781ee277',
        }}
        style={styles.coverImage}
      />
      <View style={styles.imageContainer}>
        <CustomImage
          style={styles.image}
          url="https://firebasestorage.googleapis.com/v0/b/restaurant-management-5b904.appspot.com/o/girl.jpg?alt=media&token=54552efc-5dc0-4b91-868c-bbf6fc3d2695"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>Trần Đức Minh</Text>
        <Text style={styles.position}>Employee</Text>
        <View style={styles.info}>
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Starting date</Text>
            <Text style={styles.itemValue}>9/6/1999</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Status</Text>
            <Image source={checkIcon} style={styles.icon} />
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  coverImage: {
    width: '100%',
    height: normalize(180),
    alignSelf: 'center',
  },
  cover: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    opacity: 0.1,
  },
  imageContainer: {
    alignSelf: 'center',
    position: 'absolute',
    top: normalize(225),
    borderRadius: normalize(50),
    padding: normalize(3),
    backgroundColor: '#ffffff',
  },
  image: {
    borderRadius: normalize(50),
    width: normalize(100),
    height: normalize(100),
  },
  content: {
    paddingTop: normalize(70),
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(22),
  },
  position: {
    fontFamily: 'Exo-Italic',
    fontSize: normalize(16),
  },
  info: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: normalize(10),
    marginHorizontal: normalize(16),
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  item: {
    padding: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(17),
    marginBottom: normalize(5),
    color: Color.MAIN_COLOR,
  },
  itemValue: {
    fontFamily: 'Exo-Italic',
    fontSize: normalize(15),
  },
  icon: {
    width: normalize(20),
    height: normalize(20),
  },
  actions: {
    paddingVertical: normalize(15),
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(20),
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
  },
  buttonText: {
    marginLeft: normalize(15),
    fontFamily: 'Exo-Medium',
    fontSize: normalize(16),
  },
});
