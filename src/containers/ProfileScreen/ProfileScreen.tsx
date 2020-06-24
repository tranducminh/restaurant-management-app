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
import React, { useEffect, useState } from 'react';
import { getUserInfo } from '@api/index';
import auth from '@react-native-firebase/auth';
import { userInfoType } from '@type/index';

const checkIcon = require('@assets/Icons/check.png');
const profileIcon = require('@assets/user.png');
const settingIcon = require('@assets/reset.png');
const logoutIcon = require('@assets/logout.png');
const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = useState<userInfoType>({
    email: '',
    name: '',
    position: '',
    restaurantID: '',
    status: '',
    avatar: '',
    coverImage: '',
  });

  const onEditProfile = () => {
    navigation.navigate('EditProfileScreen', { ...user });
  };

  const onSignOut = () => {
    auth().signOut();
  };

  useEffect(() => {
    async function getUser() {
      let _user = (await getUserInfo(auth().currentUser?.uid)) as userInfoType;
      setUser(_user);
    }
    getUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent type="BACK" title="My Profile" />
      <RenderUserInfo {...user} />
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={onEditProfile}>
          <Image source={profileIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={settingIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Reset password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSignOut}>
          <Image source={logoutIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <Text />
    </SafeAreaView>
  );
};

const RenderUserInfo = ({
  name,
  position,
  avatar,
  coverImage,
}: {
  name: string;
  position: string;
  avatar: string;
  coverImage: string;
}) => {
  return (
    <>
      <ImageBackground
        source={{
          uri: coverImage,
        }}
        style={styles.coverImage}
      />
      <View style={styles.imageContainer}>
        <CustomImage style={styles.image} url={avatar} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.position}>{position}</Text>
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
