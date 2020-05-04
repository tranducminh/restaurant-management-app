import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
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
    maxHeight: 50,
    paddingLeft: normalize(16),
    backgroundColor: '#ffffff',
  },
  activeText: {
    color: color.MAIN_COLOR,
    fontFamily: 'Exo-Bold',
    fontSize: normalize(15),
  },
  normalText: {
    fontFamily: 'Exo-Bold',
    color: '#a3a3a3',
    fontSize: normalize(15),
  },
  activeTab: {
    paddingHorizontal: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: normalize(20),
    borderBottomWidth: 2,
    borderColor: color.MAIN_COLOR,
  },
  tab: {
    paddingHorizontal: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
