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
console.ignoredYellowBox;
AppRegistry.registerComponent(appName, () => Root);
