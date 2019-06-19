import {AppRegistry} from 'react-native';
import App from './app';
import {name as appName} from './app.json';
import './src/config/StatusBarConfig'; 

AppRegistry.registerComponent(appName, () => App);

