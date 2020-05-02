import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Animated from 'react-native-reanimated';
import normalize from 'react-native-normalize';
import color from '@constants/Color';

function CustomTopTabNavigator({ state, descriptors, navigation, position }) {
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.activeTab : styles.tab}>
            <Text style={isFocused ? styles.activeText : styles.normalText}>
              {label}
            </Text>
            {/* <Animated.Text style={{ opacity }}>{label}</Animated.Text> */}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

export default CustomTopTabNavigator;

const styles = StyleSheet.create({
  container: {
    maxHeight: 30,
    paddingLeft: normalize(16),
    backgroundColor: '#ffffff',
  },
  activeText: {
    color: '#ffffff',
    fontFamily: 'Exo-Bold',
    fontSize: normalize(15),
  },
  normalText: {
    fontFamily: 'Exo-Bold',
    color: '#454545',
    fontSize: normalize(15),
  },
  activeTab: {
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.MAIN_COLOR,
    borderRadius: normalize(20),
  },
  tab: {
    // flex: 1,
    marginHorizontal: normalize(10),
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
