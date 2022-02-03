import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppTabNavigator from './src/routes/AppTabNavigator';

AppRegistry.registerComponent(appName, () => AppTabNavigator);
