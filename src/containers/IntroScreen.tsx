import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import normalize from 'react-native-normalize';
import color from '@constants/Color';

const icon = require('@assets/arrow.png');
const tick = require('@assets/tick.png');
const IntroScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.boldText}>Manage</Text>
          <Text style={styles.thinText}>your</Text>
          <Text style={styles.boldText}>restaurant</Text>
          <Text style={styles.mediumText}>easier</Text>
        </View>
      </View>
      <Image source={tick} style={styles.tick} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StartScreen')}>
        <Text style={styles.buttonText}>Get started</Text>
        <Image source={icon} style={styles.image} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.MAIN_COLOR,
  },
  content: {
    paddingHorizontal: normalize(30),
    marginTop: normalize(80),
    flexDirection: 'column',
  },
  boldText: {
    fontFamily: 'Exo-Italic',
    color: '#ffffff',
    fontSize: normalize(50),
  },
  thinText: {
    fontFamily: 'Exo-Italic',
    fontSize: normalize(50),
    color: '#ffffff',
  },
  mediumText: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(60),
    color: '#ffffff',
  },
  title: {
    marginBottom: normalize(30),
  },
  button: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-end',
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(50),
    borderBottomLeftRadius: normalize(25),
    borderTopLeftRadius: normalize(25),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Exo-Bold',
    fontSize: normalize(20),
    color: '#575757',
  },
  image: {
    width: normalize(25),
    height: normalize(25),
    marginLeft: normalize(20),
  },
  tick: {
    width: normalize(150),
    height: normalize(150),
    alignSelf: 'center',
    marginBottom: normalize(50),
  },
});
