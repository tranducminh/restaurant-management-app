/* eslint-disable no-sparse-arrays */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Root from './src/App';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Encountered', 'State updates', 'VirtualizedLists']);
YellowBox.ignoreWarnings(['Animated: `useNativeDriver` was not specified']);
YellowBox.ignoreWarnings([
  'Sending "onAnimatedValueUpdate" with no listeners registered.',
]);
YellowBox.ignoreWarnings([
  "Can't perform a React state update on an unmounted component",
  "Picker has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/picker' instead of 'react-native'. See https://github.com/react-native-community/react-native-picker",
  ,
  `Possible Unhandled Promise Rejection (id: 0):
  Error: [storage/quota-exceeded] Quota on your Firebase Storage bucket has been exceeded.`,
]);
console.ignoredYellowBox;
AppRegistry.registerComponent(appName, () => Root);
