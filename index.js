/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Root from './src/App';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Encountered', 'State updates', 'VirtualizedLists']);
AppRegistry.registerComponent(appName, () => Root);
