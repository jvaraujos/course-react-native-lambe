import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './src/App'
import storeConfig from './src/store/storeConfig'
import axios from 'axios';

axios.defaults.baseURL = "https://study-react-native-lambe-default-rtdb.firebaseio.com/"

class Redux extends Component {
    render() {
        return (
            <Provider store={storeConfig} >
                <App></App>
            </Provider >
        )
    }
}

AppRegistry.registerComponent(appName, () => Redux);
